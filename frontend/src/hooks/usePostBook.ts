import { useMutation, UseMutationResult, UseQueryOptions } from 'react-query';
import API from 'api';
import { BookProps } from 'components/Book';
import queryClient from 'queryClient';

// * Hook for creating/editing a book. If id is provided in the passed data the book is mutated in other cases a book is created
export const usePostBook = (
  options?: UseQueryOptions<any, unknown, any, (string | number | undefined)[]>
): UseMutationResult<any, unknown, BookProps, unknown> =>
  useMutation(
    (data: BookProps) => {
      if (data.id) {
        return API.put(`/books/${data.id}`, data).then((res) => {
          queryClient.invalidateQueries(['book', data.id], { exact: true });
          queryClient.invalidateQueries('books');
          return res.data.rows;
        });
      }
      return API.post(`/books`, data).then((res) => {
        queryClient.invalidateQueries('books');
        return res.data.rows;
      });
    },
    {
      ...options,
    }
  );
