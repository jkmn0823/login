import React from "react";
import "../css/Login.css"
import googleimg from "../image/google_home.png"

function Login(){
  return(
    <div className="back">
      <header className="header">
        <div className="header_box">
          <img src={googleimg} alt="Google Home" />
        </div>
      </header>
      <div className="content">
        <div className="login_box">
          <div className="login_tittle">
            <h3>로그인박스</h3>
          </div>
          <form action=""> {/**백엔드로 전해지는 url */}
            <div className="ID_div">
              <p>ID</p>
              <input type="text" name="ID"/>
            </div>
            <div className="PW_div">
              <p>Password</p>
              <input type="password" />
            </div>
            <div className="login_complete">
              <button>로그인</button>
            </div>
          </form>
          <p>회원이 아니신가요?</p>
        </div>
      </div>
      <div className="footer">
        <h3>하나둘셋</h3>
      </div>
    </div>
  );
}

export default Login;