let english = false;

function changeLang(){

const title = document.querySelector("h1");
const subtitle = document.getElementById("subtitle");
const text = document.getElementById("text");

if(!english){

title.innerHTML = "Hello, I am Tamer Rabie";

subtitle.innerHTML =
"Teacher | Content Creator | English Learning";

text.innerHTML =
"I create educational content to help people improve English language skills and digital learning.";

document.body.dir="ltr";

english=true;

}else{

title.innerHTML = "مرحباً أنا تامر ربيع";

subtitle.innerHTML =
"مدرس وصانع محتوى تعليمي";

text.innerHTML =
"أقدم محتوى تعليمي يساعد على تطوير اللغة الإنجليزية والتعلم الرقمي وصناعة المحتوى.";

document.body.dir="rtl";

english=false;

}

}
