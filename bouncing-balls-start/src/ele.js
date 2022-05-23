
//game element
const game_ele_arr = document.getElementsByClassName("game");
const game_ele = game_ele_arr[0];

//a element
const a_ele = document.getElementsByTagName("a");

const collapse = a_ele[0];
collapse.onclick = function () {
  const gameboard_ele_arr = document.getElementsByClassName("game-board");
  const gameboard_ele = gameboard_ele_arr[0];
  gameboard_ele.hidden = true;
};

//button element
const btn_ele_arr = document.getElementsByTagName("button");
const btn_ele = btn_ele_arr[0];

//game music
const audio_arr = document.getElementsByTagName("audio");
const audio_ele = audio_arr[0];
// let shodowDom = audio_ele.attachShadow({ mode: "open" });

// ball numer 
const em_ele_arr = document.getElementsByTagName("em");
const em_ele = em_ele_arr[0];

export { collapse, btn_ele, game_ele, em_ele };
