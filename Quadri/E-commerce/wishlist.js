let btn = document.getElementById('cart');
let modal = document.getElementById('modal');
let span = document.getElementsByClassName('close')[0];

btn.onclick = function(){
    modal.style.display= 'block';
}

span.onclick = function(){
    modal.style.display = 'none';
}