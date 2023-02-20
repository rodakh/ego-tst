import avatar from 'assets/images/avatar.png'

export const MOCKED_USER = {
  id: crypto.randomUUID(),
  name: 'John Doe',
  email: 'john.doe@email.com',
  avatar: avatar,
}

export const MOCKED_USER_CREDS = {
  login: 'admin',
  password: '12345',
}
