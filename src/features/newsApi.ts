import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { NewsItem } from '../interfaces/news.interface'
import { API_URL } from '../contants/api'

export const newsApi = createApi({
  reducerPath: 'news',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getNews: builder.query<NewsItem[], number>({
      query: (limit = 10) => `posts?_limit=${limit}`,
    }),
    deleteNews: builder.mutation<number, number>({
      query: (id) => ({
        url: `posts/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
})

export const { useGetNewsQuery, useDeleteNewsMutation } = newsApi
