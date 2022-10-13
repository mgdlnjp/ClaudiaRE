// -------------- emailJS --------------

let Button = document.getElementById('button');
let Form = document.getElementById('form');

function sendMail(){

  document.getElementById('form').addEventListener('submit', function(event) {

    event.preventDefault();
    Button.innerText = "Message Sent!";

    emailjs.sendForm('jp_email', 'claudia_template', '#form')
    .then(
      
      function() {

        // console.log('SUCCESS!');
        // setInterval(() => Form.reset(), 2000);
        // setInterval(() => Button.value = "Envoyer Message", 2000);
        setInterval(() => window.location.reload(true), 2000);

      }, 

      function(error) {

        console.log('FAILED...', error);
          
      }

    );

  });
}