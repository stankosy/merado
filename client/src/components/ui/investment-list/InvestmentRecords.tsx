import { ALL_TOKENS } from '../../../constants/tokenList';
import { formatDate } from '../../../utils/string-helpers';
import { ProgressBar } from '../progress-bar';
import { InvestmentStatus } from './InvestmentStatus';

export const InvestmentRecords = ({ investment }) => {
  return (
    <tr
      key={investment.id}
      className="shadow-lg hover:bg-[#25153a] transition "
    >
      <td className="table-cell sm:hidden whitespace-nowrap py-4 pl-4 pr-4 text-sm sm:pl-6">
        <div className="w-full flex flex-col">
          <div className="w-full flex items-center justify-between text-xs mb-4">
            <div>{formatDate(new Date(investment.createdAt))}</div>
            <InvestmentStatus status={investment.status} />
          </div>
          <div className="w-full flex items-center justify-between">
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
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-5 w-5 rounded-full"
                  src={ALL_TOKENS[investment.token_to].iconUrl}
                  alt=""
                />
              </div>
              <div className="ml-2">
                {ALL_TOKENS[investment.token_to].title}
              </div>
            </div>
          </div>
          <div className="mt-4 text-xs">
            <ProgressBar progress={investment.progress} />
          </div>
        </div>
      </td>
      <td className="hidden sm:table-cell whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
        {formatDate(new Date(investment.createdAt))}
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
        <InvestmentStatus status={investment.status} />
      </td>
      <td className="hidden sm:table-cell whitespace-nowrap px-3 py-4 text-sm">
        <ProgressBar progress={investment.progress} />
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
