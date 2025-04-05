// /api/chat.js
export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).end();
  
    const { question } = req.body;
  
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: question }],
        }),
      });
  
      const data = await response.json();
      res.status(200).json({ answer: data.choices[0].message.content });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to fetch answer." });
    }
  }
  