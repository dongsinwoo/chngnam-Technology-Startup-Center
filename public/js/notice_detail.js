const firebaseConfig = {
    apiKey: "AIzaSyCLHolAddBBQWNdlxM0hIDaiIilxo9CytI",
    authDomain: "chungnamws.firebaseapp.com",
    databaseURL: "https://chungnamws-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "chungnamws",
    storageBucket: "chungnamws.appspot.com",
    messagingSenderId: "440901868102",
    appId: "1:440901868102:web:0d0fc409237c4ab4834847",
    measurementId: "G-1GZ7YCCC8D"         
  };

          // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig)



const db = firebase.firestore();

// URL에서 게시글 ID 가져오기
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');

// DOM 요소
const titleElement = document.getElementById('iptTitle');
const dateElement = document.getElementById('iptDate');
const contentElement = document.getElementById('iptCont');

// 게시글 데이터 불러오기
async function loadPost() {
    try {
        const doc = await db.collection('posts').doc(postId).get();
        if (doc.exists) {
            const post = doc.data();
            titleElement.value = post.title;
            dateElement.value = post.date;
            contentElement.value = post.content;
            document.title = `공지사항 - ${post.title}`; // 페이지 제목 변경
        } else {
            alert('존재하지 않는 게시글입니다.');
            window.location.href = 'notice_board.html';
        }
    } catch (error) {
        console.error("Error loading post: ", error);
        alert('게시글을 불러오는데 실패했습니다.');
    }
}

// 목록으로 돌아가기
function goBack() {
    window.location.href = 'notice_board.html';
}

// 페이지 로드시 게시글 불러오기
loadPost(); 