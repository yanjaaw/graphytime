import { createClient, useQuery } from "urql";
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

  // const whalesQuery = getWhalesQuery(categoryName);
  // const influencersQuery = getInfluencersQuery(categoryName);

  // const [whalesResult, reexecuteWhalesQuery] = useQuery({
  //   query: whalesQuery,
  // });
  // const { whalesData, whalesFetching, whalesError } = whalesResult;
  // if (whalesData) console.log(whalesData);

  // const [influencersResult, reexecuteInfluencersQuery] = useQuery({
  //   query: influencersQuery,
  // });
  // const { influencersData, influencersFetching, influencersError } =
  //   influencersResult;
  // if (influencersData) console.log(influencersData);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl mb-16">
          {formattedCategoryName} NFT Analysis
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
        <TopChart
          categoryName={categoryName}
          formattedCategoryName={formattedCategoryName}
        />
      </div>
    </Layout>
  );
}

const whales = [
  {
    address: "0xcFA6A349a1e9c5f3bF109D5F00232F3855004567",
    total_nfts: 72,
    total_transfers: 288,
  },
  {
    address: "0xeeF537dE2B80285A964A4ce64c2CA04A4746e9eF",
    total_nfts: 64,
    total_transfers: 386,
  },
  {
    address: "0xa8D3a27D8D11002E28a77f1859834437e3D4df35",
    total_nfts: 59,
    total_transfers: 182,
  },
  {
    address: "0x17eF2B6Ff281dbb79847c9CBb2Ce62572Abb24C8",
    total_nfts: 44,
    total_transfers: 272,
  },
  {
    address: "0xa3F398c9fdBa9804CC290Aa0dE9A77B06d51242e",
    total_nfts: 40,
    total_transfers: 196,
  },
];

const influencers = [
  {
    address: "0xDf9F9104AFEb481efA156ec8848372d37533B86A",
    total_nfts: 54,
    total_transfers: 464,
  },
  {
    address: "0x8Be019c5f77A16fc8CA40093a8836F20C7968D3b",
    total_nfts: 40,
    total_transfers: 264,
  },
  {
    address: "0xd2b961eb93e26d7f2561f292028807b764d19db0",
    total_nfts: 69,
    total_transfers: 256,
  },
  {
    address: "0xFaDEDFACe6e126f2556d679521b4ceeA6C372Ae7",
    total_nfts: 39,
    total_transfers: 244,
  },
  {
    address: "0x5cF8574C6A0Ee0CD2069fa8C687dCA5644637c01",
    total_nfts: 42,
    total_transfers: 182,
  },
];

function getWhalesQuery(category) {
  let query;

  switch (category) {
    case "art":
      query = `query {
        accounts(first: 10, orderBy: totalArtTokens, orderDirection: desc) {
          id
          totalArtTransactions
          totalArtTokens
        }
      }`;
      break;
    case "collectibles":
      query = `query {
        accounts(first: 10, orderBy: totalCollectiblesTokens, orderDirection: desc) {
          id
          totalCollectiblesTransactions
          totalCollectiblesTokens
        }
      }`;
      break;
    case "music":
      query = `query {
        accounts(first: 10, orderBy: totalMusicTokens, orderDirection: desc) {
          id
          totalMusicTransactions
          totalMusicTokens
        }
      }`;
      break;
    case "photography":
      query = `query {
        accounts(first: 10, orderBy: totalPhotographyTokens, orderDirection: desc) {
          id
          totalPhotographyTransactions
          totalPhotographyTokens
        }
      }`;
      break;
    case "sports":
      query = `query {
        accounts(first: 10, orderBy: totalSportsTokens, orderDirection: desc) {
          id
          totalSportsTransactions
          totalSportsTokens
        }
      }`;
      break;
    case "trading-cards":
      query = `query {
        accounts(first: 10, orderBy: totalTradingCardsTokens, orderDirection: desc) {
          id
          totalTradingCardsTransactions
          totalTradingCardsTokens
        }
      }`;
      break;
    case "utility":
      query = `query {
        accounts(first: 10, orderBy: totalUtilityTokens, orderDirection: desc) {
          id
          totalUtilityTransactions
          totalUtilityTokens
        }
      }`;
      break;
    case "virtual-worlds":
      query = `query {
        accounts(first: 10, orderBy: totalVirtualWorldsTokens, orderDirection: desc) {
          id
          totalVirtualWorldsTransactions
          totalVirtualWorldsTokens
        }
      }`;
      break;
    default:
      break;
  }
  return query;
}

function getInfluencersQuery(category) {
  let query;

  switch (category) {
    case "art":
      query = `query {
        accounts(first: 10, orderBy: totalArtTransactions, orderDirection: desc) {
          id
          totalArtTransactions
          totalArtTokens
        }
      }`;
      break;
    case "collectibles":
      query = `query {
        accounts(first: 10, orderBy: totalCollectiblesTransactions, orderDirection: desc) {
          id
          totalCollectiblesTransactions
          totalCollectiblesTokens
        }
      }`;
      break;
    case "music":
      query = `query {
        accounts(first: 10, orderBy: totalMusicTransactions, orderDirection: desc) {
          id
          totalMusicTransactions
          totalMusicTokens
        }
      }`;
      break;
    case "photography":
      query = `query {
        accounts(first: 10, orderBy: totalPhotographyTransactions, orderDirection: desc) {
          id
          totalPhotographyTransactions
          totalPhotographyTokens
        }
      }`;
      break;
    case "sports":
      query = `query {
        accounts(first: 10, orderBy: totalSportsTransactions, orderDirection: desc) {
          id
          totalSportsTransactions
          totalSportsTokens
        }
      }`;
      break;
    case "trading-cards":
      query = `query {
        accounts(first: 10, orderBy: totalTradingCardsTransactions, orderDirection: desc) {
          id
          totalTradingCardsTransactions
          totalTradingCardsTokens
        }
      }`;
      break;
    case "utility":
      query = `query {
        accounts(first: 10, orderBy: totalUtilityTransactions, orderDirection: desc) {
          id
          totalUtilityTransactions
          totalUtilityTokens
        }
      }`;
      break;
    case "virtual-worlds":
      query = `query {
        accounts(first: 10, orderBy: totalVirtualWorldsTransactions, orderDirection: desc) {
          id
          totalVirtualWorldsTransactions
          totalVirtualWorldsTokens
        }
      }`;
      break;
    default:
      break;
  }
  return query;
}
