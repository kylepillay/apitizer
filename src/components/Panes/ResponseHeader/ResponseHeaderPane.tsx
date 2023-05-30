import { AxiosResponse } from 'axios';
import React from 'react'

export default function ResponseHeaderPane({ response }: { response: AxiosResponse | undefined }) {
  const responseHeaders: { key: string; value: string }[] = []

  if (!(response == null)) {
    if (response && 'headers' in response) {
      Object.entries(response.headers).forEach(([key, value]) => {
        responseHeaders.push({
          key: key,
          value: value,
        })
      })
    }
  }
  const renderedHeaders = responseHeaders.map(({ key, value }) => {
    return (
      <tr key={key}>
        <td className='pb-1'>{key}</td>
        <td>{value}</td>
      </tr>
    )
  })
  return (
    <table className='text-left'>
      <thead>
        <tr>
          <th className='w-36 pb-1.5'>Key</th>
          <th className='w-60'>Value</th>
        </tr>
      </thead>
      <tbody>{renderedHeaders}</tbody>
    </table>
  )
}
