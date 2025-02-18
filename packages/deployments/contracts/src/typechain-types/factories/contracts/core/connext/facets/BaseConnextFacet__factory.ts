/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  BaseConnextFacet,
  BaseConnextFacetInterface,
} from "../../../../../contracts/core/connext/facets/BaseConnextFacet";

const _abi = [
  {
    inputs: [],
    name: "BaseConnextFacet__getAdoptedAsset_assetNotFound",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__getApprovedCanonicalId_notAllowlisted",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__nonReentrant_reentrantCall",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__nonXCallReentrant_reentrantCall",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyOwnerOrAdmin_notOwnerOrAdmin",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyOwnerOrRouter_notOwnerOrRouter",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyOwnerOrWatcher_notOwnerOrWatcher",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyOwner_notOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyProposed_notProposedOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__whenNotPaused_paused",
    type: "error",
  },
] as const;

const _bytecode =
  "0x00000001012001900000000b0000613d0000008001000039000000400010043f0000000001000416000000000110004c0000000b0000c13d0000002001000039000001000010044300000120000004430010000c0000040f0010000e0000040f0000000501000041000000110001042e000000000100001900000012000104300000001000000432000000110001042e0000001200010430000000000000000000000002000000000000000000000000000000400000010000000000000000000000000000000000000000000000000000000000000000000000000000000000";

type BaseConnextFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BaseConnextFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BaseConnextFacet__factory extends ContractFactory {
  constructor(...args: BaseConnextFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BaseConnextFacet> {
    return super.deploy(overrides || {}) as Promise<BaseConnextFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BaseConnextFacet {
    return super.attach(address) as BaseConnextFacet;
  }
  override connect(signer: Signer): BaseConnextFacet__factory {
    return super.connect(signer) as BaseConnextFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BaseConnextFacetInterface {
    return new utils.Interface(_abi) as BaseConnextFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BaseConnextFacet {
    return new Contract(address, _abi, signerOrProvider) as BaseConnextFacet;
  }
}
