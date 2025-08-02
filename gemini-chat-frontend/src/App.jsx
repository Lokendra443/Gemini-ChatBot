import React, { useState } from 'react'
import ChatInput from './components/ChatInput'
import ChatResponse from './components/ChatResponse'
import { fetchChatResponse } from './services/api';

const App = () => {

  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleQuestionSubmit = async (question) => {
    setLoading(true);
    setResponse(null);

    try {
      const apiResponse = await fetchChatResponse(question);
      setResponse(apiResponse);

      
    } catch (error) {
      alert("Failed to get respone");
    } finally {
      setLoading(false);
    }
  }

  


  return (
    <div className='App'>
      <header className='bg-primary text-white text-center py-5'>
        <h1>Gemini ChatBot</h1>
      </header>

      <ChatInput onSubmit={handleQuestionSubmit}/>
      {loading && <div className='text-center my-4'>Loading...</div>}
      <ChatResponse response={response} />     
    </div>
  )
}

export default App
