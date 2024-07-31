import axiosInstance from './axiosInstance'
import { ApiResponse } from './commonTypes'
import { LoginRequest, RegisterUserRequest } from './userTypes'

export const loginUser = async (data: LoginRequest) => {
  const response = await axiosInstance.post('/user/login-user', data)
  return response
}

export const registerUser = async (data: RegisterUserRequest) => {
  const response = await axiosInstance.post('/user/register-user', data)
  return response
}
