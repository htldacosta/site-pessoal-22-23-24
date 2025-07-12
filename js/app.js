const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = (/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/);

form.addEventListener('submit', (event) => {
    // event.preventDefault();
    nameValidate();
    emailValidate();
});

function setError(index){
    campos[index].style.border = '2px solid red';
    spans[index].style.display = 'block';
}

function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

function nameValidate(){
    if(campos[0].value.length < 2)
    {
        setError(0)
    }
    else
    {
        removeError(0)
    }
}

function emailValidate(){
    if(!emailRegex.test(campos[1].value))
    {
        setError(1);
    }
    else 
    {
        removeError(1);
    }
}