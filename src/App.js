import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Contract from "./pages/Contract";
import "./App.scss";

const BASE_URL = "https://backend-kovan.epns.io/apis";
const CHANNEL_ADDRESS = "0x94c3016ef3e503774630fC71F59B8Da9f7D470B7";

function App() {
  // const { library, active, account, chainId } = useWeb3React();

  // // create state components to fetch all the notifications.
  // const [isSubscribed, setIsSubscribed] = useState(false);

  // // channel details
  // const [channel, setChannel] = useState(null);
  // // load channel details on start
  // useEffect(() => {
  //   if (!account) return;
  //   // on page load, fetch channel details
  //   channels.getChannelByAddress(CHANNEL_ADDRESS, BASE_URL).then((data) => {
  //     setChannel(data);
  //   });
  //   // fetch if user is subscribed to channel
  //   channels.isUserSubscribed(account, CHANNEL_ADDRESS).then((res) => {
  //     console.log(res);
  //     setIsSubscribed(res);
  //   });
  // }, [account]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/category" element={<Category />}></Route>
        <Route path="/contract" element={<Contract />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
