import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/userSlice'
import { newsApi } from '../features/newsApi'

const store = configureStore({
  reducer: {
    user: userReducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(newsApi.middleware),
})

export default store
