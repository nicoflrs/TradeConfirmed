import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import TradingData from './TradingData.jsx';
import ReturnButton from './ReturnButton.jsx'
import { fetchRecords } from './helpers/logInteractionMethods';

const Log = () => {
  const location = useLocation();
  console.log('location: ', location)
  let { user_id } = location?.state;
  const [result, setResult] = useState([]);
  console.log(result)
  // const activeUser = useRef(user_id)

  useEffect(() => {
    (async () => {
      // console.log('useeffect? ', user_id)
      const data = await fetchRecords(user_id)
      console.log('data: ', data)
      setResult(data);    
    })()
  }, []);

  return !result?.length
    ? (
      <div id="notrades">
        You have no trades logged.&nbsp;
        <ReturnButton />
      </div>
    )
    : (
      <div id="table">
        <table id="innerTable" border='1'>
          <thead>
            <tr>
              <th>Position</th>
              <th>Number of Contracts</th>
              <th>Strategy</th>
              <th>Date of BTO/STO</th>
              <th>Date of BTC/STC</th>
            </tr>
          </thead>
          <TradingData/>
        </table>
        <br />
        <ReturnButton />
      </div>
    );
};

export default Log;