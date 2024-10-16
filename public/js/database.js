// 1. 파베 설정(동우 정보로 변경하기, 
// 파베 콘솔 > 왼쪽 메뉴 상단 "프로젝트 개요" > "<> 모양 웹" 앱 만들기 클릭 후 나오는 설정 복사)
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
  };
  
  // 2. 파베 및 디비 초기화 선언
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  const articleRef = database.ref('article');
  
  // 3. 모든 게시물 목록 조회
  getAllArticleList();
  
  
  /**
   * @함수영역
   * submit : 게시글 작성 버튼 클릭시 호출
   * writeArticle(title, content, createdAt) : 아티클 디비에 저장
   * getAllArticleList : 모든 아티클 목록 가져온 후 화면에 노출
   * setArticleContent(title, content, createdAt) : 아티클 html 생성
   * refreshArticleContent() : 아티클 초기화
   * getCurrentTime : 현재 시간 리턴
   **/
  
  // "작성" 버튼 클릭시 호출 함수
  function submit(){
    const titleElement = document.getElementById('title');
    const contentElement = document.getElementById('content');
    
    const title = titleElement.value;
    const content = contentElement.value;
    const createdAt = getCurrentTime();
    
    // 아티클 저장
    writeArticle(title, content, createdAt);
    
    // 저장 후 초기화
    titleElement.value = "";
    contentElement.value = "";
  }
  
  // 게시글 저장 함수
  function writeArticle(title, content, createdAt) {
    let articleNo = 1;
    // 게시글 번호 조회, 없으면 1
    articleRef.on('value', (snapshot) => {
      if(snapshot.exists()){
        articleNo = snapshot.val().length;
      }
    });
  
    database.ref(`article/${articleNo}`).set({
      no : articleNo,
      title: title,
      content: content,
      createdAt : createdAt
    });
  }
  
  // 게시글 전체 조회 함수
  function getAllArticleList() {
    articleRef.on('value', (snapshot) => {
      refreshArticleContent();
      snapshot.val().reverse().forEach(article => setArticleContent(article.title, article.content, article.createdAt));
    });
  }
  
  // 게시글 html 생성 함수
  function setArticleContent(title, content, createdAt){
    const element = document.getElementById('article');
    element.innerHTML +=
      `<div class="article">
                  <p class="title">${title}<p>
                  <p class="content">${content}<p>
                  <p class="date">${createdAt}<p>
                  <hr>
                </div>
                `;
  }
  
  // 아티클 초기화
  function refreshArticleContent(){
    const element = document.getElementById('article');
    element.innerHTML  = "";
  }
  
  function getCurrentTime() {
    const currentDate = new Date();
    return `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
  }