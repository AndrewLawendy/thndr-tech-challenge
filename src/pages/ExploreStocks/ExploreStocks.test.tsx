import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import {
  afterAll,
  beforeAll,
  beforeEach,
  describe,
  expect,
  Mock,
  test,
  vi,
} from "vitest";
import useTickers from "../../resources/ExploreStocks/useTickers";
import ExploreStocks from "./ExploreStocks";

vi.mock("../../resources/ExploreStocks/useTickers");

const mockUseTickers = useTickers as Mock;

beforeAll(() => {
  global.IntersectionObserver = vi.fn((callback) => {
    return {
      observe: vi.fn(() => {
        callback([{ isIntersecting: true }]);
      }),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
    };
  }) as unknown as typeof IntersectionObserver;
});

afterAll(() => {
  delete (global as unknown as { IntersectionObserver?: IntersectionObserver })
    .IntersectionObserver;
});

describe("ExploreStocks Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    cleanup();
  });

  test("renders the search input and loading spinner", () => {
    mockUseTickers.mockReturnValue({
      tickers: undefined,
      isLoading: true,
      error: null,
    });

    render(<ExploreStocks />);

    expect(screen.getByPlaceholderText("Search stocks...")).not.toBeNull();
    expect(screen.getByRole("status")).not.toBeNull(); // loading spinner
  });

  test("displays NoData when no tickers are found", () => {
    mockUseTickers.mockReturnValue({
      tickers: [],
      isLoading: false,
      isFetchingNextPage: false,
      error: null,
    });

    render(<ExploreStocks />);

    expect(screen.getByText("No Stocks Found")).not.toBeNull();
    expect(
      screen.getByText(
        "We couldn't find any stocks matching your search criteria. Please try adjusting your search or check back later.",
      ),
    ).not.toBeNull();
  });

  test("renders tickers when data is available", () => {
    mockUseTickers.mockReturnValue({
      tickers: [
        {
          ticker: "AAPL",
          name: "Apple Inc.",
          type: "Common Stock",
          primary_exchange: "NASDAQ",
          currency_name: "USD",
          last_updated_utc: "2025-01-01T12:00:00Z",
        },
      ],
      isLoading: false,
      error: null,
    });

    render(<ExploreStocks />);

    expect(screen.getByText("AAPL")).not.toBeNull();
    expect(screen.getByText("Apple Inc.")).not.toBeNull();
    expect(screen.getByText("Currency: USD")).not.toBeNull();
    expect(screen.getByText("Updated: 1/1/2025")).not.toBeNull();
  });

  test("calls fetchNextPage on scroll to the last ticker", async () => {
    const mockFetchNextPage = vi.fn();
    mockUseTickers.mockReturnValue({
      tickers: [
        {
          ticker: "AAPL",
          name: "Apple Inc.",
          type: "Common Stock",
          primary_exchange: "NASDAQ",
          currency_name: "USD",
          last_updated_utc: "2025-01-01T12:00:00Z",
        },
      ],
      isLoading: false,
      error: null,
      fetchNextPage: mockFetchNextPage,
      hasNextPage: true,
    });

    render(<ExploreStocks />);

    await waitFor(() => {
      expect(mockFetchNextPage).toHaveBeenCalledTimes(1);
    });
  });

  test("displays Error component when there is an error", () => {
    mockUseTickers.mockReturnValue({
      tickers: undefined,
      isLoading: false,
      error: "Error",
    });

    render(<ExploreStocks />);

    expect(screen.getByText("Oops! Something went wrong")).not.toBeNull();
  });

  test("updates search input and triggers debounced search", async () => {
    render(<ExploreStocks />);
    const input =
      screen.getByPlaceholderText<HTMLInputElement>("Search stocks...");

    fireEvent.change(input, { target: { value: "AAPL" } });

    await waitFor(() => {
      expect(input.value).toBe("AAPL");
    });
  });

  test("does not call fetchNextPage when hasNextPage is false", async () => {
    const mockFetchNextPage = vi.fn();
    mockUseTickers.mockReturnValue({
      tickers: [],
      isLoading: false,
      error: null,
      fetchNextPage: mockFetchNextPage,
      hasNextPage: false,
    });

    render(<ExploreStocks />);

    await waitFor(() => {
      expect(mockFetchNextPage).not.toHaveBeenCalled();
    });
  });

  test("displays tickers correctly with multiple items", () => {
    mockUseTickers.mockReturnValue({
      tickers: [
        {
          ticker: "AAPL",
          name: "Apple Inc.",
          type: "Common Stock",
          primary_exchange: "NASDAQ",
          currency_name: "USD",
          last_updated_utc: "2025-01-01T12:00:00Z",
        },
        {
          ticker: "MSFT",
          name: "Microsoft Corp.",
          type: "Common Stock",
          primary_exchange: "NASDAQ",
          currency_name: "USD",
          last_updated_utc: "2025-01-02T12:00:00Z",
        },
      ],
    });

    render(<ExploreStocks />);

    expect(screen.getByText("AAPL")).not.toBeNull();
    expect(screen.getByText("Apple Inc.")).not.toBeNull();
    expect(screen.getByText("MSFT")).not.toBeNull();
    expect(screen.getByText("Microsoft Corp.")).not.toBeNull();
  });
});
