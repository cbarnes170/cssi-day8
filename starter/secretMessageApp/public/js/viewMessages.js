/*const getMessages = () => {
    let attempts=0;
    let matches=0;
    const messagesRef = firebase.database().ref();
    messagesRef.on('value', (snapshot) =>{
        const data=snapshot.val();
        console.log(data);
        for(let key in data){
            const message = data[key];
            console.log(message);
            if(myPass == message.passcode){
                renderMessage(message);
                matches++;
            }
        }
        if(matches===0){
           alert("Your passcode didn't match any of the messages!");
            }
    })
}*/

const theMessage=document.querySelector("#message")
const renderMessage = (messageObj)=>{
    console.log(messageObj);
    theMessage.innerHTML=messageObj.message;
}

const findMessage = (myPass) => {
    const messagesRef = firebase.database().ref();
    messagesRef.on('value', (snapshot) =>{
        const data=snapshot.val();
        console.log(data);
        for(let key in data){
            const message = data[key];
            if(myPass == message.passcode){
                renderMessage(message);
            }
        }
    })
}

document.querySelector("#viewMsg").addEventListener("click",() =>{
    const passcode=document.querySelector("#passcode").value;
    findMessage(passcode);
})