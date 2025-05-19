function goBack(){
    window.location.href="../pages/main.html";
  }
function goWrite(){
    const title = document.getElementById("title");
    const content = document.getElementById("textarea");
    console.log("제목:",title.value);
    console.log("날짜: ",formattedDate)
    console.log("내용:",content.value);
}
const today = new Date();
const formattedDate =`${today.getFullYear()}.${today.getMonth()+1}.${today.getDate()}`
