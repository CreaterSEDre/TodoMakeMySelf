import React from "react";

const LoginStyle = {
  backgroundColor: "#66cdaa",
  padding: "8px",
  paddingBottom: "10px",
  paddingTop: "10px",
  margin: "2px"
};

export const Login = () => {
  return (
    <>
      <div style={LoginStyle}>
        <div className="list-row">
          <p>ログイン</p>
          <tooltip tooltipText="test">
            <button>?</button>
          </tooltip>
        </div>
        <input type="text" placeholder="ログインIDを入力" />
        <br />
        <br />
        <input type="password" placeholder="パスワードを入力" />
      </div>
    </>
  );
};
