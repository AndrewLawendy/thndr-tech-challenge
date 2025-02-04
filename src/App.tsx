import { QueryClient, QueryClientProvider } from "react-query";
import NavBar from "./components/NavBar";
import SplashWrapper from "./components/SplashWrapper";
import ExploreStocks from "./pages/ExploreStocks/ExploreStocks";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SplashWrapper>
        <NavBar />

        {/* Routes should go here */}
        <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 min-h-screen">
          <ExploreStocks />
        </main>
      </SplashWrapper>
    </QueryClientProvider>
  );
}

export default App;
