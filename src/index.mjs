import "./styles.css";

//const onClickAdd = (e) => {
const onClickAdd = () => {
    //console.log(e);
    // テキストボックスの値を取得し、初期化する
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    // div生成
    const div = document.createElement("div");
    div.className = "list-row";
    
    // タグ生成
    const li = document.createElement("li");
    li.innerText = inputText;
    
    // divタグの子要素に各変数を設定
    div.appendChild(li);
    
    // 未完了のリストに追加
    document.getElementById("incomplete-list").appendChild(div);
}

//document.getElementById("add-button").addEventListener("click", (e) => onClickAdd(e));
document.getElementById("add-button").addEventListener("click", () => onClickAdd());
//↓こっちの書き方でもonClickAdd関数を呼び出せる
//document.getElementById("add-button").addEventListener("click", onClickAdd);