import { WarpCoreConfig } from '@hyperlane-xyz/sdk';

// A list of Warp Route token configs
// These configs will be merged with the warp routes in the configured registry
// The input here is typically the output of the Hyperlane CLI warp deploy command
export const warpRouteConfigs: WarpCoreConfig = {
  tokens: [
    {
      chainName: "base",
      standard: "TokenStandard.EvmHypNative",
      decimals: 18,
      symbol: "ETH",
      name: "Ether",
      addressOrDenom: "0xF823f5b1E4017190c14c4cf975DF0d33e5AF6A40",
      connections: [
        { token: "ethereum|lisk|0x274c9f6ac5bD2Be638e8122e8C656a9899B60cc8" },
        { token: "ethereum|mint|0x73e95f62CaD1624f93142aEd3A8045C230bAc3bd" },
        { token: "ethereum|optimism|0xE8D11E04Cf6bE23CB8c6aeC0a52ddA2Ac586dD9C" },
        { token: "ethereum|swell|0x174832329F460322C8D8A417b22c72a5088f1d96" }
      ]
    },
    {
      chainName: "lisk",
      standard: "TokenStandard.EvmHypNative",
      decimals: 18,
      symbol: "ETH",
      name: "Ether",
      addressOrDenom: "0x274c9f6ac5bD2Be638e8122e8C656a9899B60cc8",
      connections: [
        { token: "ethereum|base|0xF823f5b1E4017190c14c4cf975DF0d33e5AF6A40" },
        { token: "ethereum|mint|0x73e95f62CaD1624f93142aEd3A8045C230bAc3bd" },
        { token: "ethereum|optimism|0xE8D11E04Cf6bE23CB8c6aeC0a52ddA2Ac586dD9C" },
        { token: "ethereum|swell|0x174832329F460322C8D8A417b22c72a5088f1d96" }
      ]
    },
    {
      chainName: "mint",
      standard: "TokenStandard.EvmHypNative",
      decimals: 18,
      symbol: "ETH",
      name: "Ether",
      addressOrDenom: "0x73e95f62CaD1624f93142aEd3A8045C230bAc3bd",
      connections: [
        { token: "ethereum|base|0xF823f5b1E4017190c14c4cf975DF0d33e5AF6A40" },
        { token: "ethereum|lisk|0x274c9f6ac5bD2Be638e8122e8C656a9899B60cc8" },
        { token: "ethereum|optimism|0xE8D11E04Cf6bE23CB8c6aeC0a52ddA2Ac586dD9C" },
        { token: "ethereum|swell|0x174832329F460322C8D8A417b22c72a5088f1d96" }
      ]
    },
    {
      chainName: "optimism",
      standard: "TokenStandard.EvmHypNative",
      decimals: 18,
      symbol: "ETH",
      name: "Ether",
      addressOrDenom: "0xE8D11E04Cf6bE23CB8c6aeC0a52ddA2Ac586dD9C",
      connections: [
        { token: "ethereum|base|0xF823f5b1E4017190c14c4cf975DF0d33e5AF6A40" },
        { token: "ethereum|lisk|0x274c9f6ac5bD2Be638e8122e8C656a9899B60cc8" },
        { token: "ethereum|mint|0x73e95f62CaD1624f93142aEd3A8045C230bAc3bd" },
        { token: "ethereum|swell|0x174832329F460322C8D8A417b22c72a5088f1d96" }
      ]
    },
    {
      chainName: "swell",
      standard: "TokenStandard.EvmHypCollateral",
      decimals: 18,
      symbol: "ETH",
      name: "Ether",
      addressOrDenom: "0x174832329F460322C8D8A417b22c72a5088f1d96",
      collateralAddressOrDenom: "0xF48Bd7a2875A168e48E3B77A95Bd06c267b58441",
      connections: [
        { token: "ethereum|base|0xF823f5b1E4017190c14c4cf975DF0d33e5AF6A40" },
        { token: "ethereum|lisk|0x274c9f6ac5bD2Be638e8122e8C656a9899B60cc8" },
        { token: "ethereum|mint|0x73e95f62CaD1624f93142aEd3A8045C230bAc3bd" },
        { token: "ethereum|optimism|0xE8D11E04Cf6bE23CB8c6aeC0a52ddA2Ac586dD9C" }
      ]
    }
  ],
  options: {},
};
