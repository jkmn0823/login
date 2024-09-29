import React from "react";
import '../css/SignUp.css'

function SignUp(){
  return(
    <div className="back">
      <header className="header">
        <div className="header_box">
          {/* 박스이미지(상관 無) */}
        </div>
      </header>

      <div className="content">
        <div className="login_box">

          <div className="sign_tittle">
            <h1>회원가입</h1>
          </div>
          
          
          <form action="" className="sign_form">
            {/**백엔드로 전해지는 url */}
            <div className="sign_Name">
              <p>이름</p>
              <input type="text" placeholder="이름"/>
            </div>
            <div className="sign_Number">
              <p>학번</p>
              <input type="text" placeholder="학번"/>
            </div>
            <div className="sign_ID">
              <p>ID</p>
              <input type="text" placeholder="사용할 아이디를 입력해주세요"/>
              <button className="">중복확인</button>
            </div>
            <div className="sign_PW">
              <p>비밀번호</p>
              <input type="password" placeholder="기호포함 8자를 입력해주세요"/>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default SignUp