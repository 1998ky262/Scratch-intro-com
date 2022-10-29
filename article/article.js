if(location.pathname=="/Scratch-intro-com/"){
	var key="";
}else{
	var key="["+location.pathname.replace("Scratch-intro-com/article","").replace(/\//g,"")+"]";
}
//key="";
var com1=document.createElement("p");
var com2;var com3;
    var commenth2=document.createElement("h2");
    commenth2.innerHTML="コメント";
    var main=document.createElement("main");
    main.innerHTML=`<a href="https://scratch.mit.edu/projects/749865423/">ここ</a>に<a id="comkey" style="cursor:pointer" title="クリックでコピー">${key}</a>を先頭につけてコメントしてください。また、<a id="all" style="cursor:pointer" title="クリックでコピー">[all]</a>を使うことですべての記事にコメントできます。なお、返信にはこれらのものは付ける必要はありません。<br>Scratchのアカウントが必要です。反映まで数時間かかります。<div style="opacity:0.8;display:inline">このコメント機能は<a href="https://yukkku.github.io/">yukkuさんのホームページ</a>を参考にyamaguchi03がオリジナルで作ったものです。</div>`;
    document.body.appendChild(commenth2);
    document.body.appendChild(main);
com1.innerHTML="<button>コメントを読み込む</button>";
document.body.appendChild(com1);
com1.onclick=function(){
	com1.remove();
  fetch("https://scratch.mit.edu/site-api/comments/project/749865423/")
  .then(response => response.text())
  .then(data => {
    var temp=document.createElement("div");
    temp.innerHTML=data;
    document.body.appendChild(temp);
    let hoge=document.getElementsByClassName("info").length;
    var commentArea=document.createElement("div");
    commentArea.class="comment-area"
    var contains=false;
    for(let i=0;i<hoge;i++){
        let htmlData=document.getElementsByClassName("info")[i];
        let name=htmlData.innerHTML.split("\n")[2].split(">")[1].replace("</a","");
        let content=htmlData.innerHTML.split("content")[1].replace("\">","").split("</div>")[0].replace(/<a/g,"<a class=\"commentmention\"");
        let imgsrc=htmlData.previousElementSibling.firstChild.src;
        
        var oneComment=document.createElement("div");
        if(content.split("\n")[2].includes("<a")){
            content=content.replace("/users","https://scratch.mit.edu/users")
            .replace("href","class=\"commentmention\" href");
            oneComment.class="reply";
            
        content=content.replace(key,"").replace("[all]","");
            oneComment.innerHTML=`
                <a href="https://scratch.mit.edu/users/${name}">
                <img src=${imgsrc} width="45" height="45" style="vertical-align:bottom;">
                </a><a href="https://scratch.mit.edu/users/${name}" class="commentmention">
                ${name}
                </a>
                <div class="comment">
                ${content}
                </div>
            `;
            
        oneComment.style="margin:10px;padding:5px;margin-left:50px;border-top:solid 1px gray;";
        
          
          if(contains){
        commentArea.appendChild(oneComment);
          }
        }else{
         
        if(content.includes(key)||content.includes("[all]")){
            contains=true;
          }else{
            contains=false;
          }
          content=content.replace(key,"").replace("[all]","");
            oneComment.class="top-level";
            oneComment.innerHTML=`
                <a href="https://scratch.mit.edu/users/${name}">
                <img src=${imgsrc} width="45" height="45" style="vertical-align:bottom;">
                </a><a href="https://scratch.mit.edu/users/${name}" class="commentmention">
                ${name}
                </a>
                <div class="comment">
                ${content}
                </div>
            `;
            
        oneComment.style="margin:10px;padding:5px;margin-left:0px;border-top:solid 1px gray;";
        if(contains){
        commentArea.appendChild(oneComment);
          }
        }
    }
    temp.remove();
    commentArea.style="margin:0 auto 0 auto;display:block;padding:10px;border-radius:10px;text-align:left;width:75%;line-height:30px;background-color:"
    document.body.appendChild(commentArea);
  });
  
  }
var comkey=document.getElementById("comkey");
comkey.onclick=function(){
	var element = document.createElement("textarea");
	element.value=key;
	document.body.appendChild(element);
	element.select();
	document.execCommand('copy');
	document.body.removeChild(element);
  alert("コピーしました。");
}
var all=document.getElementById("all");
all.onclick=function(){
	var element = document.createElement("textarea");
	element.value="[all]"
	document.body.appendChild(element);
	element.select();
	document.execCommand('copy');
	document.body.removeChild(element);
  alert("コピーしました。");
}
 
