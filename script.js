let userValue = document.querySelector('.userVal').value;
let LiElm = document.querySelector('.list');
let emptyArr = [];


let addButton = document.querySelector('.addBtn').addEventListener('click', ()=>{
  
      let a;
      for (let index = 0; index < LiElm.length; index++) {
        a += emptyArr.push(index) + 'Mrinmoy';
      }
});
console.log(emptyArr)



