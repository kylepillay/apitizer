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

export const getEmptyRequestTabObject = () => ({
  id: 1000 + Math.floor(Math.random() * 1000),
  name: 'New Request',
  url: 'https://jsonplaceholder.typicode.com/todos/1',
  method: 'GET',
  body: '',
  headers: [
    {
      id: 1000 + Math.floor(Math.random() * 1000),
      key: 'Content-Type',
      value: 'application/json',
    },
  ],
  queryParams: [
    {
      id: 1000 + Math.floor(Math.random() * 1000),
      key: 'name',
      value: 'kyle',
    },
  ],
  response: {
    requestId: 0,
    status: 0,
    statusText: '',
    ok: false,
    redirected: false,
    type: '',
    url: '',
    body: '',
    text: '',
    headers: {},
  },
})
