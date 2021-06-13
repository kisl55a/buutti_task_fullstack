import { useQuery, UseQueryOptions } from 'react-query';
import API from 'api';

export const useFetchBook = (
  id?: string | number,
  options?: UseQueryOptions<any, unknown, any, (string | number | undefined)[]>
) =>
  useQuery(
    ['book', id],
    () => {
      console.log('Id from hook', id);
      if (id) {
        return API.get(`/books/${id}`).then((res) => res.data.rows);
      }
      return API.get(`/books`).then((res) => res.data.rows);
    },
    {
      ...options,
    }
  );
