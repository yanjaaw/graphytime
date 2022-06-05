import { useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import Layout from "../components/Layout";

export default function Home() {
  const [inputVal, setInputVal] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = { address: inputVal };
    navigate({
      pathname: "/contract",
      search: `?${createSearchParams(params)}`,
      replace: true,
    });
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Data to enrich your</span>{" "}
            <span className="block text-indigo-600 xl:inline">
              online business
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
        </div>
        <div className="mt-8 md:mt-16">
          <form className="sm:flex" onSubmit={handleSubmit}>
            <label htmlFor="search" className="sr-only">
              Search by contract address
            </label>
            <input
              id="search"
              type="text"
              placeholder="Search by contract address"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              required
              className="w-full px-5 py-3 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="mt-12 md:mt-24">
          <h2 className="text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
            Analyze popular NFT collections by category
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {categories.map((category) => (
              <div
                key={category.id}
                className="relative rounded-lg border border-gray-300 bg-white px-3 py-6 sm:px-6 sm:py-12 shadow-sm text-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
              >
                <a href={category.path} className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-center text-sm sm:text-base font-medium text-gray-900">
                    {category.name}
                  </p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

const categories = [
  {
    id: 1,
    name: "Art",
    path: "/category?q=art",
    contracts: [
      "0x96dC73c8B5969608C77375F085949744b5177660",
      "0x89AC334A1C882217916CB90f2A45cBA88cE35a52",
      "0x85A19dd2aD0d1d2b25Bb164810FaD08cdc0B33d7",
      "0xd21818B6052dF69EEd04E9b2aF564b75140aAcb7",
    ],
  },
  {
    id: 2,
    name: "Collectibles",
    path: "/category?q=collectibles",
    contracts: [
      "0x1eFf5ed809C994eE2f500F076cEF22Ef3fd9c25D",
      "0xECDD2F733bD20E56865750eBcE33f17Da0bEE461",
      "0xB78f1A96F6359Ef871f594Acb26900e02bFc8D00",
      "0x6CC8e06D647883868f2d3149b0eA0734FD67f3e4",
      "0xABF66CA534f8A5081303E3873F0f4771c67B7b45",
      "0xDBCab7A768EA9a00B2fFA5A2eB387cAD609E2114",
    ],
  },
  {
    id: 3,
    name: "Music",
    path: "/category?q=music",
    contracts: [
      "0xA0E1B198bCC877a950A29512ab5C0CE1Bb964c97",
      "0xf1B33aC32dbC6617f7267a349be6ebb004FeCcff",
      "0x52E66cA968010d064938A8099a172CBAaf08c125",
      "0x647037de761696d224333778e69082ce3b742242",
      "0xcBC67Ea382F8a006d46EEEb7255876BeB7d7f14d",
    ],
  },
  {
    id: 4,
    name: "Photography",
    path: "/category?q=photography",
    contracts: [
      "0xcf571b149736f4476A4A47813951fD074846DB1C",
      "0xA95cCcbCA85D4bB99549ec09E3D83cE1E88988aE",
      "0x0fAED6DDeF3773f3Ee5828383AAeEaCA2a94564a",
      "0xcb1021080B61Dac7032618De925a62176cBC8372",
      "0xE6501d00DDCa2AB22c655C612e73Ed822D9256a2",
    ],
  },
  {
    id: 5,
    name: "Sports",
    path: "/category?q=sports",
    contracts: [
      "0x48E6013EcF4d40ce15c5223B62Fc2FE33296C2e4",
      "0x017Ba9AC7916ebd646e7c11DD220c05c5b790224",
      "0x59Ec8e68D9cAa87f6B5BC4013172c20E85ccdaD0",
      "0x9d5407C08FEBe35F3A747da422dC2Da45ca30b61",
      "0xb753b59caF85c2755150857eE4919c22Ae71926c",
      "0x12622B71aa62A595Be0F65009264De3Fe3DBc7aa",
    ],
  },
  {
    id: 6,
    name: "Trading Cards",
    path: "/category?q=trading-cards",
    contracts: [
      "0xC22616E971a670E72F35570337e562c3E515FBFE",
      "0x52F1DD0b55E89d7241CeCA73bC58F716C435ef2d",
      "0x97CA7FE0b0288f5EB85F386FeD876618FB9b8Ab8",
      "0x2a28eC87eE3bf6672dec0e775450bD952a09EF6d",
      "0xfF80bD43e3f0E414AFC70Cb8Ac1D3F0e6a303A2f",
    ],
  },
  {
    id: 7,
    name: "Utility",
    path: "/category?q=utility",
    contracts: [
      "0x0BD4D37E0907C9F564aaa0a7528837B81B25c605",
      "0x648E8428e0104Ec7D08667866a3568a72Fe3898F",
      "0xAc2a6706285b91143eaded25d946Ff17A60A6512",
      "0x7DaEC605E9e2a1717326eeDFd660601e2753A057",
      "0x34997F9C19465eC01B7Ed2AB0E61E2a388702790",
    ],
  },
  {
    id: 8,
    name: "Virtual Worlds",
    path: "/category?q=virtual-worlds",
    contracts: [
      "0xa342f5D851E866E18ff98F351f2c6637f4478dB5",
      "0x79986aF15539de2db9A5086382daEdA917A9CF0C",
      "0x244FC4178fa685Af909c88b4D4CD7eB9127eDb0B",
      "0x1B829B926a14634d36625e60165c0770C09D02b2",
      "0xc36cF0cFcb5d905B8B513860dB0CFE63F6Cf9F5c",
    ],
  },
];
