import React from "react";

const LoginStyle = {
  backgroundColor: "#66cdaa",
  padding: "8px",
  paddingBottom: "10px",
  margin: "2px",
  marginBottom: "12px"
};

const NotLoginState = (loginFlg) => {
  return !loginFlg;
};

export const Login = (props) => {
  const {
    LoginCheck,
    // Logout,
    loginId,
    onChangeLoginId,
    password,
    onChangePassword,
    loginFlg
  } = props;

  return (
    <>
      <div style={LoginStyle}>
        <p className={"title"}>ログイン</p>
        <div className="list-row"></div>
        <input
          type="text"
          placeholder="ログインIDを入力"
          value={loginId}
          onChange={onChangeLoginId}
          // disabled={() => NotLoginState(loginFlg)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="パスワードを入力"
          value={password}
          onChange={onChangePassword}
          // disabled={() => NotLoginState(loginFlg)}
        />
        <button
          onClick={() => LoginCheck(loginId, password)}
          // disabled={() => NotLoginState(loginFlg)}
        >
          ログイン
        </button>
        <button
        // onClick={Logout()} disabled={loginFlg}
        >
          ログアウト
        </button>
      </div>
    </>
  );
};
