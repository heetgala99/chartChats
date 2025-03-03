import React, { useState, useEffect } from 'react';
import _ from 'lodash';

const LeftPanel = (props = {}) => {
  const {
    messages = []
  } = props;

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOnSubmit = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setInput("");

    props.handleSend(input);
  };

  useEffect(() => {
    if (_.size(messages) % 2 == 0) {
      setLoading(false);
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-screen bg-stone-100 border-r border-gray-300">
      {messages.length === 0 ? (
        <div className="flex flex-col items-center justify-center flex-1 p-4">
          <h1 className="text-xl font-bold text-gray-600 mb-8">Ask Charts to me</h1>
          <div className="w-3/4 relative bg-gray-200 rounded-lg p-6 border">
            <textarea
              className="w-full h-40 p-4 bg-gray-100 text-gray-900 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black resize-none"
              placeholder="Ask something..."
              value={ input }
              onChange={ (e) => setInput(e.target.value) }
            />
            <button
              className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-2 px-4 rounded-lg absolute right-10 bottom-10 border"
              onClick={ handleOnSubmit }
            >
              { loading ? "Generating your answer ...." : "Submit" }
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex-1 overflow-y-auto p-4">
            <div className="w-[85%] h-100% mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-xl">
                {
                  _.map(messages, (msg, index) => (
                    <div
                      key={ index }
                      className={ `flex ${ msg.isUser ? "justify-end" : "justify-start" } mb-4` }
                    >
                      <div
                        className={`p-4 rounded-lg max-w-xl ${ msg.isUser ? "bg-gray-200 text-gray-900" : "bg-gray-200 text-gray-900" }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))
                }
                {
                  loading && (
                    <div className="flex justify-start mb-4">
                      <div className="p-4 rounded-lg bg-gray-700 text-purple-100 animate-pulse">...</div>
                    </div>
                  )
                }
              </div>
            </div>
          </div>
          <div className="w-[85%] mx-auto relative">
            <textarea
              className="w-full h-16 max-h-[200px] p-5 pr-30 bg-gray-100 border text-black rounded-lg focus:outline-none focus:ring-1 focus:ring-black resize-none overflow-y-auto"
              placeholder="Ask something..."
              value={ input }
              onChange={ (e) => setInput(e.target.value) }
            />
            <button
              className="absolute right-4 top-2 bg-gray-200 border border-gray-500 hover:bg-gray-300 text-gray-900 font-bold py-2 px-4 rounded-lg"
              onClick={ handleOnSubmit }
            >
              Submit
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default LeftPanel;