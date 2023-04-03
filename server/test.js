import { Configuration, OpenAIApi } from "openai";

const openAIConfig = new Configuration({
  apiKey: process.env.OPENAI_KEY
});

const openapi = new OpenAIApi(openAIConfig);

export const chatCompletion = async (req, res) => {
  try {
    const prompt = "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\n\nHuman: Hello, who are you?\nAI: I am an AI created by OpenAI. How can I help you today?\nHuman: ";

    const answer = await openapi.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: 0,
      max_tokens: 3000
    });

    const text = answer.data.choices[0].text;

    console.log(text)

    res.status(200).json({ text });
  } catch (err) {
    console.log(err)
  }
};

chatCompletion()