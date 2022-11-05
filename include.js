const head = document.head;
head.insertAdjacentHTML('beforeend', `
<!--ここから-->
    <link rel="stylesheet" href="https://1998ky262.github.io/Scratch-intro-com/main.css">
	  <meta charset="utf-8"> 
	  <link rel="icon" href="">
<!--ここまでheadの内容-->
	  `);
window.addEventListener('DOMContentLoaded', function() {
  var header=document.createElement("div");
  header.innerHTML=`
  
  <!--ここから-->
<div class="n" style="position:relative;position:fixed">
<a href="https://1998ky262.github.io/Scratch-intro-com/" class="white">ホーム</a>
<a class="white" style="display:inline-block;position:absolute;right:10px;font-size:20px;cursor:pointer" id="sidebartoggle">News</a>
</div>

<!--ここまでヘッダーの内容-->
  `;
  var ele =document.body.firstChild;
  ele.before(header);
	if(location.href.includes("article")){
	var article=document.createElement("script");
	article.src="https://1998ky262.github.io/Scratch-intro-com/article/article.js";
	document.body.appendChild(article);
  }
  var newsbox=document.createElement("iframe");
  newsbox.src="https://1998ky262.github.io/Scratch-intro-com/news.html";
  newsbox.id="newsbox";
  document.body.before(newsbox);
  let newsbutton=document.getElementById("sidebartoggle");
  newsbutton.addEventListener("click",function(){
  	if(newsbox.style.visibility=="hidden"){
    	newsbox.style.visibility="visible";
    }else{
    	newsbox.style.visibility="hidden";
    }
  });


});
