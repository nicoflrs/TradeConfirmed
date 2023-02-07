import React from 'react';
import { deleteRecord, updateRecord } from "./helpers/logInteractionMethods";

const TradingData = ({ result, setResult }) => {
  const arr = [];

  for (let i = 0; i < result.length; i++) {
    arr.push(
      [
        <tbody
          id={result[i]._id}
        >
          <td
            id='position'
            onClick={async (e) => {
              const results = await updateRecord(e)
              setResult(results)
            }}
          >{result[i].position}
          </td>
          <td
            id='numcontracts'
            onClick={async (e) => {
              const results = await updateRecord(e)
              setResult(results)
            }}
          >
            {result[i].numcontracts}
          </td>
          <td
            id='strategy'
            onClick={async (e) => {
              const results = await updateRecord(e)
              setResult(results)
            }}
          >
            {result[i].strategy}
          </td>
          <td
            id='datebtosto'
            onClick={async (e) => {
              const results = await updateRecord(e)
              setResult(results)
            }}
          >
            {result[i].datebtosto}
          </td>
          <td
            id='datebtcstc'
            onClick={async (e) => {
              const results = await updateRecord(e)
              setResult(results)
            }}
          >
            {result[i].datebtcstc}
          </td>
          <button
            class="btn"
            id={result[i]._id}
            onClick={async (e) => {
              const results = await deleteRecord(e)
              setResult(results)
            }}
          >delete
          </button>
        </tbody>]
    );
  };

  return (
    <>
      {arr}
    </>
  );
};

export default TradingData;