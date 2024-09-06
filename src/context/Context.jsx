// import React, { useState } from 'react'
// import { createContext } from 'react'
// import runChat from "../config/gemini"

// export const Context = createContext(); 

// const ContextProvider = (props)=>{

//     const [input,setInput]=useState("");
//     const [recentPrompt,setRecentPrompt]=useState("");
//     const [prevPrompts,setPrevPrompts] = useState([]);
//     const [showResult,setShowResult]= useState(false);
//     const [loading,setLoading]= useState(false);
//     const [resultData,setResultData] = useState("");
      
//     const onSent = async (prompt)=>{
//      await runChat(input);
//     }

//     // onSent("what is react js ");

// const contextValue = () => {
//     prevPrompts,
//     setPrevPrompts,
//     onSent,
//     setRecentPrompt,
//     recentPrompt,
//     showResult,
//     loading,
//     resultData,
//     input,
//     setInput
// }

//     return (
//     <Context.Provider value={contextValue}>
//         {props.children}
//     </Context.Provider>
//   );
// };

// export default ContextProvider;


// import React, { useState, createContext } from 'react';
// import runChat from "../config/gemini";

// export const Context = createContext();

// const ContextProvider = (props) => {
//   const [input, setInput] = useState("");
//   const [recentPrompt, setRecentPrompt] = useState("");
//   const [prevPrompts, setPrevPrompts] = useState([]);
//   const [showResult, setShowResult] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [resultData, setResultData] = useState("");

//   const delayPara = (index,nextWord)=>{

//   }

//   const onSent = async (prompt) => {
//     setResultData("")
//     setLoading(true)
//     setShowResult(true)
//     setRecentPrompt(input)
//     try {
//       setLoading(true); // Start loading
//       const response = await runChat(prompt || input); // Pass the prompt or input
//       setResultData(response); // Assuming result contains the desired response
//       setLoading(false)
//       setInput("")
//       //   setPrevPrompts([...prevPrompts, prompt || input]); // Add to previous prompts
//     //   setShowResult(true); // Show the result after receiving it
//     //   setRecentPrompt(prompt || input); // Update recent prompt
//       let responseArray = response.split('**');
//       let newResponse="";
//       for(let i = 0 ; i < responseArray.length ; i++){
//         if(i === 0 || i % 2 !== 1){
//             newResponse += responseArray[i];
//         }else{
//             newResponse += "<b>"+responseArray[i]+"</b>";
//         }
//       }    
      
// } catch (error) {
//       console.error("Error in onSent:", error);
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   const contextValue = {
//     prevPrompts,
//     setPrevPrompts,
//     onSent,
//     setRecentPrompt,
//     recentPrompt,
//     showResult,
//     loading,
//     resultData,
//     input,
//     setInput
//   };

//   return (
//     <Context.Provider value={contextValue}>
//       {props.children}
//     </Context.Provider>
//   );
// };

// export default ContextProvider;



// import React, { useState, createContext } from 'react';
// import runChat from "../config/gemini";

// export const Context = createContext();

// const ContextProvider = (props) => {
//   const [input, setInput] = useState("");
//   const [recentPrompt, setRecentPrompt] = useState("");
//   const [prevPrompts, setPrevPrompts] = useState([]);
//   const [showResult, setShowResult] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [resultData, setResultData] = useState("");

//   const delayPara = (index, nextWord) => {
//     // Placeholder for delay logic
//   };

//   const onSent = async (prompt) => {
//     setResultData("");
//     setLoading(true);
//     setShowResult(true);
//     setRecentPrompt(input);
//     try {
//       setLoading(true); // Start loading
//     const response = await runChat(prompt || input); // Pass the prompt or input
//      setResultData(response); // Assuming result contains the desired response
//       //setLoading(false);
//       //setInput("");

//       // Uncomment this to keep track of previous prompts
//       // setPrevPrompts([...prevPrompts, prompt || input]);
//       try{
//       let responseArray = response.split('**');
//       let newResponse = ""; // Initialize newResponse before using it
//       for (let i = 0; i < responseArray.length; i++) {
//         if ( i % 2 === 0) {
//           newResponse += responseArray[i];
//         } else {
//           newResponse += "<b>" + responseArray[i] + "</b>";
//         }
//       }
//     }catch(err){
//       console.log("error in formatting : ",err);
//     }
//       // Use newResponse if needed
//       // setResultData(newResponse);
//     } catch (error) {
//       console.error("Error in onSent:", error);
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   const contextValue = {
//     prevPrompts,
//     setPrevPrompts,
//     onSent,
//     setRecentPrompt,
//     recentPrompt,
//     showResult,
//     loading,
//     resultData,
//     input,
//     setInput
//   };

//   return (
//     <Context.Provider value={contextValue}>
//       {props.children}
//     </Context.Provider>
//   );
// };

// export default ContextProvider;


import React, { useState, createContext } from 'react';
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara = (index, nextWord) => {
    setTimeout(function(){
      setResultData(prev => prev + nextWord);
    },75*index) 
  };

  const newChat= ()=>{
    setLoading(false)
    setShowResult(false)
  }

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    let response; 
    if(prompt !== undefined){
      response = await runChat(prompt);
      setRecentPrompt(prompt) 
    }else{
      setPrevPrompts(prev=>[...prev,input])
      setRecentPrompt(input);
      response = await runChat(input)
    }


    try {
      const response = await runChat(prompt || input); 
      let responseArray = response.split('**');
      let newResponse = ""; 

      // Iterate through the responseArray and format it
      for (let i = 0; i < responseArray.length; i++) {
        if (i % 2 === 0) {
          newResponse += responseArray[i];
        } else {
          newResponse += "<b>" + responseArray[i] + "</b>";
        }
      }

      let newResponse2 = newResponse.split("*").join("</br>")
      let newResponseArray = newResponse2.split(" ");
      for (let i = 0 ; i < newResponseArray.length ; i++){
        const nextWord = newResponseArray[i];
        delayPara(i,nextWord+" ") 
      }
      // Update the resultData with the formatted response
      setResultData(newResponse);

      // Optionally, track previous prompts
      // setPrevPrompts([...prevPrompts, prompt || input]);

      // Clear the input field
      setInput("");

    } catch (error) {
      console.error("Error in onSent:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
