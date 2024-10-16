var toggleMainPopup = function() {
  const pop_up = document.getElementById("popup_1");
  const pop_close = document.getElementById("close_btn1");
  const pop_day_close = document.getElementById("close_day")
  /* 쿠키 제어 함수 정의 */
  var handleCookie = {
    // 쿠키 쓰기
    // 이름, 값, 만료일
    setCookie: function (name, val, exp) {
      var date = new Date();
      
      // 만료 시간 구하기(exp를 ms단위로 변경)
      date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
      console.log(name + "=" + val + ";expires=" + date.toUTCString() + ";path=/");
      
      // 실제로 쿠키 작성하기
      document.cookie = name + "=" + val + ";expires=" + date.toUTCString() + ";";
    },
    // 쿠키 읽어오기(정규식 이용해서 가져오기)
    getCookie: function (name) {
      var value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
      return value ? value[2] : null;
    }
  };
  console.log(handleCookie.getCookie("today"));
  
  // 쿠키 읽고 화면 보이게
  if (handleCookie.getCookie("today") == "y") {
    pop_up.classList.remove("on");
  }else{
    pop_up.classList.add("on");
  }


  
  // 오늘하루 보지 않기 버튼
  pop_day_close.addEventListener("click",()=>{
    handleCookie.setCookie("today", "y", 1)
    pop_up.classList.remove("on");
  })

  pop_close.addEventListener("click",()=>{
    pop_up.classList.remove("on")
  })
}

document.addEventListener("DOMContentLoaded",()=>{
    toggleMainPopup()
})