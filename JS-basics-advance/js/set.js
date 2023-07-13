// set
const { log } = console;
// create an empty set
const emptySet = new Set(); //set class instantiation
log(emptySet);

const list = ["javascript", "java", "python", "javascript", "java"];

// add items to a set
const uniqueSetFromList = new Set(list);
console.log(uniqueSetFromList);

const uniqueList = [...uniqueSetFromList];

console.log(uniqueList, "unique");

const selectContainer = document.getElementsByClassName("select-container")[0];

const select = document.createElement("select");
select.id = "courses";
select.name = "courses";

selectContainer.appendChild(select);

const selectEle = document.getElementById("courses");

log(selectEle, "selectEle");

for (let i = 0; i < uniqueList.length; i++) {
  const current = list[i];
  const option = document.createElement("option");
  option.value = `${current}`;
  option.innerText = `${current}`;

  selectEle.appendChild(option);
}

// use set on the array below
const arr = ["mango", "orange", "mango", "apple", "apple", "carrot"];

// get unique set using set on the array
//get unique array from the unique set using the two methods ( ... and for of loop)
