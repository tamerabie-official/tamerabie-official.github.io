let english=false;

function changeLang(){

const title=document.getElementById("title");
const subtitle=document.getElementById("subtitle");
const text=document.getElementById("text");


if(!english){

title.innerHTML="Hello, I am Tamer Rabie";

subtitle.innerHTML=
"Teacher | Content Creator | English Learning";


text.innerHTML=
"I create educational content to help people improve English language skills and digital learning.";


document.documentElement.lang="en";
document.body.dir="ltr";

english=true;


}else{


title.innerHTML="مرحباً أنا تامر ربيع";


subtitle.innerHTML=
"مدرس وصانع محتوى تعليمي";


text.innerHTML=
"أقدم محتوى تعليمي يساعد على تطوير اللغة الإنجليزية والتعلم الرقمي وصناعة المحتوى.";


document.documentElement.lang="ar";
document.body.dir="rtl";

english=false;


}

}



console.log("Tamer Rabie Website v2 Loaded");
let count=localStorage.getItem("visitors");

if(!count){

count=1;

}else{

count++;

}

localStorage.setItem("visitors",count);


document.getElementById("visitors").innerHTML=count;
let count = localStorage.getItem("visitors");

if(!count){

count = 1;

}else{

count++;

}

localStorage.setItem("visitors", count);


document.getElementById("visitors").innerHTML = count;
