import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios, { AxiosRequestConfig } from 'axios';
import { convertKeyValueToObject } from '../../../utils/helpers';
import UrlEditor from '../../Panes/RequestUrl/UrlEditor';
import RequestTabGroup from '../../Tab-Groups/RequestTabGroup';

export const keyPairInitState = [
  {
    id: uuidv4(),
    keyItem: '',
    valueItem: '',
  },
];

export default function Request({ setResponse, setLoading, loading }: { setResponse: React.Dispatch<React.SetStateAction<any>>, setLoading: React.Dispatch<React.SetStateAction<boolean>>, loading: boolean }) {
  const [url, setUrl] = useState(
    'https://jsonplaceholder.typicode.com/todos/1'
  );
  const [reqMethod, setReqMethod] = useState('GET');
  const [queryParams, setQueryParams] = useState<typeof keyPairInitState>(keyPairInitState);
  const [headers, setHeaders] = useState<typeof keyPairInitState>(keyPairInitState);
  const [body, setBody] = useState('{\n\t\n}');

  const handleOnInputSend = async (e: any) => {
    setLoading(true);

    e.preventDefault();
    const requestBody = body.toString();
    console.log('http method', reqMethod);
    console.log('headers', headers);
    console.log('query params ', queryParams);
    console.log('body ', requestBody);

    let data: any;
    try {
      data = JSON.parse(requestBody);
    } catch (e) {
      alert('Something is wrong with the JSON data.');
    }

    try {
      const response = await axios({
        url: url,
        method: reqMethod,
        params: convertKeyValueToObject(queryParams),
        headers: convertKeyValueToObject(headers),
        data,
      } as AxiosRequestConfig);

      setResponse(response);
    } catch (e) {
      console.log(e);
      setResponse(e);
    }

    setLoading(false);
  };
  return (
    <>
      <UrlEditor
        url={url}
        setUrl={setUrl}
        reqMethod={reqMethod}
        setReqMethod={setReqMethod}
        onInputSend={handleOnInputSend}
      />
      <RequestTabGroup
        queryParams={queryParams}
        setQueryParams={setQueryParams}
        headers={headers}
        setHeaders={setHeaders}
        body={'{\n\t\n}'}
        setBody={setBody}
      />
    </>
  );
}
