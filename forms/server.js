const form = document.querySelector("form");

const userName = document.querySelector('#name').value;
const subjectInfo = document.querySelector('#subject').value;
const email = document.querySelector('#email');
const messageInfo = document.querySelector('#message');
function emailSend(){
    let finalmessage = `Name : ${userName} <br>  Email : ${email} <br> Subject : ${subjectInfo} <br>Message : ${messageInfo} <br>`;
    console.log(finalmessage)

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "ataamanaty.kz@gmail.com",
        Password : "9995BA28ED90B0777EFB959E712051E64050",
        To : "ataamanaty.kz@gmail.com",
        From : "",
        Subject : "This is the subject",
        Body : finalmessage
    }).then(
        message => {
            if(message === 'OK'){
                swal("Удачно!", "You clicked the button!", "success");
            }
            else{
                swal("Error", "You clicked the button!", "error");
            }
        }

    );
}

// form.addEventListener('submit', e => {
//     e.preventDefault();
//
//     emailSend();
// });