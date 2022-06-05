export default function InfluencerChart({ name, influencers }) {
  return (
    <div className="mb-32">
      <h2 className="text-xl font-semibold text-gray-900">
        Active {name} NFT Influencers
      </h2>
      <p className="mt-2 text-sm text-gray-700">
        Wallets with most transactions related to {name} NFTs
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
                    Address
                  </th>

                  <th
                    scope="col"
                    className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                  >
                    No. Transfers
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
                {influencers.map((influencer, index) => (
                  <tr key={influencer.address}>
                    <td className="whitespaced-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0">
                      {index + 1}
                    </td>
                    <td className="truncate max-w-xs py-4 px-3 text-sm text-gray-500">
                      {influencer.address}
                    </td>
                    <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                      {influencer.total_transfers}
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 md:pr-0">
                      <a
                        href={`https://opensea.io/${influencer.address}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        View
                        <span className="sr-only">, {influencer.name}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
