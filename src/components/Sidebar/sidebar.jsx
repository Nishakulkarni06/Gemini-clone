import './sidebar.css';
import React, { useContext, useState } from 'react';
import { assets } from '../../assests/assets';
import ContextProvider, { Context } from '../../context/context';

const Sidebar = () => {
  const [extended, setExtended] = useState(false);

  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  const handleExtension = () => {
    setExtended(prevState => !prevState);
  };

  return (
    <div className='sidebar'>
      <div className="top">
        <img src={assets.menu_icon} alt="Menu" className="menu" onClick={handleExtension} />
        <div className="new-chat">
          <img src={assets.plus_icon} onClick={newChat} alt="New Chat" />
          {extended ? <p >New Chat</p> : null}
        </div>

        {extended ? 
          <div className="recent">
            <p className="recent-title">Recent</p>
           {
             (prevPrompts.length === 0 || !prevPrompts ) ? <p>No recent prompts</p>: 
            prevPrompts.map((item, index) => {
                return(
                <div onClick={()=>loadPrompt(item)}  className="recent-entry" key={index}>
                  <img src={assets.message_icon} alt="Message" />
                  <p>{item.slice(0,18)}...</p>
                </div>
                )
})
            }
          </div>
         : null}
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="Help" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="Activity" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="Settings" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;


