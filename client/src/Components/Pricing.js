const Pricing = () => {
  return (
    <div className="flex justify-center">
      <section className="mb-4 w-72 border-t-8 px-2 py-1 bg-white dark:bg-gray-800 rounded border-red-500 border-2">
        <section className="w-full">
          <header className="text-3xl text-center md:mt-5 dark:text-white">
            Start from
          </header>
          <header className="w-full md:flex justify-center text-center mb-2">
            <span className="text-6xl text-red-500">50/hr</span>
            <span className="text-2xl dark:text-white">$</span>
            <span className="line-through text-6xl dark:text-white">150</span>
          </header>
          <ul className="mt-5 p-1 text-md text-gray-600 dark:text-gray-200">
            <li className="flex mb-1 py-1">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-8 h-8 text-red-500 dark:text-white font-bold"
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              50$/hr
            </li>
            <li className="flex mb-1 py-1">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-8 h-8 text-red-500 dark:text-white font-bold"
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              Park and Go
            </li>
            <li className="flex mb-1 py-1">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-8 h-8 text-red-500 dark:text-white font-bold"
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              100+ Parking Spots
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
};
export default Pricing;
