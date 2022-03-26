// Create a functional component called MyMessage

const MyMessage = ({message}) => {
    //If an image length is greater than 0 then return image component
if(message.attachments.length > 0)
{
    return(
        <img
        src = {message.attachments[0].file}
        alt= "message-attachment"
        className= "message-image"
        style={{float: 'right'}}
        
        />
    );
}

//if it is not an image 
    return (
        <div className="message" style ={{float: 'right', marginRight:'18px', color:'white', background:'#3B2A50'}}>
            {message.text}
        </div>
    );

};

export default MyMessage;