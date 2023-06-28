import { IResponse } from 'types'
import { useApplicationData } from 'renderer/store/useApplicationData'

export default (...args: unknown[]) => {
  useApplicationData.getState().setRequestInProgress(false)
  if ((args[0] as IResponse).error) {
    console.log((args[0] as IResponse).error)
  } else {
    useApplicationData.getState().onChangeResponse(args[0] as IResponse)
  }
}
