import { generateResponse } from '../../lib/openai';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const prompt = req.body.prompt;

    const responseText = await generateResponse([{ role: 'user', content: prompt }]);

    res.status(200).json({ response: responseText });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}