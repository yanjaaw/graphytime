import { useSearchParams } from "react-router-dom";
import Layout from "../components/Layout";
import InfluencerChart from "../components/tables/InfluencerChart";
import TopChart from "../components/tables/TopChart";
import WhaleChart from "../components/tables/WhaleChart";

export default function Category() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryName = searchParams.get("q");
  const spacedCategoryName = categoryName.replace(/-/g, " ");
  const formattedCategoryName =
    spacedCategoryName.charAt(0).toUpperCase() + spacedCategoryName.slice(1);

  // TODO: query subgraph here
  // const [result, reexecuteQuery] = useQuery({
  //   query: SearchPodcastsQuery,
  //   variables: { category },
  // });
  // const { data, fetching, error } = result;
  // if (data) console.log(data);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl mb-16">
          {formattedCategoryName} NFT Movers
        </h1>
        {/* <p className="text-base text-gray-700">
          Wallets who 
        </p> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <WhaleChart name={formattedCategoryName} whales={whales} />
          <InfluencerChart
            name={formattedCategoryName}
            influencers={influencers}
          />
        </div>
        {/* <TopChart
          categoryName={categoryName}
          formattedCategoryName={formattedCategoryName}
        /> */}
      </div>
    </Layout>
  );
}

const whales = [
  {
    address: "0x49Ff4750f424c1acCB8fbda8d95A8A2AAf0e8274",
    total_nfts: 1,
    total_transfers: 1,
  },
];

const influencers = [
  {
    address: "0x49Ff4750f424c1acCB8fbda8d95A8A2AAf0e8274",
    total_nfts: 1,
    total_transfers: 1,
  },
];
