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
  },
  {
    id: 2,
    name: "Collectibles",
    path: "/category?q=collectibles",
  },
  {
    id: 3,
    name: "Music",
    path: "/category?q=music",
  },
  {
    id: 4,
    name: "Photography",
    path: "/category?q=photography",
  },
  {
    id: 5,
    name: "Sports",
    path: "/category?q=sports",
  },
  {
    id: 6,
    name: "Trading Cards",
    path: "/category?q=trading-cards",
  },
  {
    id: 7,
    name: "Utility",
    path: "/category?q=utility",
  },
  {
    id: 8,
    name: "Virtual Worlds",
    path: "/category?q=virtual-worlds",
  },
];
