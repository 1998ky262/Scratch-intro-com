var key="["+location.pathname.replace("Scratch-intro-com/article","").replace(/\//g,"")+"]";
var com1=document.createElement("p");
var com2;var com3;
    var commenth2=document.createElement("h2");
    commenth2.innerHTML="コメント";
    var main=document.createElement("main");
    main.innerHTML=`<a href="https://scratch.mit.edu/projects/749865423/">ここ</a>に ${key} を先頭につけてコメントしてください。なお、返信には付ける必要はありません。<br>Scratchのアカウントが必要です。ちなみにまだ試作段階なのでうまくいくかわかりません。`;
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
            
        content=content.replace(key,"");
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
         
        if(content.includes(key)){
            contains=true;
          }else{
            contains=false;
          }
          content=content.replace(key,"");
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
 
