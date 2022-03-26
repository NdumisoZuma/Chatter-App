//import the 3 components that will be used in the ChatFeed

import MessageForm from "./MessageForm";
import TheirMessage from "./TheirMessage";
import MyMessage from "./MyMessage";



// Create a Functional component called ChatFeed
const ChatFeed = (props) => {
//Structure properties that we will be using in our ChatFeed
const { chats, activeChat, userName, messages } = props;

// chat = if chats exists find chats and the activeChat
const chat = chats && chats[activeChat];

const renderReadReceipts = (message, isMyMessage) =>  chat.people.map((person, index) => person.last_read === message.id && (
    <div
        key={`read_${index}`}
        className = "read-receipt"
        style = {{
            float: isMyMessage? 'right':'left' ,
            backgroundImage: person.person.avatar && `url(${person.person.avatar})`,}}
    
    />
 
));
 




const renderMessages = () => {
    //fetch all messages.
    const keys = Object.keys(messages);


    return keys.map((key,index) => {

        const message = messages[key];
        //need to know if it was the last message sent
        //check if index is equal to zero
        // if there are messages make sure to find the last message
        const lastMessageKey = index === 0 ? null : keys[index - 1];
        //need too know if its my message
        //if username = message.sender.username
    
        const isMyMessage = userName === message.sender.userName;

        return (
            <div key={`msg_${index}`} style = {{width: '100%'}}>
                <div className ="message-block">
                    
                    {
                        //if isMyMessage render MyMessage component if it is not then render TheirMessage component
                        isMyMessage
                        ?<MyMessage message ={message}/>
                        :<TheirMessage message ={message} lastMessage = {messages[lastMessageKey]}/>
                    }

                </div>
                <div className= "read-receipts" style = {{marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px'}}>

                    {renderReadReceipts(message, isMyMessage)}

                </div>

            </div>
        );
    });
};
renderMessages();

if (!chat) return "Loading..."

return(
    <div className = "chat-feed"> 
        <div classname = "chat-title-container">
            <div className = "chat-title">{chat.title}</div>
            <div className="Chat-subtitle">
            {chat.people.map((person) => ` ${person.person.username}`)}
            </div>

        </div>

        {renderMessages()}
        <div style = {{height: '100px'}} />
        <div className = "message-form-container">
            <MessageForm {...props} chatId = {activeChat}/>
        </div>
    </div>
);
}


export default ChatFeed;