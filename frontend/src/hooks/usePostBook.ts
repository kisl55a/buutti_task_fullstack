import { useMutation, UseQueryOptions } from 'react-query';
import API from 'api';
import { BookProps } from 'components/Book';
import queryClient from 'queryClient';

export const usePostBook = (
  options?: UseQueryOptions<any, unknown, any, (string | number | undefined)[]>
) =>
  useMutation(
    (data: BookProps) => {
      if (data.id) {
        return API.put(`/books/${data.id}`, data).then((res) => {
          queryClient.invalidateQueries(['book', data.id]);
          return res.data.rows;
        });
      }
      queryClient.invalidateQueries('book');

      return API.post(`/books`, data).then((res) => res.data.rows);
    },
    {
      ...options,
    }
  );
