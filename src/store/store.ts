import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/userSlice'
import newsReducer from '../features/newsSlice'
import { newsApi } from '../features/newsApi'

const store = configureStore({
  reducer: {
    user: userReducer,
    news: newsReducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(newsApi.middleware),
})

export default store
