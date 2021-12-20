function logo(){
    document.location.assign("AW_records.html");
}
function logostart(){
    document.location.assign("AW_records2.html");
}
function logomini(){
    document.location.assign("AW_records2.html");
}
function Beats(){
    gsap.to(".beatz", {duration:0.7,opacity:1, y:-440});
    gsap.to(".buttonz", {duration:1, opacity:0, y:-150});
}
function backB(){
    gsap.to(".beatz", {duration:0.7,opacity:0, y:0});
    gsap.to(".buttonz", {duration:0.7, opacity:1, y:0})
}
function backS(){
    gsap.to(".soundz", {duration:1.2,opacity:0, y:0});
    gsap.to(".buttonz", {duration:0.7, opacity:1, y:0})
}
function Voicerec(){
    gsap.to(".soundz", {duration:0.7,opacity:1, y:-1125});
    gsap.to(".buttonz", {duration:1.5, opacity:0, y:-150});
}
function backV(){
    gsap.to(".otherz", {duration:1.5,opacity:0, y:100});
    gsap.to(".buttonz", {duration:0.7, opacity:1, y:0})
}
function More(){
    gsap.to(".otherz", {duration:0.7,opacity:1, y:-1810});
    gsap.to(".buttonz", {duration:0.7, opacity:0, y:-150})
}
function backC(){
    gsap.to(".contactz", {duration:1.5,opacity:0, y:200});
    gsap.to(".buttonz", {duration:0.7, opacity:1, y:0})
}
function Contacts(){
    gsap.to(".contactz", {duration:0.7,opacity:1, y:-2490});
    gsap.to(".buttonz", {duration:0.7, opacity:0, y:-300})
}
function srsly(){
    document.location.assign("https://vk.com/srslybequiet");
}
function BMB(){
    document.location.assign("https://vk.com/thebloodmoonbeats")
}
function town(){
    document.location.assign("https://yandex.ru/profile/1091581754?no-distribution=1&source=wizbiz_new_map_single");
}
function trackrec(){
    document.location.assign("AW_shop.html")
}