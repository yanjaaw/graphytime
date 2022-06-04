import logo from './logo.svg';
import './App.css';
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  ConnectButton,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [
    alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }),
    publicProvider(),
    jsonRpcProvider({
        rpc: chain => ({
          http: `https://${chain.id}.example.com`,
        }),
      }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          We need to change <code>src/App.js</code> and save to reload.
        </p>
        <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
      <ConnectButton />
      </RainbowKitProvider>
    </WagmiConfig>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

      </header>
    </div>
  );
}

export default App;
