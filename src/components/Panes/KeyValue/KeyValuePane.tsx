import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import KeyValueEditor from './KeyValueEditor';

export default function KeyValuePane({ paneValue, setPaneValue }: any) {
  const onKeyPairAdd = () => {
    setPaneValue((paneValue: any) => [
      ...paneValue,
      {
        id: uuidv4(),
        keyItem: '',
        valueItem: '',
      },
    ]);
  };

  const onKeyPairRemove = (keyPair: any) => {
    let newKeyValues = [...paneValue];
    newKeyValues = newKeyValues.filter((x) => x.id !== keyPair.id);
    setPaneValue(newKeyValues);
  };

  const onKeyPairUpdate = (keyPair: any) => {
    const elementIndex = paneValue.findIndex(
      (element: any) => element.id === keyPair.id
    );
    let newKeyValues = [...paneValue];
    newKeyValues[elementIndex] = {
      ...newKeyValues[elementIndex],
      keyItem: keyPair.keyItem,
      valueItem: keyPair.valueItem,
    };
    setPaneValue(newKeyValues);
  };

  const renderedList = paneValue.map((keyPair: any) => {
    return (
      <KeyValueEditor
        key={keyPair.id}
        keyPair={keyPair}
        setKeyPair={(keyPairValue: any) => onKeyPairUpdate(keyPairValue)}
        onKeyPairRemove={() => onKeyPairRemove(keyPair)}
      />
    );
  });

  return (
    <>
    <div className=''>
      {renderedList}
      <button 
        className="px-6 py-1 rounded-md text-sky-800 border border-sky-600 hover:bg-sky-200"
        onClick={() => onKeyPairAdd()}>Add</button>
        </div>
    </>
  );
}
