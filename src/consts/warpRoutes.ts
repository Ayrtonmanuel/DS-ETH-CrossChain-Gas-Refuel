import { WarpCoreConfig } from '@hyperlane-xyz/sdk';
export const warpRouteConfigs: WarpCoreConfig = {
  tokens: [
    {
      chainName: 'arbitrumsepolia',
      standard: TokenStandard.EvmHypCollateral,
      decimals: 6,
      logoURI: '/deployments/warp_routes/USDC/logo.svg',
      symbol: 'USDC',
      name: 'USD Coin',
      addressOrDenom: "0x31861e286A4C5d29d68f4D514B7421109cb48FA1",
      collateralAddressOrDenom: "0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d",
      connections: [{ token: 'ethereum|basesepolia|0x73aB51830d853739b8aC044235FC470f681762bD' }]
    },
    {
      chainName: 'basesepolia',
      standard: TokenStandard.EvmHypSynthetic,
      decimals: 6,
      logoURI: '/deployments/warp_routes/USDC/logo.svg',
      symbol: 'USDC',
      name: 'USD Coin',
      addressOrDenom: "0x73aB51830d853739b8aC044235FC470f681762bD",
      connections: [{ token: 'ethereum|arbitrumsepolia|0x31861e286A4C5d29d68f4D514B7421109cb48FA1' }]
    }]
