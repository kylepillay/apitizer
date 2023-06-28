import { RequestItem } from 'main/database/entity/RequestItem'
import { RequestTab, useApplicationData } from 'renderer/store/useApplicationData'

export default (...args: unknown[]) => {
  const newRequestTab: RequestTab = {
    id: (args[0] as RequestItem).id,
    name: (args[0] as RequestItem).name,
    url: (args[0] as RequestItem).url,
    method: (args[0] as RequestItem).method,
    body: (args[0] as RequestItem).body,
    headers: (args[0] as RequestItem).headers,
    queryParams: (args[0] as RequestItem).queryParams,
  }

  useApplicationData.getState().addNewRequest(newRequestTab)
}
