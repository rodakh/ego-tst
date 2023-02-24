const storedUser = localStorage.getItem('user')
const user = storedUser ? JSON.parse(storedUser) : null

export interface IUser {
  id: string
  name: string
  email: string
  avatar?: string
}

export interface UserState {
  user: IUser | null
}

export const INITIAL_STATE: UserState = {
  user: user,
}
