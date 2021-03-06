
<a name="readmemd"></a>

# metamask-ts
Library to make it easy to work with metamask in typescript

<a name="_librarymd"></a>

@raydeck/metamask-ts - v1.0.2

# @raydeck/metamask-ts - v1.0.2

## Table of contents

### Interfaces

- [AddEthereumChainParameter](#interfacesaddethereumchainparametermd)
- [ConnectInfo](#interfacesconnectinfomd)
- [ProviderMessage](#interfacesprovidermessagemd)
- [ProviderRpcError](#interfacesproviderrpcerrormd)
- [RequestedPermissions](#interfacesrequestedpermissionsmd)
- [SwitchEthereumChainParameter](#interfacesswitchethereumchainparametermd)
- [WatchAssetParams](#interfaceswatchassetparamsmd)
- [Web3WalletPermission](#interfacesweb3walletpermissionmd)

### Type aliases

- [MetamaskEvents](#metamaskevents)

### Variables

- [isEthereum](#isethereum)

### Functions

- [eth_accounts](#eth_accounts)
- [eth_chainId](#eth_chainid)
- [eth_decrypt](#eth_decrypt)
- [eth_getEncryptionPublicKey](#eth_getencryptionpublickey)
- [eth_requestAccounts](#eth_requestaccounts)
- [isConnected](#isconnected)
- [listen](#listen)
- [onAccountsChanged](#onaccountschanged)
- [onChainChanged](#onchainchanged)
- [onConnect](#onconnect)
- [onDisconnect](#ondisconnect)
- [onMessage](#onmessage)
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

[src/index.ts:117](https://github.com/rhdeck/metamask-ts/blob/71eaf97/src/index.ts#L117)

## Variables

### isEthereum

• **isEthereum**: ``true``

#### Defined in

[src/index.ts:163](https://github.com/rhdeck/metamask-ts/blob/71eaf97/src/index.ts#L163)

## Functions

### eth\_accounts

▸ `Const` **eth_accounts**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/index.ts:168](https://github.com/rhdeck/metamask-ts/blob/71eaf97/src/index.ts#L168)

___

### eth\_chainId

▸ `Const` **eth_chainId**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[src/index.ts:93](https://github.com/rhdeck/metamask-ts/blob/71eaf97/src/index.ts#L93)

___

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

[src/index.ts:28](https://github.com/rhdeck/metamask-ts/blob/71eaf97/src/index.ts#L28)

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

[src/index.ts:39](https://github.com/rhdeck/metamask-ts/blob/71eaf97/src/index.ts#L39)

___

### eth\_requestAccounts

▸ `Const` **eth_requestAccounts**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/index.ts:34](https://github.com/rhdeck/metamask-ts/blob/71eaf97/src/index.ts#L34)

___

### isConnected

▸ `Const` **isConnected**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/index.ts:165](https://github.com/rhdeck/metamask-ts/blob/71eaf97/src/index.ts#L165)

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

[src/index.ts:123](https://github.com/rhdeck/metamask-ts/blob/71eaf97/src/index.ts#L123)

___

### onAccountsChanged

▸ `Const` **onAccountsChanged**(`handler`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | (`accounts`: `string`[]) => `void` |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/index.ts:135](https://github.com/rhdeck/metamask-ts/blob/71eaf97/src/index.ts#L135)

___

### onChainChanged

▸ `Const` **onChainChanged**(`handler`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | (`chain`: `string`) => `void` |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/index.ts:138](https://github.com/rhdeck/metamask-ts/blob/71eaf97/src/index.ts#L138)

___

### onConnect

▸ `Const` **onConnect**(`handler`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | (`connectInfo`: [`ConnectInfo`](#interfacesconnectinfomd)) => `void` |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/index.ts:144](https://github.com/rhdeck/metamask-ts/blob/71eaf97/src/index.ts#L144)

___

### onDisconnect

▸ `Const` **onDisconnect**(`handler`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | (`error`: [`ProviderRpcError`](#interfacesproviderrpcerrormd)) => `void` |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/index.ts:147](https://github.com/rhdeck/metamask-ts/blob/71eaf97/src/index.ts#L147)

___

### onMessage

▸ `Const` **onMessage**(`handler`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | (`message`: [`ProviderMessage`](#interfacesprovidermessagemd)) => `void` |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/index.ts:154](https://github.com/rhdeck/metamask-ts/blob/71eaf97/src/index.ts#L154)

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

[src/index.ts:70](https://github.com/rhdeck/metamask-ts/blob/71eaf97/src/index.ts#L70)

___

### wallet\_getPermissions

▸ `Const` **wallet_getPermissions**(): `Promise`<[`Web3WalletPermission`](#interfacesweb3walletpermissionmd)[]\>

#### Returns

`Promise`<[`Web3WalletPermission`](#interfacesweb3walletpermissionmd)[]\>

#### Defined in

[src/index.ts:45](https://github.com/rhdeck/metamask-ts/blob/71eaf97/src/index.ts#L45)

___

### wallet\_registerOnboardingCompleted

▸ `Const` **wallet_registerOnboardingCompleted**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/index.ts:87](https://github.com/rhdeck/metamask-ts/blob/71eaf97/src/index.ts#L87)

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

[src/index.ts:50](https://github.com/rhdeck/metamask-ts/blob/71eaf97/src/index.ts#L50)

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

[src/index.ts:111](https://github.com/rhdeck/metamask-ts/blob/71eaf97/src/index.ts#L111)

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

[src/index.ts:81](https://github.com/rhdeck/metamask-ts/blob/71eaf97/src/index.ts#L81)

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

[src/index.ts:105](https://github.com/rhdeck/metamask-ts/blob/71eaf97/src/index.ts#L105)


<a name="interfacesaddethereumchainparametermd"></a>

[@raydeck/metamask-ts - v1.0.2](#readmemd) / AddEthereumChainParameter

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

[src/index.ts:67](https://github.com/rhdeck/metamask-ts/blob/71eaf97/src/index.ts#L67)

___

### chainId

• **chainId**: `string`

#### Defined in

[src/index.ts:59](https://github.com/rhdeck/metamask-ts/blob/71eaf97/src/index.ts#L59)

___

### chainName

• **chainName**: `string`

#### Defined in

[src/index.ts:60](https://github.com/rhdeck/metamask-ts/blob/71eaf97/src/index.ts#L60)

___

### iconUrls

• `Optional` **iconUrls**: `string`[]

#### Defined in

[src/index.ts:68](https://github.com/rhdeck/metamask-ts/blob/71eaf97/src/index.ts#L68)

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

[src/index.ts:61](https://github.com/rhdeck/metamask-ts/blob/71eaf97/src/index.ts#L61)

___

### rpcUrls

• **rpcUrls**: `string`[]

#### Defined in

[src/index.ts:66](https://github.com/rhdeck/metamask-ts/blob/71eaf97/src/index.ts#L66)


<a name="interfacesconnectinfomd"></a>

[@raydeck/metamask-ts - v1.0.2](#readmemd) / ConnectInfo

# Interface: ConnectInfo

## Table of contents

### Properties

- [chainId](#chainid)

## Properties

### chainId

• **chainId**: `string`

#### Defined in

[src/index.ts:142](https://github.com/rhdeck/metamask-ts/blob/71eaf97/src/index.ts#L142)


<a name="interfacesprovidermessagemd"></a>

[@raydeck/metamask-ts - v1.0.2](#readmemd) / ProviderMessage

# Interface: ProviderMessage

## Table of contents

### Properties

- [data](#data)
- [type](#type)

## Properties

### data

• **data**: `unknown`

#### Defined in

[src/index.ts:152](https://github.com/rhdeck/metamask-ts/blob/71eaf97/src/index.ts#L152)

___

### type

• **type**: `string`

#### Defined in

[src/index.ts:151](https://github.com/rhdeck/metamask-ts/blob/71eaf97/src/index.ts#L151)


<a name="interfacesproviderrpcerrormd"></a>

[@raydeck/metamask-ts - v1.0.2](#readmemd) / ProviderRpcError

# Interface: ProviderRpcError

## Hierarchy

- `Error`

  ↳ **`ProviderRpcError`**

## Table of contents

### Properties

- [code](#code)
- [data](#data)
- [message](#message)
- [name](#name)
- [stack](#stack)

## Properties

### code

• **code**: `number`

#### Defined in

[src/index.ts:159](https://github.com/rhdeck/metamask-ts/blob/71eaf97/src/index.ts#L159)

___

### data

• `Optional` **data**: `unknown`

#### Defined in

[src/index.ts:160](https://github.com/rhdeck/metamask-ts/blob/71eaf97/src/index.ts#L160)

___

### message

• **message**: `string`

#### Overrides

Error.message

#### Defined in

[src/index.ts:158](https://github.com/rhdeck/metamask-ts/blob/71eaf97/src/index.ts#L158)

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:973

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:975


<a name="interfacesrequestedpermissionsmd"></a>

[@raydeck/metamask-ts - v1.0.2](#readmemd) / RequestedPermissions

# Interface: RequestedPermissions

## Indexable

▪ [methodName: `string`]: {}


<a name="interfacesswitchethereumchainparametermd"></a>

[@raydeck/metamask-ts - v1.0.2](#readmemd) / SwitchEthereumChainParameter

# Interface: SwitchEthereumChainParameter

## Table of contents

### Properties

- [chainId](#chainid)

## Properties

### chainId

• **chainId**: `string`

#### Defined in

[src/index.ts:79](https://github.com/rhdeck/metamask-ts/blob/71eaf97/src/index.ts#L79)


<a name="interfaceswatchassetparamsmd"></a>

[@raydeck/metamask-ts - v1.0.2](#readmemd) / WatchAssetParams

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

[src/index.ts:98](https://github.com/rhdeck/metamask-ts/blob/71eaf97/src/index.ts#L98)

___

### type

• **type**: ``"ERC20"``

#### Defined in

[src/index.ts:97](https://github.com/rhdeck/metamask-ts/blob/71eaf97/src/index.ts#L97)


<a name="interfacesweb3walletpermissionmd"></a>

[@raydeck/metamask-ts - v1.0.2](#readmemd) / Web3WalletPermission

# Interface: Web3WalletPermission

## Table of contents

### Properties

- [date](#date)
- [parentCapability](#parentcapability)

## Properties

### date

• `Optional` **date**: `number`

#### Defined in

[src/index.ts:21](https://github.com/rhdeck/metamask-ts/blob/71eaf97/src/index.ts#L21)

___

### parentCapability

• **parentCapability**: `string`

#### Defined in

[src/index.ts:18](https://github.com/rhdeck/metamask-ts/blob/71eaf97/src/index.ts#L18)
