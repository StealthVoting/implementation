/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  BlindVoting,
  BlindVotingInterface,
} from "../../contracts/BlindVoting";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_x",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_r",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_Yx",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_Yy",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_Hx",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_Hy",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "partyCode",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "partyName",
        type: "string",
      },
    ],
    name: "addParty",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "ZdashX",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "ZdashY",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "KX",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "KY",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "MX",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "MY",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "PX",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "PY",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "u1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "partyCode",
        type: "uint256",
      },
    ],
    name: "castVote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getH",
    outputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "partyCode",
        type: "uint256",
      },
    ],
    name: "getVotesForPartyCode",
    outputs: [
      {
        internalType: "uint256",
        name: "votes",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getY",
    outputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "u2",
        type: "uint256",
      },
    ],
    name: "requestBlindSign",
    outputs: [
      {
        internalType: "uint256",
        name: "z",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "signHelper",
    outputs: [
      {
        internalType: "contract BlindSign",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051611bda380380611bda83398101604081905261002f91610198565b610038336100cc565b61004c868661011c60201b61079f1760201c565b85858585858560405161005e9061018b565b958652602086019490945260408501929092526060840152608083015260a082015260c001604051809103906000f08015801561009f573d6000803e3d6000fd5b50600180546001600160a01b0319166001600160a01b0392909216919091179055506101e2945050505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60405160248101839052604481018290526101669060640160408051601f198184030181529190526020810180516001600160e01b0390811662d81ed360e71b1790915261016a16565b5050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b610e2980610db183390190565b60008060008060008060c087890312156101b157600080fd5b865195506020870151945060408701519350606087015192506080870151915060a087015190509295509295509295565b610bc0806101f16000396000f3fe608060405234801561001057600080fd5b50600436106100be5760003560e01c806382529fdb11610076578063c5c2c8521161005b578063c5c2c85214610167578063f2fde38b1461017a578063f5ea01061461018d57600080fd5b806382529fdb1461014e5780638da5cb5b1461015657600080fd5b80632b486c93116100a75780632b486c93146100fa5780634fcd6cf21461011b578063715018a61461014657600080fd5b80630b7f1665146100c357806316a47c6d146100e5575b600080fd5b6100cb6101a0565b604080519283526020830191909152015b60405180910390f35b6100f86100f3366004610972565b610276565b005b61010d6101083660046109da565b610375565b6040519081526020016100dc565b60015461012e906001600160a01b031681565b6040516001600160a01b0390911681526020016100dc565b6100f86103e9565b6100cb61044f565b6000546001600160a01b031661012e565b61010d6101753660046109da565b6104f3565b6100f86101883660046109f3565b610520565b6100f861019b366004610a39565b610602565b6000805481906001600160a01b031633146102025760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b60015460408051630b7f166560e01b815281516001600160a01b0390931692630b7f1665926004808401939192918290030181865afa158015610249573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061026d9190610af4565b90939092509050565b600081815260026020526040902054811461029057600080fd5b60015460405163015c1afd60e11b8152600481018c9052602481018b9052604481018a9052606481018990526084810188905260a4810187905260c4810186905260e4810185905261010481018490526001600160a01b03909116906302b835fa9061012401602060405180830381865afa158015610313573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103379190610b18565b61034057600080fd5b60008181526003602052604090205461035a906001610b3a565b60009182526003602052604090912055505050505050505050565b60015460405163d931a31560e01b8152600481018390526000916001600160a01b03169063d931a31590602401602060405180830381865afa1580156103bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103e39190610b60565b92915050565b6000546001600160a01b031633146104435760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016101f9565b61044d60006107fe565b565b6000805481906001600160a01b031633146104ac5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016101f9565b600154604080516382529fdb60e01b815281516001600160a01b03909316926382529fdb926004808401939192918290030181865afa158015610249573d6000803e3d6000fd5b600081815260026020526040812054821461050d57600080fd5b5060009081526003602052604090205490565b6000546001600160a01b0316331461057a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016101f9565b6001600160a01b0381166105f65760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016101f9565b6105ff816107fe565b50565b6000546001600160a01b0316331461065c5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016101f9565b6000600260008481526020019081526020016000206040518060600160405290816000820154815260200160018201805461069690610b79565b80601f01602080910402602001604051908101604052809291908181526020018280546106c290610b79565b801561070f5780601f106106e45761010080835404028352916020019161070f565b820191906000526020600020905b8154815290600101906020018083116106f257829003601f168201915b505050918352505060029182015460ff16151560209182015285835282810185815260016040808601829052600089815294845290932084518155905180519495508594919361076593908501929101906108d9565b506040918201516002918201805460ff19169115159190911790556000858152602091909152205461079a906103fe14610866565b505050565b60405160248101839052604481018290526107fa9060640160408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1662d81ed360e71b1790526108b8565b5050565b600080546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60405181151560248201526105ff9060440160408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166332458eed60e01b1790525b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b8280546108e590610b79565b90600052602060002090601f016020900481019282610907576000855561094d565b82601f1061092057805160ff191683800117855561094d565b8280016001018555821561094d579182015b8281111561094d578251825591602001919060010190610932565b5061095992915061095d565b5090565b5b80821115610959576000815560010161095e565b6000806000806000806000806000806101408b8d03121561099257600080fd5b505088359a60208a01359a5060408a013599606081013599506080810135985060a0810135975060c0810135965060e081013595506101008101359450610120013592509050565b6000602082840312156109ec57600080fd5b5035919050565b600060208284031215610a0557600080fd5b81356001600160a01b0381168114610a1c57600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b60008060408385031215610a4c57600080fd5b82359150602083013567ffffffffffffffff80821115610a6b57600080fd5b818501915085601f830112610a7f57600080fd5b813581811115610a9157610a91610a23565b604051601f8201601f19908116603f01168101908382118183101715610ab957610ab9610a23565b81604052828152886020848701011115610ad257600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b60008060408385031215610b0757600080fd5b505080516020909101519092909150565b600060208284031215610b2a57600080fd5b81518015158114610a1c57600080fd5b60008219821115610b5b57634e487b7160e01b600052601160045260246000fd5b500190565b600060208284031215610b7257600080fd5b5051919050565b600181811c90821680610b8d57607f821691505b602082108103610bad57634e487b7160e01b600052602260045260246000fd5b5091905056fea164736f6c634300080d000a608060405234801561001057600080fd5b50604051610e29380380610e2983398101604081905261002f9161004f565b600095909555600193909355600291909155600355600455600555610099565b60008060008060008060c0878903121561006857600080fd5b865195506020870151945060408701519350606087015192506080870151915060a087015190509295509295509295565b610d81806100a86000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063817f90821161008c578063c495e5f111610066578063c495e5f1146101d5578063d931a315146101de578063d948fc48146101f1578063eeeac01e146101fa57600080fd5b8063817f9082146101b957806382529fdb146101c2578063997da8d4146101cd57600080fd5b80632e52d606116100c85780632e52d606146101685780635727dc5c146101815780637651e178146101895780637a308a4c1461019257600080fd5b806302b835fa146100ef57806303a507be146101175780630b7f16651461014c575b600080fd5b6101026100fd366004610bd0565b610207565b60405190151581526020015b60405180910390f35b61013e7f79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f8179881565b60405190815260200161010e565b6002546003545b6040805192835260208301919091520161010e565b61013e70014551231950b75fc4402da1732fc9bebe1981565b61013e600781565b61013e60055481565b61013e7f483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b881565b61013e60025481565b600454600554610153565b61013e600081565b61013e60045481565b61013e6101ec366004610c2f565b610348565b61013e60035481565b61013e6401000003d01981565b60008060006102218a8a8a8a60006401000003d01961036b565b909250905060008061023d8e8e8686856401000003d0196103f3565b9092509050600080610258888b8b846401000003d019610427565b80925081935050506102ba6040518060400160405280600681526020017f4c48533a2d20000000000000000000000000000000000000000000000000000081525085604051806040016040528060018152602001600160fd1b81525086610461565b6103146040518060400160405280600681526020017f5248533a2d20000000000000000000000000000000000000000000000000000081525083604051806040016040528060018152602001600160fd1b81525084610461565b818414801561032257508083145b156103305760019650610335565b600096505b5050505050509998505050505050505050565b6000816000546103589190610c5e565b6001546103659190610c7d565b92915050565b6000806000806000888b036103bb57858061038857610388610c95565b888b086000036103a157600080945094505050506103e8565b6103af8b8b60018a8a6104c5565b919450925090506103d4565b6103cc8b8b60018c8c60018c610668565b919450925090505b6103e0838383896109a0565b945094505050505b965096945050505050565b600080600080610404888887610a0f565b915091506104168a8a84848a8a61036b565b935093505050965096945050505050565b600080600080600061043e8a8a8a60018b8b610a34565b925092509250610450838383896109a0565b945094505050509550959350505050565b6104bf8484848460405160240161047b9493929190610cf8565b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1663a0c4b22560e01b179052610ab6565b50505050565b6000806000856000036104df57508691508590508461065d565b600084806104ef576104ef610c95565b898a0990506000858061050457610504610c95565b898a0990506000868061051957610519610c95565b898a0990506000878061052e5761052e610c95565b888061053c5761053c610c95565b848e0960040990506000888061055457610554610c95565b898061056257610562610c95565b8a8061057057610570610c95565b8586098c098a8061058357610583610c95565b87600309089050888061059857610598610c95565b89806105a6576105a6610c95565b8384086105b3908b610d35565b8a806105c1576105c1610c95565b83840908945088806105d5576105d5610c95565b89806105e3576105e3610c95565b8a806105f1576105f1610c95565b868709600809610601908b610d35565b8a8061060f5761060f610c95565b8b8061061d5761061d610c95565b610627898e610d35565b86088409089350888061063c5761063c610c95565b898061064a5761064a610c95565b8c8e096002099497509295509293505050505b955095509592505050565b6000808089158015610678575088155b1561068a575085915084905083610993565b86158015610696575085155b156106a8575088915087905086610993565b6106b0610bb2565b84806106be576106be610c95565b898a09815284806106d1576106d1610c95565b81518a09602082015284806106e8576106e8610c95565b868709604082015284806106fe576106fe610c95565b604082015187096060820152604080516080810190915280868061072457610724610c95565b60408401518e098152602001868061073e5761073e610c95565b60608401518d098152602001868061075857610758610c95565b83518b098152602001868061076f5761076f610c95565b60208401518a0990526040810151815191925014158061079757506060810151602082015114155b6107e85760405162461bcd60e51b815260206004820152601e60248201527f557365206a6163446f75626c652066756e6374696f6e20696e7374656164000060448201526064015b60405180910390fd5b6107f0610bb2565b85806107fe576107fe610c95565b825161080a9088610d35565b6040840151088152858061082057610820610c95565b602083015161082f9088610d35565b6060840151086020820152858061084857610848610c95565b815180096040820152858061085f5761085f610c95565b815160408301510960608201526000868061087c5761087c610c95565b606083015161088b9089610d35565b888061089957610899610c95565b6020850151800908905086806108b1576108b1610c95565b87806108bf576108bf610c95565b88806108cd576108cd610c95565b60408501518651096002096108e29089610d35565b82089050600087806108f6576108f6610c95565b888061090457610904610c95565b61090e848b610d35565b8a8061091c5761091c610c95565b6040870151885109086020850151099050878061093b5761093b610c95565b888061094957610949610c95565b606085015160208701510961095e908a610d35565b820890506000888061097257610972610c95565b898061098057610980610c95565b8b8f098551099297509095509093505050505b9750975097945050505050565b60008060006109af8585610ad7565b9050600084806109c1576109c1610c95565b8283099050600085806109d6576109d6610c95565b828a099050600086806109eb576109eb610c95565b87806109f9576109f9610c95565b8486098a09919a91995090975050505050505050565b6000808483610a1e8682610d35565b610a289190610d4c565b91509150935093915050565b600080600088600003610a4e575086915085905084610aaa565b8860008060015b8315610aa1576001841615610a7b57610a738383838f8f8f8e610668565b919450925090505b610a86600285610d60565b9350610a958c8c8c8c8c6104c5565b919d509b509950610a55565b91955093509150505b96509650969350505050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b60008215801590610ae85750818314155b8015610af357508115155b610b3f5760405162461bcd60e51b815260206004820152600e60248201527f496e76616c6964206e756d62657200000000000000000000000000000000000060448201526064016107df565b6000600183825b8615610ba757610b568783610d60565b9050828680610b6757610b67610c95565b8780610b7557610b75610c95565b858409610b829089610d35565b8608909450925086610b948183610c5e565b610b9e9084610d35565b97509150610b46565b509195945050505050565b60405180608001604052806004906020820280368337509192915050565b60008060008060008060008060006101208a8c031215610bef57600080fd5b505087359960208901359950604089013598606081013598506080810135975060a0810135965060c0810135955060e08101359450610100013592509050565b600060208284031215610c4157600080fd5b5035919050565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615610c7857610c78610c48565b500290565b60008219821115610c9057610c90610c48565b500190565b634e487b7160e01b600052601260045260246000fd5b6000815180845260005b81811015610cd157602081850181015186830182015201610cb5565b81811115610ce3576000602083870101525b50601f01601f19169290920160200192915050565b608081526000610d0b6080830187610cab565b8560208401528281036040840152610d238186610cab565b91505082606083015295945050505050565b600082821015610d4757610d47610c48565b500390565b600082610d5b57610d5b610c95565b500690565b600082610d6f57610d6f610c95565b50049056fea164736f6c634300080d000a";

type BlindVotingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BlindVotingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BlindVoting__factory extends ContractFactory {
  constructor(...args: BlindVotingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _x: BigNumberish,
    _r: BigNumberish,
    _Yx: BigNumberish,
    _Yy: BigNumberish,
    _Hx: BigNumberish,
    _Hy: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BlindVoting> {
    return super.deploy(
      _x,
      _r,
      _Yx,
      _Yy,
      _Hx,
      _Hy,
      overrides || {}
    ) as Promise<BlindVoting>;
  }
  override getDeployTransaction(
    _x: BigNumberish,
    _r: BigNumberish,
    _Yx: BigNumberish,
    _Yy: BigNumberish,
    _Hx: BigNumberish,
    _Hy: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _x,
      _r,
      _Yx,
      _Yy,
      _Hx,
      _Hy,
      overrides || {}
    );
  }
  override attach(address: string): BlindVoting {
    return super.attach(address) as BlindVoting;
  }
  override connect(signer: Signer): BlindVoting__factory {
    return super.connect(signer) as BlindVoting__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BlindVotingInterface {
    return new utils.Interface(_abi) as BlindVotingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BlindVoting {
    return new Contract(address, _abi, signerOrProvider) as BlindVoting;
  }
}
