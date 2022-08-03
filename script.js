const btn = document.querySelector('button')
const inputs = document.querySelector('form')
btn.addEventListener('click',() => {
    Email.send({
        Host : "smtp.mailtrap.io",
        Username : "e91917c3ee5126",
        Password : "764d08378415bd",
        To : 'xyz123@gm.com',
        From :inputs.elements["email"].value,
        Subject : "This is the subject",
        Body :inputs.elements[message].value + "<br>" + inputs.elements["name"].value
    }).then(
      message => alert("Email is send successfully")
    );
})
