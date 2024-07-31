export interface LoginRequest {
  login_id: string
  password: string
}

export interface RegisterUserRequest {
  username: string
  email: string
  raw_password: string
  confirm_password: string
}
