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
        name: "_ecPrivKey",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_k1Dash",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_k2Dash",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_Qx",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_Qy",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_l1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_l2",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_xr1Dash",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_yr1Dash",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_xr2Dash",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_yr2Dash",
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
        name: "s",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "Rx",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "Ry",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "r",
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
        name: "m1Dash",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "m2Dash",
        type: "uint256",
      },
    ],
    name: "requestBlindSign",
    outputs: [
      {
        internalType: "uint256",
        name: "s1Dash",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "s2Dash",
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
  "0x608060405234801561001057600080fd5b5060405161188c38038061188c83398101604081905261002f91610145565b610038336100e8565b8a8a8a8a8a8a8a8a8a8a8a60405161004f90610138565b9a8b5260208b019990995260408a01979097526060890195909552608088019390935260a087019190915260c086015260e085015261010084015261012083015261014082015261016001604051809103906000f0801580156100b6573d6000803e3d6000fd5b50600180546001600160a01b0319166001600160a01b0392909216919091179055506101c49950505050505050505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b610e7c80610a1083390190565b60008060008060008060008060008060006101608c8e03121561016757600080fd5b8b519a5060208c0151995060408c0151985060608c0151975060808c0151965060a08c0151955060c08c0151945060e08c015193506101008c015192506101208c015191506101408c015190509295989b509295989b9093969950565b61083d806101d36000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80639bdac77e1161005b5780639bdac77e146100eb578063c5c2c85214610113578063f2fde38b14610134578063f5ea01061461014757600080fd5b80634fcd6cf21461008d57806363604d38146100bd578063715018a6146100d25780638da5cb5b146100da575b600080fd5b6001546100a0906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6100d06100cb366004610613565b61015a565b005b6100d0610237565b6000546001600160a01b03166100a0565b6100fe6100f936600461064e565b6102a2565b604080519283526020830191909152016100b4565b610126610121366004610670565b610325565b6040519081526020016100b4565b6100d0610142366004610689565b610393565b6100d06101553660046106cf565b610475565b60008181526002602052604090205481900361017557600080fd5b60015460405163f9f0fb6b60e01b815260048101879052602481018690526044810185905260648101849052608481018390526001600160a01b039091169063f9f0fb6b9060a401602060405180830381865afa1580156101da573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101fe919061078a565b61020757600080fd5b6000818152600360205260409020546102219060016107ac565b6000918252600360205260409091205550505050565b6000546001600160a01b031633146102965760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6102a06000610512565b565b60015460405163cef9c65760e01b8152600481018490526024810183905260009182916001600160a01b039091169063cef9c657906044016040805180830381865afa1580156102f6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061031a91906107d2565b909590945092505050565b600080546001600160a01b031633146103805760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161028d565b5060009081526003602052604090205490565b6000546001600160a01b031633146103ed5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161028d565b6001600160a01b0381166104695760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161028d565b61047281610512565b50565b6000546001600160a01b031633146104cf5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161028d565b604080518082018252838152602080820184815260008681526002835293909320825181559251805192939261050b926001850192019061057a565b5050505050565b600080546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b828054610586906107f6565b90600052602060002090601f0160209004810192826105a857600085556105ee565b82601f106105c157805160ff19168380011785556105ee565b828001600101855582156105ee579182015b828111156105ee5782518255916020019190600101906105d3565b506105fa9291506105fe565b5090565b5b808211156105fa57600081556001016105ff565b600080600080600060a0868803121561062b57600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b6000806040838503121561066157600080fd5b50508035926020909101359150565b60006020828403121561068257600080fd5b5035919050565b60006020828403121561069b57600080fd5b81356001600160a01b03811681146106b257600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b600080604083850312156106e257600080fd5b82359150602083013567ffffffffffffffff8082111561070157600080fd5b818501915085601f83011261071557600080fd5b813581811115610727576107276106b9565b604051601f8201601f19908116603f0116810190838211818310171561074f5761074f6106b9565b8160405282815288602084870101111561076857600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b60006020828403121561079c57600080fd5b815180151581146106b257600080fd5b600082198211156107cd57634e487b7160e01b600052601160045260246000fd5b500190565b600080604083850312156107e557600080fd5b505080516020909101519092909150565b600181811c9082168061080a57607f821691505b60208210810361082a57634e487b7160e01b600052602260045260246000fd5b5091905056fea164736f6c634300080d000a608060405234801561001057600080fd5b50604051610e7c380380610e7c83398101604081905261002f916100b9565b60008b905560018a905560028990556005889055600687905560038690556004859055600784905560088390556009829055600a81905561008270014551231950b75fc4402da1732fc9bebe1985610138565b600b556009546100a59070014551231950b75fc4402da1732fc9bebe1990610138565b600c555061015a9950505050505050505050565b60008060008060008060008060008060006101608c8e0312156100db57600080fd5b8b519a5060208c0151995060408c0151985060608c0151975060808c0151965060a08c0151955060c08c0151945060e08c015193506101008c015192506101208c015191506101408c015190509295989b509295989b9093969950565b60008261015557634e487b7160e01b600052601260045260246000fd5b500690565b610d13806101696000396000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c80639b2e93d8116100b2578063cef9c65711610081578063eeeac01e11610066578063eeeac01e1461023e578063f2ca86af1461024b578063f9f0fb6b1461025457600080fd5b8063cef9c6571461020d578063e6cbd74d1461023557600080fd5b80639b2e93d8146101ea5780639f9fafb8146101f3578063a88aed62146101fc578063b5586c941461020557600080fd5b806336b3d734116101095780634ca646f8116100ee5780634ca646f8146101b25780637a308a4c146101bb578063997da8d4146101e257600080fd5b806336b3d734146101a05780633e70286d146101a957600080fd5b806303a507be1461013b578063202017a0146101755780632b81d6e01461017e5780632e52d60614610187575b600080fd5b6101627f79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f8179881565b6040519081526020015b60405180910390f35b61016260085481565b61016260045481565b61016270014551231950b75fc4402da1732fc9bebe1981565b61016260075481565b61016260065481565b61016260055481565b6101627f483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b881565b610162600081565b61016260035481565b610162600a5481565b61016260095481565b610162600781565b61022061021b366004610c1f565b610277565b6040805192835260208301919091520161016c565b610162600c5481565b6101626401000003d01981565b610162600b5481565b610267610262366004610c41565b610363565b604051901515815260200161016c565b60008070014551231950b75fc4402da1732fc9bebe19600354600154600b546102a09190610c92565b6102aa9190610c92565b6102b49190610cc7565b70014551231950b75fc4402da1732fc9bebe19856000546102d59190610c92565b6102df9190610cc7565b6102e99190610cdb565b915070014551231950b75fc4402da1732fc9bebe19600454600254600c546103119190610c92565b61031b9190610c92565b6103259190610cc7565b70014551231950b75fc4402da1732fc9bebe19846000546103469190610c92565b6103509190610cc7565b61035a9190610cdb565b90509250929050565b600061036d610be3565b6103858360055460065460006401000003d01961047a565b60208301528152610394610be3565b6103e8887f79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f817987f483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b860006401000003d01961047a565b602083015281526103f7610be3565b61040b86898960006401000003d01961047a565b6020830152815261041a610be3565b825160208085015184519185015161043c93929060006401000003d0196104b4565b6020830152808252845114801561045a575060208082015190850151145b15610468576001945061046d565b600094505b5050505095945050505050565b60008060008060006104918a8a8a60018b8b61053c565b9250925092506104a3838383896105be565b945094505050509550959350505050565b6000806000806000888b036105045785806104d1576104d1610cb1565b888b086000036104ea5760008094509450505050610531565b6104f88b8b60018a8a61062d565b9194509250905061051d565b6105158b8b60018c8c60018c6107d0565b919450925090505b610529838383896105be565b945094505050505b965096945050505050565b6000806000886000036105565750869150859050846105b2565b8860008060015b83156105a95760018416156105835761057b8383838f8f8f8e6107d0565b919450925090505b61058e600285610cf2565b935061059d8c8c8c8c8c61062d565b919d509b50995061055d565b91955093509150505b96509650969350505050565b60008060006105cd8585610b08565b9050600084806105df576105df610cb1565b8283099050600085806105f4576105f4610cb1565b828a0990506000868061060957610609610cb1565b878061061757610617610cb1565b8486098a09919a91995090975050505050505050565b6000806000856000036106475750869150859050846107c5565b6000848061065757610657610cb1565b898a0990506000858061066c5761066c610cb1565b898a0990506000868061068157610681610cb1565b898a0990506000878061069657610696610cb1565b88806106a4576106a4610cb1565b848e096004099050600088806106bc576106bc610cb1565b89806106ca576106ca610cb1565b8a806106d8576106d8610cb1565b8586098c098a806106eb576106eb610cb1565b87600309089050888061070057610700610cb1565b898061070e5761070e610cb1565b83840861071b908b610cdb565b8a8061072957610729610cb1565b838409089450888061073d5761073d610cb1565b898061074b5761074b610cb1565b8a8061075957610759610cb1565b868709600809610769908b610cdb565b8a8061077757610777610cb1565b8b8061078557610785610cb1565b61078f898e610cdb565b8608840908935088806107a4576107a4610cb1565b89806107b2576107b2610cb1565b8c8e096002099497509295509293505050505b955095509592505050565b60008080891580156107e0575088155b156107f2575085915084905083610afb565b861580156107fe575085155b15610810575088915087905086610afb565b610818610c01565b848061082657610826610cb1565b898a098152848061083957610839610cb1565b81518a096020820152848061085057610850610cb1565b8687096040820152848061086657610866610cb1565b604082015187096060820152604080516080810190915280868061088c5761088c610cb1565b60408401518e09815260200186806108a6576108a6610cb1565b60608401518d09815260200186806108c0576108c0610cb1565b83518b09815260200186806108d7576108d7610cb1565b60208401518a099052604081015181519192501415806108ff57506060810151602082015114155b6109505760405162461bcd60e51b815260206004820152601e60248201527f557365206a6163446f75626c652066756e6374696f6e20696e7374656164000060448201526064015b60405180910390fd5b610958610c01565b858061096657610966610cb1565b82516109729088610cdb565b6040840151088152858061098857610988610cb1565b60208301516109979088610cdb565b606084015108602082015285806109b0576109b0610cb1565b81518009604082015285806109c7576109c7610cb1565b81516040830151096060820152600086806109e4576109e4610cb1565b60608301516109f39089610cdb565b8880610a0157610a01610cb1565b602085015180090890508680610a1957610a19610cb1565b8780610a2757610a27610cb1565b8880610a3557610a35610cb1565b6040850151865109600209610a4a9089610cdb565b8208905060008780610a5e57610a5e610cb1565b8880610a6c57610a6c610cb1565b610a76848b610cdb565b8a80610a8457610a84610cb1565b60408701518851090860208501510990508780610aa357610aa3610cb1565b8880610ab157610ab1610cb1565b6060850151602087015109610ac6908a610cdb565b8208905060008880610ada57610ada610cb1565b8980610ae857610ae8610cb1565b8b8f098551099297509095509093505050505b9750975097945050505050565b60008215801590610b195750818314155b8015610b2457508115155b610b705760405162461bcd60e51b815260206004820152600e60248201527f496e76616c6964206e756d6265720000000000000000000000000000000000006044820152606401610947565b6000600183825b8615610bd857610b878783610cf2565b9050828680610b9857610b98610cb1565b8780610ba657610ba6610cb1565b858409610bb39089610cdb565b8608909450925086610bc58183610c92565b610bcf9084610cdb565b97509150610b77565b509195945050505050565b60405180604001604052806002906020820280368337509192915050565b60405180608001604052806004906020820280368337509192915050565b60008060408385031215610c3257600080fd5b50508035926020909101359150565b600080600080600060a08688031215610c5957600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615610cac57610cac610c7c565b500290565b634e487b7160e01b600052601260045260246000fd5b600082610cd657610cd6610cb1565b500690565b600082821015610ced57610ced610c7c565b500390565b600082610d0157610d01610cb1565b50049056fea164736f6c634300080d000a";

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
    _ecPrivKey: BigNumberish,
    _k1Dash: BigNumberish,
    _k2Dash: BigNumberish,
    _Qx: BigNumberish,
    _Qy: BigNumberish,
    _l1: BigNumberish,
    _l2: BigNumberish,
    _xr1Dash: BigNumberish,
    _yr1Dash: BigNumberish,
    _xr2Dash: BigNumberish,
    _yr2Dash: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BlindVoting> {
    return super.deploy(
      _ecPrivKey,
      _k1Dash,
      _k2Dash,
      _Qx,
      _Qy,
      _l1,
      _l2,
      _xr1Dash,
      _yr1Dash,
      _xr2Dash,
      _yr2Dash,
      overrides || {}
    ) as Promise<BlindVoting>;
  }
  override getDeployTransaction(
    _ecPrivKey: BigNumberish,
    _k1Dash: BigNumberish,
    _k2Dash: BigNumberish,
    _Qx: BigNumberish,
    _Qy: BigNumberish,
    _l1: BigNumberish,
    _l2: BigNumberish,
    _xr1Dash: BigNumberish,
    _yr1Dash: BigNumberish,
    _xr2Dash: BigNumberish,
    _yr2Dash: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _ecPrivKey,
      _k1Dash,
      _k2Dash,
      _Qx,
      _Qy,
      _l1,
      _l2,
      _xr1Dash,
      _yr1Dash,
      _xr2Dash,
      _yr2Dash,
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
