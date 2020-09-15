var con = document.getElementById("content");
var nam = document.getElementById("name");
var text = document.querySelector(".text");
var ur = document.querySelector(".url");

function create_msg(msg) {
  text.innerHTML = msg;
  text.style.opacity = 1;
}

function sendmsg() {
  var request = new XMLHttpRequest();
  if (con.value == "") {
    create_msg("Please Fill in the message");
    con.focus();
  }
  if (nam.value == "") {
    create_msg("Please Fill in the Name");
    nam.focus();
  }
  if (con.value != "" && nam.value != "") {
    request.open(
      "POST",
      "https://discord.com/api/webhooks/718644149519253564/y3zhETEPVPvH7XUiTrGF7mEcUbVQxK8t_7weje_qSPpRfYDNB5pIguFTBeul4zFeRwWp"
    );
    request.setRequestHeader("content-type", "application/json");

    var params = {
      username: nam.value,
      avatar_url: "https://i.imgur.com/4M34hi2.png",
      content: con.value,
      embeds: [
        {
          image: {
            url: ur.value,
          },
        },
      ],
    };

    request.send(JSON.stringify(params));
    con.value = "";
    nam.value = "";
    ur.value = "";
    create_msg("Message Sent Successfully!");
  }
}

document.body.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    sendmsg();
  }

  if (event.keyCode === 191) {
    con.focus();
  }
});
