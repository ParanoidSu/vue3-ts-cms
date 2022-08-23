import { ILoginState } from './login/types'
import { ISystemState } from './main/system/type'
import { IOverviewState } from './main/analysis/type'

export interface IRootState {
  name: string
  age: number
  entireDepartment: any[]
  entirRole: any[]
}

export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
  overview: IOverviewState
}

export type IStoreType = IRootState & IRootWithModule
