import React from "react";

export const InputTODO = (props) => {
  const { todoText, onChange, clickAdd, disabled, onClickSave } = props;
  return (
    <div className="input-area">
      <input
        placeholder="TODOリストに入力"
        value={todoText}
        onChange={onChange}
        disabled={disabled}
      />
      <button onClick={clickAdd} disabled={disabled}>
        追加
      </button>
      <button onClick={onClickSave}>保存</button>
    </div>
  );
};
