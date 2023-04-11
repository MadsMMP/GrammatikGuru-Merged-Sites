import axios from 'axios';

const openaiEndpoint = 'https://api.openai.com/v1/chat/completions';

export async function generateResponse(messages) {
  const apiKey = process.env.OPENAI_API_KEY;

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
  };

  const data = {
    model: 'gpt-3.5-turbo',
    messages: messages,
    max_tokens: 50,
    n: 1,
    stop: null,
    temperature: 0.8,
  };

  try {
    const response = await axios.post(openaiEndpoint, data, { headers: headers });
    const generatedText = response.data.choices[0].message.content.trim();
    return generatedText;
  } catch (error) {
    console.error('Error generating response:', error);
    return 'An error occurred while generating a response.';
  }
}
