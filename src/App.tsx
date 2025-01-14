import { QueryClient, QueryClientProvider } from "react-query";
import SplashWrapper from "./components/SplashWrapper";
import ExploreStocks from "./pages/ExploreStocks/ExploreStocks";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false } },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SplashWrapper>
        {/* Routes should go here */}
        <main className="min-h-screen bg-background">
          <ExploreStocks />
        </main>
      </SplashWrapper>
    </QueryClientProvider>
  );
}

export default App;
