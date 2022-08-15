export const ProgressBar = ({ progress }) => {
  return (
    <>
      <div className="mb-2">{`${progress}%`}</div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 h-1 mr-1 relative rounded-xl">
        <div
          className="h-1 bg-[#ff9e48] rounded-xl"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </>
  );
};
