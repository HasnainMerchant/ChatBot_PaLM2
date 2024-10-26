require('dotenv').config();

//Create an express server
const express = require('express');
const app = express();
app.listen(3333, () => console.log('Server Running On Port: 3333'));


const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

var answer = null;
const prompt = "With additional words of your own Repeat after me: one, two,";


app.get('/api', (req, res) => {
    async function generateStory() {
        const result = await model.generateContent(prompt);
        answer = result.response.text();
        res.json(answer);
    }
    generateStory();
});