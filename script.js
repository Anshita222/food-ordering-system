let menu = document.querySelector('#menu');
let navbar= document.querySelector('.navbar');

menu.onclick =  f;
function f() {


    menu.classList.toggle('fa fa-times');
    navbar.classList.toggle('active');
    if(window.scrollY>60){
        document.querySelector('#scroll-top').classList.add('active');

    } else{
        document.querySelector('#scroll-top').classList.remove('active');

    }
}
function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}
function fadeOut()
{
    setInterval(loader,3000);

}
window.onload=fadeOut();
