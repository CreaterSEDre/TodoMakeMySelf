import React from "react";

export const IncompleteTODO = (props) => {
  const { inCompTodo, onClickDel, onClickComp } = props;
  return (
    <>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {inCompTodo.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComp(index)}>完了</button>
                <button onClick={() => onClickDel(index, "incompleteTodo")}>
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
