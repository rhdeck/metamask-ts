import EventEmitter from "events";

const { ethereum } = window as unknown as {
  ethereum: {
    isMetaMask: boolean;
    isConnected: () => boolean;
    request: <T>(arg: {
      method: string;
      params?: any[] | Record<string, any>;
    }) => Promise<T>;
    _metamask: {
      isUnlocked: () => Promise<boolean>;
    };
  } & EventEmitter;
};
export interface Web3WalletPermission {
  // The name of the method corresponding to the permission
  parentCapability: string;

  // The date the permission was granted, in UNIX epoch time
  date?: number;
}

export interface RequestedPermissions {
  [methodName: string]: {}; // an empty object, for future extensibility
}

export const eth_decrypt = async (message: string, accountId?: string) => {
  return ethereum.request<string>({
    method: "eth_decrypt",
    params: [message, accountId],
  });
};
export const eth_requestAccounts = async () => {
  return ethereum.request<string[]>({
    method: "eth_requestAccounts",
  });
};
export const eth_getEncryptionPublicKey = async (accountId: string) => {
  return ethereum.request<string>({
    method: "eth_getEncryptionPublicKey",
    params: [accountId],
  });
};
export const wallet_getPermissions = async () => {
  return ethereum.request<Web3WalletPermission[]>({
    method: "wallet_getPermissions",
  });
};
export const wallet_requestPermissions = async (
  permissions: RequestedPermissions
) => {
  return ethereum.request<Web3WalletPermission[]>({
    method: "wallet_requestPermissions",
    params: [permissions],
  });
};
export interface AddEthereumChainParameter {
  chainId: string; // A 0x-prefixed hexadecimal string
  chainName: string;
  nativeCurrency: {
    name: string;
    symbol: string; // 2-6 characters long
    decimals: 18;
  };
  rpcUrls: string[];
  blockExplorerUrls?: string[];
  iconUrls?: string[]; // Currently ignored.
}
export const wallet_addEthereumChain = async (
  chainParameter: AddEthereumChainParameter
) => {
  return ethereum.request<null>({
    method: "wallet_addEthereumChain",
    params: [chainParameter],
  });
};
export interface SwitchEthereumChainParameter {
  chainId: string; // A 0x-prefixed hexadecimal string
}
export const wallet_switchEthereumChain = async (chainId: string) => {
  return ethereum.request<null>({
    method: "wallet_switchEthereumChain",
    params: [{ chainId } as SwitchEthereumChainParameter],
  });
};
export const wallet_registerOnboardingCompleted = async () => {
  return ethereum.request<boolean>({
    method: "wallet_registerOnboardingCompleted",
  });
};
export interface WatchAssetParams {
  type: "ERC20"; // In the future, other standards will be supported
  options: {
    address: string; // The address of the token contract
    symbol: string; // A ticker symbol or shorthand, up to 5 characters
    decimals: number; // The number of token decimals
    image: string; // A string url of the token logo
  };
}
export const wallet_watchAsset = async (params: WatchAssetParams) => {
  return ethereum.request<boolean>({
    method: "wallet_watchAsset",
    params,
  });
};
export const wallet_scanQRCode = async (regex?: string) => {
  return ethereum.request<string>({
    method: "wallet_scanQRCode",
    params: [regex],
  });
};
export type MetamaskEvents =
  | "accountsChanged"
  | "chainChanged"
  | "connect"
  | "disconnect"
  | "message";
export const listen = <T>(
  event: MetamaskEvents,
  handler: (args: T) => void
) => {
  ethereum.on(event, handler);
  return () => {
    ethereum.removeListener(event, handler);
  };
};
export const onAccountsChanged = (handler: (accounts: string[]) => void) => {
  return listen<string[]>("accountsChanged", handler);
};
export const onChainChanged = (handler: (chain: string) => void) => {
  return listen<string>("chainChanged", handler);
};
export interface ConnectInfo {
  chainId: string;
}
export const onConnect = (handler: (connectInfo: ConnectInfo) => void) => {
  return listen<ConnectInfo>("connect", handler);
};
export const onDisconnect = (handler: (error: ProviderRpcError) => void) => {
  return listen<ProviderRpcError>("disconnect", handler);
};
interface ProviderMessage {
  type: string;
  data: unknown;
}
export const onMessage = (handler: (message: ProviderMessage) => void) => {
  return listen<ProviderMessage>("message", handler);
};
export interface ProviderRpcError extends Error {
  message: string;
  code: number;
  data?: unknown;
}
