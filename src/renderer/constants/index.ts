import { v4 as uuidv4 } from 'uuid'
export const requestMethods = [
  {
    slug: 'get',
    method: 'GET',
  },
  {
    slug: 'post',
    method: 'POST',
  },
  {
    slug: 'put',
    method: 'PUT',
  },
  {
    slug: 'patch',
    method: 'PATCH',
  },
  {
    slug: 'delete',
    method: 'DELETE',
  },
]

export const defaultKeyValuePair = {
  id: uuidv4(),
  key: '',
  value: '',
}
