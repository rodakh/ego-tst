export interface NewsItem {
  id: number
  title: string
  body: string
}

export interface NewsState {
  news: NewsItem[] | []
  limit: number
  cachedNews: NewsItem[] | []
}

export const INITIAL_STATE: NewsState = {
  news: [],
  limit: 10,
  cachedNews: [],
}
