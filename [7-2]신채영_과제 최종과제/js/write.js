const dataList = [
    {
      "postId": 1,
      "title": "첫 편지",
      "content": "안뇽안뇽",
      "date": "2025.04.04"
    },
    {
      "postId": 2,
      "title": "🧡마음을 보내요🧡",
      "content": "내용내용",
      "date": "2025.04.07"
    },
    {
      "postId": 3,
      "title": "반가워~",
      "content": "나는 멋쟁이다",
      "date": "2025.04.06"
    },
    {
      "postId": 4,
      "title": "천재가 쓴 편지😎",
      "content": "난 왜 이렇게 똑똑할까",
      "date": "2025.04.04"
    },
    {
      "postId": 5,
      "title": "사자들아",
      "content": "파이팅",
      "date": "2025.04.10"
    },
    {
      "postId": 6,
      "title": "심바랑 친구할래",
      "content": "난 품바니까",
      "date": "2025.04.02"
    },
    {
      "postId": 7,
      "title": "저메추🤔",
      "content": "마라탕",
      "date": "2025.04.04"
    },
    {
      "postId": 8,
      "title": "아 배고파",
      "content": "붕어빵계란빵국화빵",
      "date": "2025.03.24"
    },
    {
      "postId": 9,
      "title": "슈퍼이끌림💌",
      "content": "유유유유",
      "date": "2025.04.08"
    },
    {
      "postId": 10,
      "title": "네잎클로버🍀",
      "content": "행운을 보냅니다",
      "date": "2025.04.01"
    }
  ];
  
function goBack(){
    window.location.href="../pages/main.html";
  }
function goWrite(){
    const title = document.getElementById("title");
    const content = document.getElementById("textarea");
    console.log("제목:",title.value);
    console.log("날짜: ",formattedDate)
    console.log("내용:",content.value);
    const post = {
      title: title,
      content: content,
      date: formattedDate
    };
    dataList.push(post);
    localStorage.setItem("dataList", JSON.stringify(dataList));
    document.getElementById("title").value="";
    document.getElementById("textarea").value="";
}
const today = new Date();
const formattedDate =`${today.getFullYear()}.${today.getMonth()+1}.${today.getDate()}`
const Datee = document.getElementById("date");
Datee.textContent=formattedDate;