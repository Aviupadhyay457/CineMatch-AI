import dotenv from "dotenv";
dotenv.config()


import { HfInference } from '@huggingface/inference'
const hf = new HfInference(process.env.HF_API_KEY)


const devPrompt=`
You are an Movie recommender assistant that receives a list of instructions or preferences that a user has and suggests at least 3 could be more 
movies to them which they can watch based on all the instructions.
If the user has entered ambiguous preferences, inform them about it and from yourself recommend the closest thing you could.
Try to stay true to the preferences but you can add or remove some of their preferences on your own if needed for better response,
but tell them about it . And be friendly and warm rather than robotic.
Format your response in markdown to make it easier to render to a web page
`


export async function handler(event) {
    const inputArr=JSON.parse(event.body)
    const inputStr=inputArr.join(" , ")


    const response = await hf.chatCompletion({
        model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
        messages: [
            { role: "system", content: devPrompt },
            { role: "user", content: `suggest movies which should meet the following criteria:${inputStr}` },
        ],
        max_tokens: 1024,
        })
        return {
        statusCode: 200,                    
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(response),      
        };
    // return response.choices[0].message.content
}