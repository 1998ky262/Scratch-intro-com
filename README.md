## イントロメーカーを支援するサイト
イントロの記事のサイトにしていくつもりです。
記事を書く人も集めようと思います。
## 開発者
開発者になったら、articleのフォルダに(name).htmlなどを作り記事を作成できます。
## デザイン
~~~HTML
<script src="../include.js"></script>
~~~
を入れることによってCSSでデザインを統一、自動的にヘッダーを追加できます！（一応、bodyの終了タグ直前に入れたほうが安全です。）  
入れるときはheadタグ内には、タイトルタグのみ挿入してください。styleタグを入れると反映されません。
## 記事を書く際
記事を書く際は、articleのフォルダ内の<strong><a href="https://github.com/1998ky262/Scratch-intro-com/blob/main/article/article-list.json">article-list.json</a></strong>に、
~~~
"記事の名前":{"id":"記事のhtmlファイルの.htmlを取った名前","tn":"記事のサムネイル画像のURL"},
~~~
と言う形式で、一番上に追加していってください。追加すれば自動的にホームに表示されます。  
画像URLを指定しない場合はNO IMAGEの画像に置き換えられます。
あと、記事を書くときに、画像をアップロードする際は、imagesのフォルダにアップロードしてください。（サムネイル画像は480x360じゃないと変に引き伸ばされたりする）
一番最後のところに、「@名前」とつけても大丈夫です（Sogattiさん案）
## 質問や進捗
質問や、進捗を報告する場合、
<strong><a href="https://github.com/1998ky262/Scratch.intro.com/issues/1">ここ</a></strong>にお願いします。
## お知らせ的なものを追加する場合
<strong><a href="https://github.com/1998ky262/Scratch-intro-com/blob/main/news.txt">news.txt</a></strong>に、
```
お知らせのテキスト,関連するリンク一つ,年/月/日
```
を一番上に挿入してください。

