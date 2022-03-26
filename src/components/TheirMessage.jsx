// Create a functional component called TheirMessage 

const TheirMessage = ({lastMessage, message}) => {
    // This line will tell us if this is the first message by the user
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;


    return(
        <div className ="message-row">
            {isFirstMessageByUser && (
                <div
                className = "message-avatar"
                style = {{backgroundImage: message.sender && `url(${message.sender.avatar})`}}
                />
            )}

            

            {
                //if the message is an image 
                (message.attachments && message.attachments.length > 0)
                
                    ?(
                        <img
                        src ={message.attachments[0].file}
                        alt="message-attachment"
                        className= "message-image"
                        style={{marginLeft: isFirstMessageByUser ? '4px' : '48px'}}
                        
                        />
                    ) : (
                        // if the message is text
                            <div className="message" style ={{ float: 'left', backgroundColor:'#CABCDC', marginLeft: isFirstMessageByUser ? '4px' : '48px'}}>
                                {message.text}
                            </div>        
                    )
                
            }
        </div>
    );
};

export default TheirMessage;