import React, { useContext, useState ,useEffect} from "react";
import "./main.css";
import { assets } from "../../assests/assets";
import { Context } from "../../context/Context";
import Sidebar from "../Sidebar/sidebar";

const Main = () => {
  const [screenWidth,setScreenWidth] = useState(window.innerWidth)
  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input }=useContext(Context);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const Search = [
    {
      p: "Suggest a beautiful places to see on an upcoming road trip",
      img: assets.compass_icon,
    },
    {
      p: "Briefly summarize this concept : Urban Planning",
      img: assets.bulb_icon,
    },
    {
      p: "Brainstorm team bonding activities for our retreat",
      img: assets.message_icon,
    },
    {
      p: "Improve the readability of the following code ",
      img: assets.code_icon,
    },
  ];

  return (
    <div className="main">
      <div className="nav">
      {screenWidth <= 600 ? <p><img src={assets.menu_icon} alt="Menu" className="menu"/></p> : null}
        <p>Gemini</p>
        <img src={assets.user_icon}></img>
      </div>
      <div className="main-container">

        {!showResult ? 
        <>
             <div className="greet">
          <p>
            <span>Hello , Dev</span>
          </p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards" >
          {Search.map((item, index) => {
            return (
              <div className="card" key={index} onClick={()=>{onSent(item.p)}}>
                <p> {item.p}</p>
                <img src={item.img}></img>
              </div>
            );
          })}
        </div>

        </>
        : 
        <div className="result">
          <div className="result-title">
            <img src={assets.user_icon}></img>
            <p>{recentPrompt}</p>
          </div>
          <div className="result-data">
            <img src={assets.gemini_icon}></img>
            {
              loading
              ? <div className="loader">
                  <hr/>
                  <hr/>
                  <hr/>
              </div>
            :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
            }
          </div>
        </div>
        }
    
      <div className="main-bottom">
        <div className="search-box">
            <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="Enter a prompt here"/>
              <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
               {input ? <img onClick={()=>onSent()} src={assets.send_icon} alt="" /> : null} 
              </div>
        </div>
        <p className="bottomInfo">Gemini may display inaccurate info , including about people, so double-check it's response. Your privacy and Gemini App</p>
      </div>
    </div>
    </div>
  );
};

export default Main;



