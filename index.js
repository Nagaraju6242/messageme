var con = document.getElementById('content');

function create_msg(msg){
 var div = document.getElementById('msg');
 div.innerHTML = msg;
}

function sendmsg(){
            var request = new XMLHttpRequest();
            if(con.value == ""){
                create_msg("Please Fill the box.");
                con.focus();
            }
            else{
                request.open("POST" , "https://discord.com/api/webhooks/718644149519253564/y3zhETEPVPvH7XUiTrGF7mEcUbVQxK8t_7weje_qSPpRfYDNB5pIguFTBeul4zFeRwWp");
            request.setRequestHeader('content-type' , 'application/json');
            
            var params = {
                username : "Naga's Bot",
                avatar_url : "https://i.imgur.com/4M34hi2.png",
                content: con.value
//                "embeds": [{
//                "image": {
//                            "url": ""
//                        }
//                }]
                
            }
            
            request.send(JSON.stringify(params));
            con.value = "";
            create_msg("Message Sent Successfully!")
            }
        }    

document.body.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        sendmsg();
    }
    
    if(event.keyCode === 191){
        con.focus();
    }
})


