const enterBtn=document.querySelector("#enterBtn");
const passcode=document.querySelector("#passcode");
const thisMessage=document.querySelector("#message");
const messageRef = firebase.database().ref();

const submitMessage = () =>{
    enterBtn.addEventListener('click',(e)=>{
        console.log("message "+thisMessage.value);
        console.log("passcode "+passcode.value);
        let countCap=0;
        let countNum=0
        for(let i=0;i<passcode.length;i++){
            if((passcode.value.charCodeAt(i)>=65)&&(passcode.value.charCodeAt(i)<=90))
            {
                countCap++;
            }else if((passcode.value.charCodeAt(i)>=48)&&(passcode.value.charCodeAt(i)<=57)){
                countNum++;
            }
        }
        if((countCap==0)&&(countNum==0)){
            //console.log("Make sure you have a capital letter AND a number in your passcode");
            alert("Make sure you have a capital letter AND a number in your passcode");
        }else if((countCap==0)||(countNum==0)){
            //console.log("You're missing either a capital letter or a number in your passcode");
            alert("You're missing either a capital letter or a number in your passcode");
        }else{
            messageRef.push({
            message: thisMessage.value,
            passcode: passcode.value
        })
        }
    })
//put code for write message in here
//needs to add it to the database
//change message and passcode to get whatever user types
//event handler for button  click or enter pressed
}
submitMessage();