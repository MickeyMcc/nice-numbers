import React, { useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import { generateCode } from './helpers';
import RatingButtons from './RatingButtons';

const APIgatewayUrl = 'https://0gfhrjylgj.execute-api.us-east-1.amazonaws.com/dev';

const App = () => {

  const [code, setCode] = useState(generateCode(6));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const onRate = (rating) => {
    setIsSubmitting(true);
    console.log('code', code, 'rating', 'rating');
    // save value
    axios.post(`${APIgatewayUrl}/rating`, { rating, number: code })
    
    setCode(generateCode(6))
    setIsSubmitting(false);
  }
  
  return (
    <div className="App">
      <h2>Rate this number</h2>
      <h3>{code}</h3>
      <RatingButtons loading={isSubmitting} onRate={onRate} />
    </div>
  );
}

export default App;
