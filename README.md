
<a name="readmemd"></a>

# metamask-ts
Library to make it easy to work with metamask in typescript

<a name="_librarymd"></a>

metamask-ts - v1.0.0

# metamask-ts - v1.0.0

## Table of contents

### Interfaces

- [AddEthereumChainParameter](#interfacesaddethereumchainparametermd)
- [RequestedPermissions](#interfacesrequestedpermissionsmd)
- [SwitchEthereumChainParameter](#interfacesswitchethereumchainparametermd)
- [WatchAssetParams](#interfaceswatchassetparamsmd)
- [Web3WalletPermission](#interfacesweb3walletpermissionmd)

### Type aliases

- [MetamaskEvents](#metamaskevents)

### Functions

- [eth_decrypt](#eth_decrypt)
- [eth_getEncryptionPublicKey](#eth_getencryptionpublickey)
- [eth_requestAccounts](#eth_requestaccounts)
- [listen](#listen)
- [onAccountsChanged](#onaccountschanged)
- [wallet_addEthereumChain](#wallet_addethereumchain)
- [wallet_getPermissions](#wallet_getpermissions)
- [wallet_registerOnboardingCompleted](#wallet_registeronboardingcompleted)
- [wallet_requestPermissions](#wallet_requestpermissions)
- [wallet_scanQRCode](#wallet_scanqrcode)
- [wallet_switchEthereumChain](#wallet_switchethereumchain)
- [wallet_watchAsset](#wallet_watchasset)

## Type aliases

### MetamaskEvents

Ƭ **MetamaskEvents**: ``"accountsChanged"`` \| ``"chainChanged"`` \| ``"connect"`` \| ``"disconnect"`` \| ``"message"``

#### Defined in

[index.ts:113](https://github.com/rhdeck/metamask-ts/blob/f4c1701/src/index.ts#L113)

## Functions

### eth\_decrypt

▸ `Const` **eth_decrypt**(`message`, `accountId?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `accountId?` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[index.ts:28](https://github.com/rhdeck/metamask-ts/blob/f4c1701/src/index.ts#L28)

___

### eth\_getEncryptionPublicKey

▸ `Const` **eth_getEncryptionPublicKey**(`accountId`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountId` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[index.ts:39](https://github.com/rhdeck/metamask-ts/blob/f4c1701/src/index.ts#L39)

___

### eth\_requestAccounts

▸ `Const` **eth_requestAccounts**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[index.ts:34](https://github.com/rhdeck/metamask-ts/blob/f4c1701/src/index.ts#L34)

___

### listen

▸ `Const` **listen**<`T`\>(`event`, `handler`): () => `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`MetamaskEvents`](#metamaskevents) |
| `handler` | (`args`: `T`) => `void` |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[index.ts:119](https://github.com/rhdeck/metamask-ts/blob/f4c1701/src/index.ts#L119)

___

### onAccountsChanged

▸ `Const` **onAccountsChanged**(`handler`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | (`args`: `string`[]) => `void` |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[index.ts:128](https://github.com/rhdeck/metamask-ts/blob/f4c1701/src/index.ts#L128)

___

### wallet\_addEthereumChain

▸ `Const` **wallet_addEthereumChain**(`chainParameter`): `Promise`<``null``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainParameter` | [`AddEthereumChainParameter`](#interfacesaddethereumchainparametermd) |

#### Returns

`Promise`<``null``\>

#### Defined in

[index.ts:70](https://github.com/rhdeck/metamask-ts/blob/f4c1701/src/index.ts#L70)

___

### wallet\_getPermissions

▸ `Const` **wallet_getPermissions**(): `Promise`<[`Web3WalletPermission`](#interfacesweb3walletpermissionmd)[]\>

#### Returns

`Promise`<[`Web3WalletPermission`](#interfacesweb3walletpermissionmd)[]\>

#### Defined in

[index.ts:45](https://github.com/rhdeck/metamask-ts/blob/f4c1701/src/index.ts#L45)

___

### wallet\_registerOnboardingCompleted

▸ `Const` **wallet_registerOnboardingCompleted**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

[index.ts:87](https://github.com/rhdeck/metamask-ts/blob/f4c1701/src/index.ts#L87)

___

### wallet\_requestPermissions

▸ `Const` **wallet_requestPermissions**(`permissions`): `Promise`<[`Web3WalletPermission`](#interfacesweb3walletpermissionmd)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `permissions` | [`RequestedPermissions`](#interfacesrequestedpermissionsmd) |

#### Returns

`Promise`<[`Web3WalletPermission`](#interfacesweb3walletpermissionmd)[]\>

#### Defined in

[index.ts:50](https://github.com/rhdeck/metamask-ts/blob/f4c1701/src/index.ts#L50)

___

### wallet\_scanQRCode

▸ `Const` **wallet_scanQRCode**(`regex?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `regex?` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[index.ts:107](https://github.com/rhdeck/metamask-ts/blob/f4c1701/src/index.ts#L107)

___

### wallet\_switchEthereumChain

▸ `Const` **wallet_switchEthereumChain**(`chainId`): `Promise`<``null``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId` | `string` |

#### Returns

`Promise`<``null``\>

#### Defined in

[index.ts:81](https://github.com/rhdeck/metamask-ts/blob/f4c1701/src/index.ts#L81)

___

### wallet\_watchAsset

▸ `Const` **wallet_watchAsset**(`params`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`WatchAssetParams`](#interfaceswatchassetparamsmd) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[index.ts:101](https://github.com/rhdeck/metamask-ts/blob/f4c1701/src/index.ts#L101)


<a name="interfacesaddethereumchainparametermd"></a>

[metamask-ts - v1.0.0](#readmemd) / AddEthereumChainParameter

# Interface: AddEthereumChainParameter

## Table of contents

### Properties

- [blockExplorerUrls](#blockexplorerurls)
- [chainId](#chainid)
- [chainName](#chainname)
- [iconUrls](#iconurls)
- [nativeCurrency](#nativecurrency)
- [rpcUrls](#rpcurls)

## Properties

### blockExplorerUrls

• `Optional` **blockExplorerUrls**: `string`[]

#### Defined in

[index.ts:67](https://github.com/rhdeck/metamask-ts/blob/f4c1701/src/index.ts#L67)

___

### chainId

• **chainId**: `string`

#### Defined in

[index.ts:59](https://github.com/rhdeck/metamask-ts/blob/f4c1701/src/index.ts#L59)

___

### chainName

• **chainName**: `string`

#### Defined in

[index.ts:60](https://github.com/rhdeck/metamask-ts/blob/f4c1701/src/index.ts#L60)

___

### iconUrls

• `Optional` **iconUrls**: `string`[]

#### Defined in

[index.ts:68](https://github.com/rhdeck/metamask-ts/blob/f4c1701/src/index.ts#L68)

___

### nativeCurrency

• **nativeCurrency**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `decimals` | ``18`` |
| `name` | `string` |
| `symbol` | `string` |

#### Defined in

[index.ts:61](https://github.com/rhdeck/metamask-ts/blob/f4c1701/src/index.ts#L61)

___

### rpcUrls

• **rpcUrls**: `string`[]

#### Defined in

[index.ts:66](https://github.com/rhdeck/metamask-ts/blob/f4c1701/src/index.ts#L66)


<a name="interfacesrequestedpermissionsmd"></a>

[metamask-ts - v1.0.0](#readmemd) / RequestedPermissions

# Interface: RequestedPermissions

## Indexable

▪ [methodName: `string`]: {}


<a name="interfacesswitchethereumchainparametermd"></a>

[metamask-ts - v1.0.0](#readmemd) / SwitchEthereumChainParameter

# Interface: SwitchEthereumChainParameter

## Table of contents

### Properties

- [chainId](#chainid)

## Properties

### chainId

• **chainId**: `string`

#### Defined in

[index.ts:79](https://github.com/rhdeck/metamask-ts/blob/f4c1701/src/index.ts#L79)


<a name="interfaceswatchassetparamsmd"></a>

[metamask-ts - v1.0.0](#readmemd) / WatchAssetParams

# Interface: WatchAssetParams

## Table of contents

### Properties

- [options](#options)
- [type](#type)

## Properties

### options

• **options**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `decimals` | `number` |
| `image` | `string` |
| `symbol` | `string` |

#### Defined in

[index.ts:94](https://github.com/rhdeck/metamask-ts/blob/f4c1701/src/index.ts#L94)

___

### type

• **type**: ``"ERC20"``

#### Defined in

[index.ts:93](https://github.com/rhdeck/metamask-ts/blob/f4c1701/src/index.ts#L93)


<a name="interfacesweb3walletpermissionmd"></a>

[metamask-ts - v1.0.0](#readmemd) / Web3WalletPermission

# Interface: Web3WalletPermission

## Table of contents

### Properties

- [date](#date)
- [parentCapability](#parentcapability)

## Properties

### date

• `Optional` **date**: `number`

#### Defined in

[index.ts:21](https://github.com/rhdeck/metamask-ts/blob/f4c1701/src/index.ts#L21)

___

### parentCapability

• **parentCapability**: `string`

#### Defined in

[index.ts:18](https://github.com/rhdeck/metamask-ts/blob/f4c1701/src/index.ts#L18)
