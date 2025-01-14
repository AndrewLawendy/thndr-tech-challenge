import { ITickers } from "@polygon.io/client-js";
import { useInfiniteQuery } from "react-query";
import polygonClient from "../../services/polygonService";

const useTickers = (searchValue: string) => {
  const { data, ...queryResponse } = useInfiniteQuery<ITickers>(
    ["stocks", searchValue],
    {
      queryFn: ({ pageParam }) => {
        const url = new URL(pageParam || "https://api.polygon.io");
        const cursor =
          new URLSearchParams(url.search).get("cursor") ?? undefined;
        return polygonClient.reference.tickers({
          search: searchValue,
          active: "true",
          limit: 20,
          market: "stocks",
          cursor,
        });
      },
      getNextPageParam: (lastPage) => lastPage.next_url,
    },
  );
  const tickers = data?.pages.flatMap(({ results }) => results) || [];

  return { tickers, ...queryResponse };
};

export default useTickers;
