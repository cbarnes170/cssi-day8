const enterBtn=document.querySelector("#enterBtn");
const passcode=document.querySelector("#passcode");
const thisMessage=document.querySelector("#message");
const messageRef = firebase.database().ref();

const submitMessage = () =>{
    enterBtn.addEventListener('click',(e)=>{
        console.log("message "+thisMessage.value);
        console.log("passcode "+passcode.value);
        let countCap=false;
        let countNum=false;
        for(let i=0;i<passcode.length;i++){
            if((passcode.value.charCodeAt(i)>=65)&&(passcode.value.charCodeAt(i)<=90))
            {
                countCap=true;
                break;
            }else if((passcode.value.charCodeAt(i)>=48)&&(passcode.value.charCodeAt(i)<=57)){
                countNum=true;
            }
        }
        if(countCap||countNum){
            messageRef.push({
            message: thisMessage.value,
            passcode: passcode.value
        })
        }else{
            //console.log("Make sure you have a capital letter AND a number in your passcode");
            alert("Make sure you have a capital letter OR a number in your passcode");
        }
    })
//put code for write message in here
//needs to add it to the database
//change message and passcode to get whatever user types
//event handler for button  click or enter pressed
}
submitMessage();