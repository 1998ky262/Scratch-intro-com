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
<div class="n">
<a href="https://1998ky262.github.io/Scratch-intro-com/" class="white">ホーム</a>
</div>
<!--ここまでヘッダーの内容-->
  `
  var ele =document.body.firstChild;
  ele.before(header);
	var article=document.createElement("script");
	article.src="https://1998ky262.github.io/Scratch-intro-com/article/article.js";
	document.body.appendChild(article);

});

