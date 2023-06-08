import { IResponse } from 'main/types'
import { useResponseData } from 'renderer/store/useResponseData'

export default (...args: unknown[]) => {
  useResponseData.getState().setResponseData(args[0] as IResponse)
}
