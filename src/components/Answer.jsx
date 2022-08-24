import React from 'react';

export default function Answer({ text, index, nextQuestion }) {
  const objWord = {
    0: 'A',
    1: 'B',
    2: 'C',
    3: "D"
  };
  return (
    <div
      className="
    flex gap-[20px] items-center border p-[10px text-orange-50 cursor-pointer pl-[16px] py-[10px]
    bg-transparent transition ease-in delay-150 hover:bg-orange-200 hover:text-black
    "
      onClick={() => nextQuestion(text)}>
      <p>{objWord[index]}</p>
      <p>{text}</p>
    </div>
  );
}
