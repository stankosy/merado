import { capitalize } from '../../../utils/string-helpers';
import { ALL_STATUS } from '../../../constants/investmentStatus';

const STATUS_COLOR = {
  [ALL_STATUS.ACTIVE]: '#10b981',
  [ALL_STATUS.PAUSED]: '#f59e0b',
  [ALL_STATUS.COMPLETE]: '#c026d3',
};

export const InvestmentStatus = ({ status }) => {
  return (
    <div className="inline-flex items-center pl-3 pr-0 sm:pr-3 py-0.5 rounded-md text-xs sm:text-sm font-medium">
      <svg
        className="-ml-1 mr-1.5 h-3 w-3"
        fill="currentColor"
        viewBox="0 0 8 8"
        style={{
          color: STATUS_COLOR[status],
        }}
      >
        <circle cx={4} cy={4} r={3} />
      </svg>
      <span>{capitalize(status)}</span>
    </div>
  );
};
