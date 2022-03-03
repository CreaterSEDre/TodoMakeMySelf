import React from "react";

export const InputTODO = (props) => {
  const {
    todoText,
    onChange,
    clickAdd,
    disabled,
    onClickSave,
    loginFlg,
    onClickPullSaveData,
    loginId,
    password
  } = props;
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
      {loginFlg && <button onClick={onClickSave}>保存</button>}
      {loginFlg && (
        <button onClick={() => onClickPullSaveData(loginId, password)}>
          保存データを表示
        </button>
      )}
    </div>
  );
};
