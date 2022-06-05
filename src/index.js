import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import "@rainbow-me/rainbowkit/styles.css";
// import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
// import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
// import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
// import { alchemyProvider } from "wagmi/providers/alchemy";
// import { publicProvider } from "wagmi/providers/public";
import { createClient, Provider } from "urql";

// const { chains, provider } = configureChains(
//   [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
//   [
//     alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }),
//     publicProvider(),
//     jsonRpcProvider({
//       rpc: (chain) => ({
//         http: `https://${chain.id}.example.com`,
//       }),
//     }),
//   ]
// );

// const { connectors } = getDefaultWallets({
//   appName: "My RainbowKit App",
//   chains,
// });

// const wagmiClient = createClient({
//   autoConnect: true,
//   connectors,
//   provider,
// });

const API_URL =
  "https://api.thegraph.com/subgraphs/name/jearjujaroen/graph-hack-2022-mva";

const client = createClient({
  url: API_URL,
});

ReactDOM.render(
  <React.StrictMode>
    {/* <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}> */}
    <Provider value={client}>
      <App />
    </Provider>
    {/* </RainbowKitProvider>
    </WagmiConfig> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
