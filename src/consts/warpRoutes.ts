import { WarpCoreConfig } from '@hyperlane-xyz/sdk';

// A list of Warp Route token configs
// These configs will be merged with the warp routes in the configured registry
// The input here is typically the output of the Hyperlane CLI warp deploy command
export const warpRouteConfigs: WarpCoreConfig = {

    tokens: [base:
  interchainSecurityModule:
    modules:
      - relayer: "0xda2c1fF123D05A65A5c5CecfAFE9940f81B1343B"
        type: trustedRelayerIsm
      - domains: {}
        owner: "0xda2c1fF123D05A65A5c5CecfAFE9940f81B1343B"
        type: defaultFallbackRoutingIsm
    threshold: 1
    type: staticAggregationIsm
  isNft: false
  mailbox: "0xeA87ae93Fa0019a82A727bfd3eBd1cFCa8f64f1D"
  owner: "0xda2c1fF123D05A65A5c5CecfAFE9940f81B1343B"
  proxyAdmin:
    owner: "0xda2c1fF123D05A65A5c5CecfAFE9940f81B1343B"
  type: native
bsc:
  interchainSecurityModule:
    modules:
      - relayer: "0xda2c1fF123D05A65A5c5CecfAFE9940f81B1343B"
        type: trustedRelayerIsm
      - domains: {}
        owner: "0xda2c1fF123D05A65A5c5CecfAFE9940f81B1343B"
        type: defaultFallbackRoutingIsm
    threshold: 1
    type: staticAggregationIsm
  isNft: false
  mailbox: "0x2971b9Aec44bE4eb673DF1B88cDB57b96eefe8a4"
  owner: "0xda2c1fF123D05A65A5c5CecfAFE9940f81B1343B"
  proxyAdmin:
    owner: "0xda2c1fF123D05A65A5c5CecfAFE9940f81B1343B"
  type: native
eclipsemainnet:
  interchainSecurityModule:
    modules:
      - relayer: "0xda2c1fF123D05A65A5c5CecfAFE9940f81B1343B"
        type: trustedRelayerIsm
      - domains: {}
        owner: "0xda2c1fF123D05A65A5c5CecfAFE9940f81B1343B"
        type: defaultFallbackRoutingIsm
    threshold: 1
    type: staticAggregationIsm
  isNft: false
  mailbox: EitxJuv2iBjsg2d7jVy2LDC1e2zBrx4GB5Y9h2Ko3A9Y
  owner: "0xda2c1fF123D05A65A5c5CecfAFE9940f81B1343B"
  proxyAdmin:
    owner: "0xda2c1fF123D05A65A5c5CecfAFE9940f81B1343B"
  type: native
lisk:
  interchainSecurityModule:
    modules:
      - relayer: "0xda2c1fF123D05A65A5c5CecfAFE9940f81B1343B"
        type: trustedRelayerIsm
      - domains: {}
        owner: "0xda2c1fF123D05A65A5c5CecfAFE9940f81B1343B"
        type: defaultFallbackRoutingIsm
    threshold: 1
    type: staticAggregationIsm
  isNft: false
  mailbox: "0x2f2aFaE1139Ce54feFC03593FeE8AB2aDF4a85A7"
  owner: "0xda2c1fF123D05A65A5c5CecfAFE9940f81B1343B"
  proxyAdmin:
    owner: "0xda2c1fF123D05A65A5c5CecfAFE9940f81B1343B"
  type: native
optimism:
  interchainSecurityModule:
    modules:
      - relayer: "0xda2c1fF123D05A65A5c5CecfAFE9940f81B1343B"
        type: trustedRelayerIsm
      - domains: {}
        owner: "0xda2c1fF123D05A65A5c5CecfAFE9940f81B1343B"
        type: defaultFallbackRoutingIsm
    threshold: 1
    type: staticAggregationIsm
  isNft: false
  mailbox: "0xd4C1905BB1D26BC93DAC913e13CaCC278CdCC80D"
  owner: "0xda2c1fF123D05A65A5c5CecfAFE9940f81B1343B"
  proxyAdmin:
    owner: "0xda2c1fF123D05A65A5c5CecfAFE9940f81B1343B"
  type: native
ronin:
  interchainSecurityModule:
    modules:
      - relayer: "0xda2c1fF123D05A65A5c5CecfAFE9940f81B1343B"
        type: trustedRelayerIsm
      - domains: {}
        owner: "0xda2c1fF123D05A65A5c5CecfAFE9940f81B1343B"
        type: defaultFallbackRoutingIsm
    threshold: 1
    type: staticAggregationIsm
  isNft: false
  mailbox: "0xFe73d454a7ba540DEa62BfB44235c16973Bb50B8"
  owner: "0xda2c1fF123D05A65A5c5CecfAFE9940f81B1343B"
  proxyAdmin:
    owner: "0xda2c1fF123D05A65A5c5CecfAFE9940f81B1343B"
  type: native
solanamainnet:
  interchainSecurityModule:
    modules:
      - relayer: "0xda2c1fF123D05A65A5c5CecfAFE9940f81B1343B"
        type: trustedRelayerIsm
      - domains: {}
        owner: "0xda2c1fF123D05A65A5c5CecfAFE9940f81B1343B"
        type: defaultFallbackRoutingIsm
    threshold: 1
    type: staticAggregationIsm
  isNft: false
  mailbox: E588QtVUvresuXq2KoNEwAmoifCzYGpRBdHByN9KQMbi
  owner: "0xda2c1fF123D05A65A5c5CecfAFE9940f81B1343B"
  proxyAdmin:
    owner: "0xda2c1fF123D05A65A5c5CecfAFE9940f81B1343B"
  type: native],
  options: {},
};
