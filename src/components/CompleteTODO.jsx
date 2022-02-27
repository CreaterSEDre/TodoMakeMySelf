import React from "react";

export const CompleteTODO = (props) => {
  const { compTodo, onClickDel, onClickBack } = props;
  return (
    <>
      <div className="complete-area">
        <p className="title">完了したTODO</p>
        <ul>
          {compTodo.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
                <button onClick={() => onClickDel(index, "completeTodo")}>
                  削除
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
