/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Token, TokenInterface } from "../../PreworkToken.sol/Token";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balances",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526040518060400160405280600d81526020017f507265776f726b20546f6b656e000000000000000000000000000000000000008152506000908051906020019061004f9291906100fb565b506040518060400160405280600381526020017f50575400000000000000000000000000000000000000000000000000000000008152506001908051906020019061009b9291906100fb565b50620f42406002553480156100af57600080fd5b50600254600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506101ff565b8280546101079061019e565b90600052602060002090601f0160209004810192826101295760008555610170565b82601f1061014257805160ff1916838001178555610170565b82800160010185558215610170579182015b8281111561016f578251825591602001919060010190610154565b5b50905061017d9190610181565b5090565b5b8082111561019a576000816000905550600101610182565b5090565b600060028204905060018216806101b657607f821691505b602082108114156101ca576101c96101d0565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6107808061020e6000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806306fdde031461006757806318160ddd1461008557806327e235e3146100a357806370a08231146100d357806395d89b4114610103578063a9059cbb14610121575b600080fd5b61006f61013d565b60405161007c9190610509565b60405180910390f35b61008d6101cb565b60405161009a919061054b565b60405180910390f35b6100bd60048036038101906100b8919061041c565b6101d1565b6040516100ca919061054b565b60405180910390f35b6100ed60048036038101906100e8919061041c565b6101e9565b6040516100fa919061054b565b60405180910390f35b61010b610232565b6040516101189190610509565b60405180910390f35b61013b60048036038101906101369190610445565b6102c0565b005b6000805461014a9061067b565b80601f01602080910402602001604051908101604052809291908181526020018280546101769061067b565b80156101c35780601f10610198576101008083540402835291602001916101c3565b820191906000526020600020905b8154815290600101906020018083116101a657829003601f168201915b505050505081565b60025481565b60036020528060005260406000206000915090505481565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6001805461023f9061067b565b80601f016020809104026020016040519081016040528092919081815260200182805461026b9061067b565b80156102b85780601f1061028d576101008083540402835291602001916102b8565b820191906000526020600020905b81548152906001019060200180831161029b57829003601f168201915b505050505081565b80600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610342576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103399061052b565b60405180910390fd5b80600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461039191906105d8565b9250508190555080600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546103e79190610582565b925050819055505050565b6000813590506104018161071c565b92915050565b60008135905061041681610733565b92915050565b60006020828403121561042e57600080fd5b600061043c848285016103f2565b91505092915050565b6000806040838503121561045857600080fd5b6000610466858286016103f2565b925050602061047785828601610407565b9150509250929050565b600061048c82610566565b6104968185610571565b93506104a6818560208601610648565b6104af8161070b565b840191505092915050565b60006104c7601183610571565b91507f4e6f7420656e6f75676820746f6b656e730000000000000000000000000000006000830152602082019050919050565b6105038161063e565b82525050565b600060208201905081810360008301526105238184610481565b905092915050565b60006020820190508181036000830152610544816104ba565b9050919050565b600060208201905061056060008301846104fa565b92915050565b600081519050919050565b600082825260208201905092915050565b600061058d8261063e565b91506105988361063e565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156105cd576105cc6106ad565b5b828201905092915050565b60006105e38261063e565b91506105ee8361063e565b925082821015610601576106006106ad565b5b828203905092915050565b60006106178261061e565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b8381101561066657808201518184015260208101905061064b565b83811115610675576000848401525b50505050565b6000600282049050600182168061069357607f821691505b602082108114156106a7576106a66106dc565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b6107258161060c565b811461073057600080fd5b50565b61073c8161063e565b811461074757600080fd5b5056fea264697066735822122051e5f6e6ae4696d0c578cc618c60c24a902bc212e558abc3731b4c8c0fb7c25064736f6c63430008000033";

type TokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Token__factory extends ContractFactory {
  constructor(...args: TokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Token> {
    return super.deploy(overrides || {}) as Promise<Token>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Token {
    return super.attach(address) as Token;
  }
  override connect(signer: Signer): Token__factory {
    return super.connect(signer) as Token__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenInterface {
    return new utils.Interface(_abi) as TokenInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Token {
    return new Contract(address, _abi, signerOrProvider) as Token;
  }
}