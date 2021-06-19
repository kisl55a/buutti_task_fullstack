import { useMutation, UseMutationResult, UseQueryOptions } from 'react-query';
import API from 'api';
import queryClient from 'queryClient';

// * Hook for deleting a book
export const useDeleteBook = (
  options?: UseQueryOptions<
    unknown,
    unknown,
    unknown,
    (string | number | undefined)[]
  >
): UseMutationResult<any, unknown, number, unknown> =>
  useMutation(
    (id: number) => {
      return API.delete(`/books/${id}`).then((res) => {
        queryClient.invalidateQueries('books');
        return res.data.rows;
      });
    },
    {
      ...options,
    }
  );
