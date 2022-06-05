import topCharts from "../../data/topCharts.json";
import { FaEthereum } from "react-icons/fa";

export default function TopChart({ categoryName, formattedCategoryName }) {
  const collections = topCharts[categoryName];

  return (
    <div className="mb-32">
      <h2 className="text-xl font-semibold text-gray-900">
        Top {formattedCategoryName} NFT Collections
      </h2>
      <p className="mt-2 text-sm text-gray-700">
        Best performing NFT collections of all time
      </p>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0"
                  >
                    Rank
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                  >
                    Collection
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                  >
                    Total Volume
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                  >
                    Total Sales
                  </th>
                  <th
                    scope="col"
                    className="relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0"
                  >
                    <span className="sr-only">View</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {collections.map((collection, index) => {
                  const totalVolume = collection.total_volume.toLocaleString(
                    "en-US",
                    { maximumFractionDigits: 2 }
                  );
                  const totalSales = collection.total_sales.toLocaleString(
                    "en-US",
                    { maximumFractionDigits: 2 }
                  );

                  return (
                    <tr key={collection.slug}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0">
                        {index + 1}
                      </td>
                      <td className="truncate max-w-xs py-4 px-3 text-sm text-gray-500">
                        {collection.name}
                      </td>
                      <td className="truncate max-w-xs py-4 px-3 text-sm text-gray-500">
                        <div className="flex items-center">
                          <FaEthereum className="w-4 h-4" />
                          {totalVolume}
                        </div>
                      </td>
                      <td className="truncate max-w-xs py-4 px-3 text-sm text-gray-500">
                        <div className="flex items-center">
                          <FaEthereum className="w-4 h-4" />
                          {totalSales}
                        </div>
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 md:pr-0">
                        <a
                          href={`https://opensea.io/collection/${collection.slug}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          View
                          <span className="sr-only">, {collection.name}</span>
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
