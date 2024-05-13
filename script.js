const add_button = document.querySelector('.addBtn');
const userValue = document.querySelector('.userVal');


add_button.onclick = function(){
let userInputs = userValue.value;
userValue.value = "";
let list_el = document.createElement('ul');
list_el.classList.add('list');
let lists = document.createElement('li');
list_el.appendChild(lists);
let creatSpan = document.createElement('span');
creatSpan.textContent = userInputs;
lists.appendChild(creatSpan);
let allActionBtns = document.createElement('span');
allActionBtns.classList.add('btngrp');
lists.appendChild(allActionBtns);


let checkBtn = document.createElement('i');
checkBtn.classList.add('fa-solid');
checkBtn.classList.add('fa-check');
let editBtn = document.createElement('i');
editBtn.classList.add('fa-solid');
editBtn.classList.add('fa-pen-to-square');
let deletBtn = document.createElement('i');
deletBtn.classList.add('fa-solid');
deletBtn.classList.add('fa-trash');
allActionBtns.appendChild(checkBtn);
allActionBtns.appendChild(editBtn);
allActionBtns.appendChild(deletBtn);

let listNode = document.querySelector(".list_node");
listNode.appendChild(list_el)
}



