import JlRequest from '..'
import { IAccount, ILoginResult } from './types'
import { IDataType } from '../types'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInFO = '/id',
  UserMeuns = '/role'
}

export function accountLoginRequest(account: IAccount) {
  return JlRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return JlRequest.get<IDataType>({
    url: LoginAPI.LoginUserInFO + id,
    showLoading: false
  })
}

export function requestUserMenusByRoleId(id: number) {
  return JlRequest.get<IDataType>({
    url: LoginAPI.UserMeuns + id + '/menu',
    showLoading: false
  })
}
