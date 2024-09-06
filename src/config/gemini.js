/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

// import {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,
// } from "@google/generative-ai"

// Use import.meta.env to access the environment variable in Vite
// const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
// const MODEL_NAME = "gemini-1.0-pro";
// const API_KEY = "AIzaSyC-WqQLC7qEI6cK7687cry7MsDSXPNHjLc";

// async function runChat(prompt){
//   const genAI = new GoogleGenerativeAI(API_KEY);
//   const model = genAI.getGenerativeModel({model:MODEL_NAME});


// const generateConfig={
//   temperature:0.9,
//   topK:1,
//   topP:1,
//   maxOutputTokens:2048,
// }; 

// const safetySettings =[
//   {
//     category:HarmCategory.HARM_CATEGORY_HARASSMENT,
//     threshold:HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//   }, 
//   {
//     category:HarmCategory.HARM_CATEGORY_HATE_SPEECH,
//     threshold:HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  // }, 
//   {
//     category:HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
//     threshold:HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//   }, 
//   {
//     category:HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
//     threshold:HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//   }, 
// ];

// const chat = model.startChat({
//   generateConfig,
//   safetySettings,
//   history:[],
// }); 

// const result = await chat.sendMessage("prompt");
// const reponse = result.response;
// console.log(reponse.text());
// }

// export default runChat; 
// Ensure you pass the API key correctly
// const genAI = new GoogleGenerativeAI({
//   apiKey:"AIzaSyC-WqQLC7qEI6cK7687cry7MsDSXPNHjLc" ,
// });

// const model = genAI.getGenerativeModel({
//   model: "gemini-1.5-flash",
// });

// const generationConfig = {
//   temperature: 1,
//   topP: 0.95,
//   topK: 64,
//   maxOutputTokens: 8192,
//   responseMimeType: "text/plain",
// };

// async function run(prompt) {
//   const chatSession = model.startChat({
//     generationConfig,
//     history: [],
//   });

//   const result = await chatSession.sendMessage(prompt);
//   console.log(result.response.text());
// }
// export default run;

// import {
//   GoogleGenerativeAI,
//   HarmCategory,
//   HarmBlockThreshold,
// } from "@google/generative-ai";

// // const MODEL_NAME = "";
// const MODEL_NAME = "gemini-1.0-pro"; // Be consistent with the model
// const API_KEY = import.meta.env.VITE_GEMINI_API_KEY; // Make sure this is correctly set in your .env file

// async function runChat(prompt) {
//   try {
//     const genAI = new GoogleGenerativeAI({ apiKey: API_KEY });
//     const model = genAI.getGenerativeModel({ model: MODEL_NAME });

//     const generateConfig = {
//       temperature: 0.9,
//       topK: 1,
//       topP: 1,
//       maxOutputTokens: 2048,
//     };

//     const safetySettings = [
//       {
//         category: HarmCategory.HARM_CATEGORY_HARASSMENT,
//         threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//       },
//       {
//         category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
//         threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//       },
//       {
//         category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
//         threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//       },
//       {
//         category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
//         threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//       },
//     ];

//     const chat = model.startChat({
//       generateConfig,
//       safetySettings,
//       history: [],
//     });

//     const result = await chat.sendMessage(prompt);
//     const response = result.response;

//     console.log(response.text());
//   } catch (error) {
//     console.error("Error during chat:", error);
//   }
// }

// const API_KEY="AIzaSyC-WqQLC7qEI6cK7687cry7MsDSXPNHjLc";
// const API_URL =`https://generativelanguage.googleapis.com/vl/models/gemini-pro:generateContent?Key=${API_KEY}`;


// const runChat = async ()=>{
//   try{
//     const response = await fetch(API_URL,{
//        method:"POST",
//        mode:'no-cors',
//        headers:{"Content-Type":"application/json"},
//        body:JSON.stringify({
//         contents:[{
//           role:"user",
//           parts:[{text:"hello"}]
//         }]
//       })
//        });
//        const data = await response.json();
//         console.log(data);
//   } catch(error){
//     console.log(error);
//   }
// }
// export default runChat;


// const API_KEY = "AIzaSyC-WqQLC7qEI6cK7687cry7MsDSXPNHjLc";
// const API_URL = `https://generativelanguage.googleapis.com/v1beta2/models/gemini-pro:generateText?key=${API_KEY}
// `
// const runChat = async () => {
//   try {
//     const response = await fetch(API_URL, {
//       method: "POST",
//       headers: {
//         "Authorization": `Bearer ${API_KEY}`,
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         prompt: {
//           text: "Hello! How are you?"
//         }
//       })
//     });

//     if (!response.ok) {
//       throw new Error(`Error: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log("Response from Gemini API:", data);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };

// const API_KEY = "AIzaSyC-WqQLC7qEI6cK7687cry7MsDSXPNHjLc";
// const API_URL = `https://generativelanguage.googleapis.com/v1beta2/models/gemini-pro:generateText?key=${API_KEY}`;

// const runChat = async () => {
//   try {
//     const response = await fetch(API_URL, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         prompt: {
//           text: "Hello! How are you?"
//         }
//       })
//     });

//     if (!response.ok) {
//       const errorText = await response.text(); // Get the error message from response
//       throw new Error(`Error ${response.status}: ${errorText}`);
//     }

//     const data = await response.json();
//     console.log("Response from Gemini API:", data);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };


//  export default runChat;



/**
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

// Insert your API key directly
const apiKey = "AIzaSyAy5DTjTEDivhWktKD6ncvpMqbTqUNdAFo";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

// async function runChat(prompt) {
//   const chatSession = model.startChat({
//     generationConfig,
//     // Safety settings: Adjust safety settings
//     // See https://ai.google.dev/gemini-api/docs/safety-settings
//     history: [],
//   });

//   const result = await chatSession.sendMessage(prompt);
//   console.log(result.response.text());
//   return response.text();
// }

// export default runChat;


async function runChat(prompt) {
  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const result = await chatSession.sendMessage(prompt); // Await the API result
    console.log(result.response.text()); // Log the response text
    return result.response.text(); // Return the response text
  } catch (error) {
    console.error("Error in runChat:", error); // Handle any potential errors
    throw error; // Rethrow the error to handle it in the caller
  }
}

export default runChat;
