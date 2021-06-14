import { QueryCache, QueryClient } from 'react-query';
const queryCache = new QueryCache({});

const queryClient = new QueryClient({
  queryCache,
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      retryOnMount: false,
      staleTime: 1000000,
    },
  },
});

export default queryClient;
