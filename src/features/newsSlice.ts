import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { NewsItem, INITIAL_STATE } from '../interfaces/news.interface'

const newsSlice = createSlice({
  name: 'news',
  initialState: INITIAL_STATE,
  reducers: {
    addNews: (state, action: PayloadAction<NewsItem[]>) => {
      state.news = action.payload
    },
    removeStoredNews: (state, action: PayloadAction<number>) => {
      state.news = state.news.filter((item) => item.id !== action.payload)
    },
    changeLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload
    },
    cacheNews: (state, action: PayloadAction<NewsItem[]>) => {
      state.cachedNews = action.payload
    },
  },
})

export const { addNews, removeStoredNews, changeLimit, cacheNews } = newsSlice.actions

export default newsSlice.reducer
