import { useEffect, useRef, useState } from "react";
import Error from "../../components/Error";
import NoData from "../../components/NoData";
import { useDebounce } from "../../hooks/useDebounce";
import useTickers from "../../resources/ExploreStocks/useTickers";
import StockSkeleton from "./StockSkeleton";
import { stockTypeColors } from "./StockTypes";

const getTypeStyle = (type: string) => {
  return stockTypeColors[type] || stockTypeColors.DEFAULT;
};

const ExploreStocks = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);
  const {
    tickers,
    isLoading,
    isFetchingNextPage,
    isRefetching,
    error,
    fetchNextPage,
    hasNextPage,
    refetch,
  } = useTickers(debouncedSearch);
  const lastTickerRef = useRef<HTMLDivElement>(null);
  const noData =
    !isLoading &&
    !isFetchingNextPage &&
    error === null &&
    tickers &&
    tickers.length === 0;

  useEffect(() => {
    if (!lastTickerRef.current || !hasNextPage) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (
        entry.isIntersecting &&
        hasNextPage &&
        !isLoading &&
        !isFetchingNextPage
      ) {
        fetchNextPage();
      }
    });

    observer.observe(lastTickerRef.current);

    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage, isLoading]);

  return (
    <>
      <div className="sticky top-16 bg-gray-50 z-10 pb-4 pt-6 -mt-6">
        <input
          type="search"
          placeholder="Search stocks..."
          className="w-full p-3 border border-border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {noData && (
        <NoData
          title="No Stocks Found"
          message="We couldn't find any stocks matching your search criteria. Please try adjusting your search or check back later."
        />
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {tickers?.map((ticker) => (
          <div
            className="p-4 border border-border rounded-lg hover:shadow-md transition-shadow bg-background"
            key={`${ticker.ticker}-${ticker.last_updated_utc}`}
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  {ticker.ticker}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2 mt-1">
                  {ticker.name}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeStyle(ticker.type).color}`}
              >
                {getTypeStyle(ticker.type).label}
              </span>
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200">
                {ticker.primary_exchange}
              </span>
            </div>
            <div className="mt-3 text-xs text-gray-500">
              <p>Currency: {ticker.currency_name?.toUpperCase()}</p>
              {ticker.last_updated_utc && (
                <p>
                  Updated:{" "}
                  {new Date(ticker.last_updated_utc).toLocaleDateString()}
                </p>
              )}
            </div>
          </div>
        ))}

        {(isLoading || isFetchingNextPage || isRefetching) && (
          <>
            <StockSkeleton
              role="status"
              aria-label="Loading"
              className="block"
            />
            <StockSkeleton aria-label="Loading" className="hidden md:block" />
            <StockSkeleton aria-label="Loading" className="hidden lg:block" />
            <StockSkeleton aria-label="Loading" className="hidden lg:block" />
          </>
        )}
      </div>

      {hasNextPage && error === null && <div ref={lastTickerRef} />}

      {error !== null && <Error className="mt-6" retry={refetch} />}
    </>
  );
};

export default ExploreStocks;
