// Zahir was here
// https://www.youtube.com/watch?v=GnFH9Eg-OuM - website itself
// https://www.youtube.com/watch?v=b3Gqq_k-g24 - ecommerce website
// https://www.youtube.com/watch?v=MrkBSMdevB4 - dropdown list
const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
}



