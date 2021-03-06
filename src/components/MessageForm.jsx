// Create a funtional component called MessageForm
// logic to write and send a message

import { PictureOutlined, SendOutlined } from "@ant-design/icons";
import { useState } from "react"
import {sendMessage, isTyping} from 'react-chat-engine';



const MessageForm = (props) => {

  const  [value, setValue] = useState('');
  const {chatId, creds} = props;

  const handleChange = (event) => {
    setValue(event.target.value);

    isTyping(props, chatId);

};

const handleSubmit = (event) => 
{

    // prevents a browser refresh after submitting
    event.preventDefault();

    const text = value.trim();
    //if text length is greater than 0 sendMessage
    //sendMessage comes from react

    if(text.length > 0) sendMessage(creds, chatId, { text });

    setValue ('');

};



const handleUpload = (event) => {
    sendMessage(creds, chatId, { files: event.target.files, text: ''});

};


return(
    <form className = "message-form" onSubmit ={handleSubmit}>

        <input

            className = "message-input"
            placeholder = "Send a message..."
            value = {value}
            onChange= {handleChange}
            onSubmit = {handleSubmit}
        
        />

        <label htmlFor="upload-button">
            <span className ="image-button">
                <PictureOutlined className= "picture-icon"/>
            </span>

        </label>
        <input
        type = "file"
        multiple = {false}
        id = "upload-button"
        style = {{display: 'none'}}
        onChange = {handleUpload.bind(this)}
    
        
        />

        <button  type ="submit" className ="send-button" >
         <SendOutlined className="send-icon"/>

        </button>

        
        

    </form>

);
};

export default MessageForm;