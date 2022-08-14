import { ALL_TOKENS } from '../../../constants/tokenList';

export const InvestmentRecords = ({ investment }) => {
  return (
    <tr
      key={investment.id}
      className="shadow-lg hover:bg-[#25153a] transition "
    >
      <td className="table-cell sm:hidden whitespace-nowrap py-4 pl-4 pr-4 text-sm sm:pl-6">
        <div className="w-full flex flex-col">
          <div className="w-full flex items-center justify-between text-xs mb-4">
            <div>{investment.createdAt}</div>
            <div>
              <svg
                className="-ml-1 mr-1.5 h-2 w-2 text-green-500"
                fill="currentColor"
                viewBox="0 0 8 8"
                style={{
                  color: investment.status ? '#10b981' : '#f43f5e',
                }}
              >
                <circle cx={4} cy={4} r={3} />
              </svg>
            </div>
          </div>
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center">
              <img
                className="h-5 w-5 rounded-full"
                src={ALL_TOKENS[investment.token_to].iconUrl}
                alt=""
              />
              <span className="ml-2">{investment.amount}</span>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
            <img
              className="h-5 w-5 rounded-full"
              src={ALL_TOKENS[investment.token_to].iconUrl}
              alt=""
            />
          </div>
          <div className="mt-4 text-xs">
            {`${
              investment.progress
            }% completed as of ${new Date().toLocaleDateString()}`}
          </div>
        </div>
      </td>
      <td className="hidden sm:table-cell whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
        {investment.createdAt}
      </td>
      <td className="hidden sm:table-cell whitespace-nowrap px-3 py-4 text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img
              className="h-5 w-5 rounded-full"
              src={ALL_TOKENS[investment.token_from].iconUrl}
              alt=""
            />
          </div>
          <div className="ml-2">
            {investment.amount} {ALL_TOKENS[investment.token_from].title}
          </div>
        </div>
      </td>
      <td className="hidden sm:table-cell whitespace-nowrap px-3 py-4 text-sm ">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img
              className="h-5 w-5 rounded-full"
              src={ALL_TOKENS[investment.token_to].iconUrl}
              alt=""
            />
          </div>
          <div className="ml-2">{ALL_TOKENS[investment.token_to].title}</div>
        </div>
      </td>
      <td className="hidden sm:table-cell whitespace-nowrap px-3 py-4 text-sm">
        <div className="w-full inline-flex items-center px-3 py-0.5 rounded-md text-sm font-medium">
          <svg
            className="-ml-1 mr-1.5 h-2 w-2 text-green-500"
            fill="currentColor"
            viewBox="0 0 8 8"
            style={{
              color: investment.status ? '#10b981' : '#f43f5e',
            }}
          >
            <circle cx={4} cy={4} r={3} />
          </svg>
          <span>{investment.status ? 'Active' : 'Inactive'}</span>
        </div>
      </td>
      <td className="hidden sm:table-cell whitespace-nowrap px-3 py-4 text-sm">
        {investment.progress}
      </td>
      <td className="hidden sm:table-cell relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
        <div className="cursor-pointer hover:text-[#ff4293] transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
        </div>
      </td>
    </tr>
  );
};
