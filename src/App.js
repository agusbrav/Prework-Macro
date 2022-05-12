import "./App.css";
import { useState } from "react";
import { ethers } from "ethers";
import Greeter from "./artifacts/contracts/Greeter.sol/Greeter.json";
import Token from "./artifacts/contracts/PreworkToken.sol/Token.json";

// Update with the contract address logged out to the CLI when it was deployed
const greeterAddress = "0xc00598Bf0ed5F3B32ae9B63A15eD5DBE5F2E87C8";
const tokenAddress = "0xC0d4cc23757Ca89F7a9dA31EAdaFcDF753Bdc33b";

function App() {
  // store greeting in local state
  const [greeting, setGreetingValue] = useState();
  // store transfer value in local state
  const [transferValue, setTransferValue] = useState();
  // store target address in local state
  const [targetAddr, setTargetAddress] = useState();

  // request access to the user's MetaMask account
  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  // call the smart contract, read the current greeting value
  async function fetchGreeting() {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        greeterAddress,
        Greeter.abi,
        provider
      );
      try {
        const data = await contract.greet();
        console.log("data: ", data);
      } catch (err) {
        console.log("Error: ", err);
      }
    }
  }

  // call the smart contract, send an update
  async function setGreeting() {
    if (!greeting) return;
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, signer);
      const transaction = await contract.setGreeting(greeting);
      await transaction.wait();
      fetchGreeting();
    }
  }

  // call the token smart contract, send token to an address
  async function transferTokens() {
    if (!targetAddr || !transferValue) return;
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(tokenAddress, Token.abi, signer);
      const transaction = await contract.transfer(targetAddr, transferValue);
      await transaction.wait();
      console.log(`${transferValue} Coins successfully sent to ${targetAddr}`);
    }
  }

  // call the smart contract, read the address balance
  async function getBalance() {
    if (!targetAddr) return;
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(tokenAddress, Token.abi, provider);
      const balance = await contract.balanceOf(targetAddr);
      console.log(`Balance of ${targetAddr} is ${balance.toString()}`);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={fetchGreeting}>Fetch Greeting</button>
        <button onClick={setGreeting}>Set Greeting</button>
        <input
          onChange={(e) => setGreetingValue(e.target.value)}
          placeholder="Set greeting"
        />
        <br />
        <button onClick={getBalance}>Get Balance</button>
        <button onClick={transferTokens}>Transfer Tokens</button>
        <input
          onChange={(e) => setTargetAddress(e.target.value)}
          placeholder="Account ID"
        />
        <input
          onChange={(e) => setTransferValue(e.target.value)}
          placeholder="Amount"
        />
      </header>
    </div>
  );
}

export default App;
