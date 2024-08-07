import axiosInstance from './axiosInstance'
import { ApiResponse } from './commonTypes'
import { LoginRequest, RegisterUserRequest } from './userTypes'

export const loginUser = async (data: LoginRequest) => {
  const response = await axiosInstance.post<ApiResponse<any>>(
    '/user/login-user',
    data
  )
  return response
}

export const registerUser = async (data: RegisterUserRequest) => {
  const response = await axiosInstance.post<ApiResponse<any>>(
    '/user/register-user',
    data
  )
  return response
}

export const getUserAccountList = async () => {
  const response = await axiosInstance.get<ApiResponse<any>>(
    '/user/get-user-account-list'
  )
  return response
}
