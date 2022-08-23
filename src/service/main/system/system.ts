import JlRequest from '@/service'
import { IDataType } from '@/service/types'

export function getPgaeListData(url: string, queryInfo: any) {
  return JlRequest.post<IDataType>({
    url,
    data: queryInfo
  })
}

export function deletePageListDate(url: string) {
  return JlRequest.delete<IDataType>({
    url
  })
}

export function editPageListDate(url: string, editData: any) {
  return JlRequest.post<IDataType>({
    url,
    data: editData
  })
}

export function newPageListDate(url: string, newData: any) {
  return JlRequest.patch<IDataType>({
    url,
    data: newData
  })
}
