import { useMutation, UseQueryOptions } from 'react-query';
import API from 'api';
import { BookProps } from 'components/Book';
import queryClient from 'queryClient';

export const useDeleteBook = (
  options?: UseQueryOptions<
    any,
    unknown,
    unknown,
    (string | number | undefined)[]
  >
) =>
  useMutation(
    (id: number) => {
      return API.delete(`/books/${id}`).then((res) => {
        queryClient.removeQueries(['book', id]);
        queryClient.invalidateQueries('books');
        return res.data.rows;
      });
    },
    {
      ...options,
    }
  );
