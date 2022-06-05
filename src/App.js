import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Contract from "./pages/Contract";
import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { channels } from "@epnsproject/frontend-sdk-staging";
import "./App.scss";

const BASE_URL = "https://backend-kovan.epns.io/apis";
const CHANNEL_ADDRESS = "0x94c3016ef3e503774630fC71F59B8Da9f7D470B7";

function App() {
  const { library, active, account, chainId } = useWeb3React();

  // create state components to fetch all the notifications.
  const [isSubscribed, setIsSubscribed] = useState(false);

  // channel details
  const [channel, setChannel] = useState(null);
  // load channel details on start
  useEffect(() => {
    if (!account) return;
    // on page load, fetch channel details
    channels.getChannelByAddress(CHANNEL_ADDRESS, BASE_URL).then((data) => {
      setChannel(data);
    });
    // fetch if user is subscribed to channel
    channels.isUserSubscribed(account, CHANNEL_ADDRESS).then((res) => {
      console.log(res);
      setIsSubscribed(res);
    });
  }, [account]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/category" element={<Category />}></Route>
        <Route path="/contract" element={<Contract />}></Route>
      </Routes>
      <div className="App">
      {/* define the header */}
      <h2 className="App__header">
        <span> EPNS Playground </span>
      </h2>
      {/* define the header */}

      {active ? (
        <>
          {/* section for channels */}
          {channel && (
            <div>
              <h3>Sample clear
                code Channel</h3>
              <div className="sample__channel">
                <div>
                  <img src={channel.icon} className="channel__image" />
                  <h2>{channel.name}</h2>
                </div>
                <div
                  onClick={() => {
                    isSubscribed
                      ? channels.optOut(
                          library.getSigner(account),
                          channel.addr,
                          chainId,
                          account,
                        )
                      : channels.optIn(
                          library.getSigner(account),
                          channel.addr,
                          chainId,
                          account,
                        );
                  }}
                  className="subscribebutton"
                >
                  {isSubscribed ? "unsubscribe" : "subscribe"}
                </div>
              </div>
            </div>
          )}
          {/* section for channels */}

        </>
      ) : (
        <p>Please connect to your wallet on the kovan test network to proceed</p>
      )}
    </div>
    </BrowserRouter>
  );
}

export default App;
