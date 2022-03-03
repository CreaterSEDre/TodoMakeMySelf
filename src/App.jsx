import "./styles.css";
import { useState } from "react";
import { InputTODO } from "./components/InputTODO";
import { IncompleteTODO } from "./components/IncompleteTODO";
import { CompleteTODO } from "./components/CompleteTODO";
import { Login } from "./components/Login";

export const TodoApp = () => {
  const [inputText, setInputText] = useState("");
  const [incompleteTodo, setIncompleteTodo] = useState([]);
  const [completeTodo, setCompleteTodo] = useState([]);
  const [loginFlg, setLoginFlg] = useState("0");
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");

  const onClickChangeText = (event) => setInputText(event.target.value);
  const onChangeLoginId = (event) => setLoginId(event.target.value);
  const onChangePassword = (event) => setPassword(event.target.value);

  const LoginCheck = (loginId, password) => {
    if (loginFlg === "0") {
      if (loginId === "" || password === "") {
        alert("ログインID、パスワードが正しく入力されていません。");
      } else {
        //DBでログインチェック
        setLoginFlg("1");
        alert("ログインに成功しました！！！！");
      }
    } else {
      //ログアウト処理
      setLoginFlg("0");
      alert("ログアウトしました。");
      setLoginId("");
      setPassword("");
    }
  };

  const onClickAdd = () => {
    if (inputText === "") return;
    const newIncompTODO = [...incompleteTodo, inputText];
    setIncompleteTodo(newIncompTODO);
    setInputText("");
  };

  const onClickSave = () => {
    alert("OK");
  };

  const onClickPullSaveData = (loginId, password) => {
    //eslint-disable-next-line
    if (confirm("現在表示のTODOリストが削除されますがよろしいですか？")) {
      //DBにSELECT処理
      alert(loginId + "" + password);
    } else {
      alert("処理をキャンセルしました。");
    }
  };

  const onClickDel = (index, whichTODO) => {
    if (whichTODO === "incompleteTodo") {
      const newIncompTodo = [...incompleteTodo];
      newIncompTodo.splice(index, 1);
      setIncompleteTodo(newIncompTodo);
    } else if (whichTODO === "completeTodo") {
      const newCompTodo = [...completeTodo];
      newCompTodo.splice(index, 1);
      setCompleteTodo(newCompTodo);
    }
  };

  const onClickComp = (index) => {
    const newInCompTodo = [...incompleteTodo];
    const newCompTodo = [...completeTodo, newInCompTodo[index]];
    onClickDel(index, "incompleteTodo");
    setCompleteTodo(newCompTodo);
  };

  const onClickBack = (index) => {
    const newCompTodo = [...completeTodo];
    const newInCompTodo = [...incompleteTodo, newCompTodo[index]];
    onClickDel(index, "completeTodo");
    setIncompleteTodo(newInCompTodo);
  };

  return (
    <>
      <Login
        LoginCheck={LoginCheck}
        loginId={loginId}
        onChangeLoginId={onChangeLoginId}
        password={password}
        onChangePassword={onChangePassword}
        loginFlg={loginFlg === "1"}
      />
      <InputTODO
        todoText={inputText}
        onChange={onClickChangeText}
        clickAdd={onClickAdd}
        disabled={completeTodo.length + incompleteTodo.length >= 5}
        onClickSave={onClickSave}
        loginFlg={loginFlg === "1"}
        onClickPullSaveData={onClickPullSaveData}
        loginId={loginId}
        password={password}
      />
      {completeTodo.length + incompleteTodo.length >= 5 && (
        <p style={{ color: "red" }}>TODOリストを5件以上作成できません</p>
      )}

      <IncompleteTODO
        inCompTodo={incompleteTodo}
        onClickDel={onClickDel}
        onClickComp={onClickComp}
      />
      <CompleteTODO
        compTodo={completeTodo}
        onClickDel={onClickDel}
        onClickBack={onClickBack}
      />
    </>
  );
};
