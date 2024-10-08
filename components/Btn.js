import React from "react";

const Btn = ({ onClick, text }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="text-xl border-2 rounded-3xl px-7 py-2 border-[#FEA116] yellow hover:bg-[#FEA116] hover:text-white duration-500"
      >
        {text}
      </button>
    </>
  );
};
export default Btn;
