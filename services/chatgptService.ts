import axios from "axios";

const API_URL = "https://api.openai.com/v1/engines/davinci-codex/completions";

const getChatGPTResponse = async (prompt: string) => {
  const response = await axios.post(
    API_URL,
    {
      prompt,
      max_tokens: 100,
      temperature: 0.7,
    },
    {
      headers: {
        Authorization: `YOUR_API_KEY`,
        "Content-Type": "application/json",
      },
    }
  );
  return response.data.choices[0].text.trim();
};

export default getChatGPTResponse;
