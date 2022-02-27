import React from "react";

export const InputTODO = (props) => {
  const { inputText, onChange, clickAdd, disabled } = props;
  return (
    <div className="input-area">
      <input
        placeholder="TODOリストに入力"
        value={inputText}
        onChange={onChange}
        disabled={disabled}
      />
      <button onClick={clickAdd} disabled={disabled}>
        追加
      </button>
    </div>
  );
};
