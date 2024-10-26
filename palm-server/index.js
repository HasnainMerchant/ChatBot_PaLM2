require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "With additional words of your own Repeat after me: one, two,";

async function generateStory() {
    const result = await model.generateContent(prompt);
    console.log(result.response.text());   
}

generateStory();