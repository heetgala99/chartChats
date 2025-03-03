import React, { useState } from 'react';
import _ from 'lodash';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

import answers from './mock/answersData.json';
import chartData from './mock/stockData.json';

const App = () => {

  const [messages, setMessages] = useState([]);
  const [answerIndex, setAnswerIndex] = useState(0);

  const handleChatSubmit = (question = '') => {
    
    const newMessages = [...messages, { text: question, isUser: true }];
    setMessages(newMessages);
    
    setTimeout(() => {
      const answer = answers[answerIndex % answers.length];
      setMessages([...newMessages, { text: answer, isUser: false }]);
      setAnswerIndex(answerIndex + 1);
    }, 2000);
  };

  return (
    <div className='flex flex-row'>
      <div className={ messages.length > 0 ? 'basis-3/5' : 'basis-1/1' }>
        <LeftPanel
          handleSend={ handleChatSubmit }
          messages={ messages }
        />
      </div>
      {
        _.size(messages) > 0 && _.size(messages) % 2 === 0 &&
        (
          <div className='basis-2/5'>
            <RightPanel
              answer={ answers[(answerIndex - 1) % (answers.length)] }
              data={ chartData[(answerIndex - 1) % (answers.length)] }
            />
          </div>
        )
      }
    </div>
  )
}

export default App;
