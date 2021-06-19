import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query';
import API from 'api';

// * Hook for fetching book or all books. If id is provided the particular book is fetched. In other cases the hook fetches all the books
export const useFetchBook = (
  id?: number,
  options?: UseQueryOptions<any, unknown, any, (string | number | undefined)[]>
): UseQueryResult<any, unknown> =>
  useQuery(
    [`book${!id ? 's' : ''}`, id], // * Done to have 'books' and ['book', id] queries. That enables refetching the whole list and individual items separately
    () => {
      if (id) {
        return API.get(`/books/${id}`).then((res) => res.data.rows);
      }
      return API.get(`/books`).then((res) => res.data.rows);
    },
    {
      ...options,
    }
  );
