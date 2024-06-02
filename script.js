let userVal = document.querySelector('.info-box input');
let addTask = document.querySelector('.info-box button');
let items = document.querySelector('.list');
let edi_id = null;
let itemList = [];
let Obj = localStorage.getItem('inputs');
if (Obj != null) {
    itemList = JSON.parse(Obj);
}
addTask.onclick = () => {
    let useritems = userVal.value.trim()
    if (edi_id != null) {
        itemList.splice(edi_id, 1, { 'name': useritems });
        edi_id = null;

    } else {

        itemList.push({ 'name': useritems })
    }

    saveItems(itemList);
    displayItem()
    userVal.value = "";
}

function saveItems(itemList) {
    let str = JSON.stringify(itemList);
    localStorage.setItem('inputs', str);
}
function displayItem() {


    let list = "";
    itemList.forEach((item, id) => {
        list += `<li>
<div class="child1">
   <span class="id">${id + 1}</span>
  <input type="checkbox" />
  <span>${item.name}</span>
</div>
<div class="child2">
  <span class="dlt" onclick="editItem(${id})">Edit</span>
  <span class="dlt" onclick=" deleteItem(${id})">Delete</span>
</div>
</li> `
    })
    items.innerHTML = list;
} 

function editItem(id) {
    edi_id = id;
    userVal.value = itemList[id].name

}

function deleteItem(id) {
    itemList.splice(id, 1);
    saveItems(itemList);
    displayItem()
}