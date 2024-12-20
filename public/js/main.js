// 푸터 밑 헤더 작업
const headInnerContent = ()=>{
    const header = document.querySelector("nav")

    header.innerHTML = `
    <div class="container px-5  align-items-center">
        <a href="index.html">
            <img src="./assets/logo.png" alt="" class="navbar-logo">
        </a>
        <div class="mobile_menu_btn">
            <input type="checkbox" id="mobile_check">
            <label for="mobile_check">
                <span></span>
                <span></span>
                <span></span>
            </label>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 pc_font_size_head">
                <li class="nav-item">
                    <a class="nav-link pr-3 pl-3 d-block" href="about.html">센터소개</a>
                    <ul class="sub-menu">
                        <li>
                            <a href="about.html">센터 소개</a>
                        </li>
                        <li>
                            <a href="address.html">찾아오시는 길</a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link pr-3 pl-3 d-block" href="startupsuport.html">지원서비스</a>
                    <ul class="sub-menu">
                        <li>
                            <a href="startupsuport.html">창업지원</a>
                        </li>
                        <li>
                            <a href="teaching.html">창업 멘토링</a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link pr-3 pl-3 d-block" href="information.html">입주</a>
                    <ul class="sub-menu">
                        <li>
                            <a href="information.html">입주 안내</a>
                        </li>
                        <li>
                            <a href="graduate.html">입주기업현황</a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link pr-3 pl-3 d-block" href="notice_board.html">정보 게시판</a>
                </li>
            </ul>
        </div>
    </div>
    `

}

const footerInnerContent = ()=>{
    const footer = document.querySelector("footer")
    footer.innerHTML =`
    <div class="container px-5">
        <div class="f_flex_box">
            <div class="col-auto">
                <div class="small ">
                    <span>충청남도 서산시 해미면 한서1로 46 한서대학교 인곡관 1층(충남서부권 중장년기술창업센터) 서산시, 충청남도 31962</span> 
                    <p id = "tell">전화번호: (서산)041-660-1326/1327 (서천)041-951-1326 | 이메일: bhs1424@hanseo.ac.kr </p>
                    <span>COPYRIGHT 2024 충남서부권 중장년기술창업센터 ALL RIGHTS RESERVED.</span>
                </div>
            </div>

            <div class="col-auto footer_logos">
                <a class=" small mr-3" href="https://www.facebook.com/profile.php?id=100075705774887&locale=ko_KR" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                    </svg>
                </a>
                <a class=" small mr-3" href="https://www.instagram.com/hanseo.m.startup/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                    </svg>
                </a>
                <a class=" small mr-3" href="https://blog.naver.com/hanseomstartup" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 16 16"><path fill="currentColor" d="M14.966 6h-.897C13.52 6 13.038 5.535 13 5c0-2.854-2.301-5-5.175-5H5.203C2.331 0 .002 2.313 0 5.167v5.669c0 2.854 2.331 5.165 5.203 5.165h5.6c2.874 0 5.197-2.311 5.197-5.165V7.174c0-.57-.46-1.173-1.034-1.173zM5 4h3c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1m6 8H5c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1"/></svg>
                </a>
                <a class=" small" href="https://cafe.naver.com/hanseomstartup" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
                        <path fill="currentColor" d="M16.273 12.845L7.376 0H0v24h7.726V11.156L16.624 24H24V0h-7.727z"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>`
}

const fixed_k_s_content = ()=>{
    const fixed_k_s_btn = document.querySelector(".fixed_k_startup");
    fixed_k_s_btn.classList.add("on")
    // footer.innerHTML 
}

// 이벤트 선언
document.addEventListener("DOMContentLoaded",()=>{
    setTimeout(()=>{
        fixed_k_s_content()
    },1500)
    headInnerContent()
    footerInnerContent()
    
  
})