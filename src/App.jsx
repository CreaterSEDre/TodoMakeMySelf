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
  const [loginFlg, setLoginFlg] = useState("");
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");

  const onClickChangeText = (event) => setInputText(event.target.value);
  const onChangeLoginId = (event) => setLoginId(event.target.value);
  const onChangePassword = (event) => setPassword(event.target.value);

  const LoginCheck = (loginId, password) => {
    if (loginId !== "" && password !== "") {
      //上手くいかない
      setLoginFlg("1");
      console.log(loginFlg);
      if (loginFlg === "0") {
        alert("ログインID、またはパスワードが正しくありません。");
      } else {
        alert("ログインに成功しました！！");
      }
      setLoginId("");
      setPassword("");
    }
  };

  // const Logout = () => {
  //   alert("LogoutSuccess!!");
  //   setLoginFlg(true);
  // };

  // useEffect(() => {});

  const onClickAdd = () => {
    if (inputText === "") return;
    const newIncompTODO = [...incompleteTodo, inputText];
    setIncompleteTodo(newIncompTODO);
    setInputText("");
  };

  const onClickSave = () => {
    return alert("OK");
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
        // Logout={Logout}
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
