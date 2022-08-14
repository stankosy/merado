export const InvestmentFields = () => {
  return (
    <tr>
      <th
        scope="col"
        className="table-cell sm:hidden py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6"
      >
        Investments
      </th>
      <th
        scope="col"
        className="hidden sm:table-cell py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6"
      >
        Launched
      </th>
      <th
        scope="col"
        className="hidden sm:table-cell px-3 py-3.5 text-left text-sm font-semibold "
      >
        Amount
      </th>
      <th
        scope="col"
        className="hidden sm:table-cell px-3 py-3.5 text-left text-sm font-semibold "
      >
        Token
      </th>
      <th
        scope="col"
        className="hidden sm:table-cell px-3 py-3.5 text-left text-sm font-semibold "
      >
        Status
      </th>
      <th
        scope="col"
        className="hidden sm:table-cell px-3 py-3.5 text-left text-sm font-semibold "
      >
        {'Progress (%)'}
      </th>
      <th
        scope="col"
        className="hidden sm:table-cell relative py-3.5 pl-3 pr-4 sm:pr-6"
      >
        <span className="sr-only">Edit</span>
      </th>
    </tr>
  );
};
