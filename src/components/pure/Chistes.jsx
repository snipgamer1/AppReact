import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { DislikeOutlined, LikeOutlined } from '@ant-design/icons';
import { Button, Card, Space } from 'antd';

const baseURL = 'https://api.chucknorris.io/jokes/random';

const CardContainer = () => {
  const [quote, setQuote] = useState();
  const [positiveCount, setPositiveCount] = useState(0);
  const [negativeCount, setNegativeCount] = useState(0);

  useEffect(() => {});

  const refreshQuote = () => {
    axios
      .get(`${baseURL}`)
      .then((response) => {
        setQuote(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onCount = (setCounter, counter) => {
    setCounter(counter + 1);
    refreshQuote();
  };
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {quote ? (
        <Space><Card
          style={{
            width: 400,
            height: 400,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            padding: '20px',
          }}
          variant="outlined"
        >
          <img alt="Chuck Norris" src={quote.icon_url} />
          {quote.value}
          <div style={{ display: 'flex' }}>
            <div style={{ display: 'flex', flexDirection: 'column', margin: '5px', alignItems: 'center' }}>
            
            <Space><LikeOutlined color="success" onClick={() => onCount(setPositiveCount, positiveCount)} /></Space>
              {positiveCount}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', margin: '5px', alignItems: 'center' }}>
              {' '}
              <Space><DislikeOutlined  color="error" onClick={() => onCount(setNegativeCount, negativeCount)} /></Space>
              {negativeCount}
            </div>
          </div>
        </Card></Space>
      ) : (
        <Space><Button onClick={refreshQuote}>Start</Button></Space>
      )}
    </div>
  );
};

export default CardContainer;