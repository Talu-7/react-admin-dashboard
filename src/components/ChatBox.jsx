import React, { useState } from 'react';

const ChatBox = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const askGPT = async () => {
    if (!question.trim()) return;
    setLoading(true);
    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-4',
          messages: [
            { role: 'system', content: 'You are a helpful and friendly A-level maths tutor.' },
            { role: 'user', content: question },
          ],
        }),
      });

      const data = await res.json();
      const answer = data.choices?.[0]?.message?.content || 'Sorry, no answer found.';
      setResponse(answer);
    } catch (error) {
      setResponse('Error contacting AI tutor. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 border rounded-lg shadow-lg bg-white">
      <h2 className="text-xl font-bold mb-4">Ask your AI Maths Tutor</h2>
      <textarea
        rows="4"
        className="w-full p-2 border rounded"
        placeholder="Type your A-level maths question here..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button
        onClick={askGPT}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? 'Thinking...' : 'Ask'}
      </button>
      {response && (
        <div className="mt-4 p-3 bg-gray-100 border rounded">
          <strong>AI says:</strong>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
