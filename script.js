let userInfo = document.querySelector(".inputbox input");
let addItem = document.querySelector(".inputbox button");
let completed = document.querySelector('child1 input');
let list = document.querySelector(".list");
let list_Of_Items = [];
let empty_id = null;
let objStr = localStorage.getItem("items");
list_Of_Items = JSON.parse(objStr);

addItem.onclick = () => {
    let userVal = userInfo.value.trim();
    if (empty_id != null) {
        list_Of_Items.splice(empty_id, 1, { name: userVal });
        empty_id = null;
        addItem.innerText = 'Add'
    } else {
        list_Of_Items.push({ name: userVal });
    }
    saveItem(list_Of_Items);
    displayItem();
    userInfo.value = "";
}

completed.forEach(element => {
    element.onchange = (e) => {
        if (e.target==checked) {
            e.classList.add(done);
        }
    }
    
});

function saveItem(list_Of_Items) {
    let str = JSON.stringify(list_Of_Items);
    localStorage.setItem("items", str);
}

function displayItem() {
    let storeList = "";
    list_Of_Items.forEach((li, id) => {
        storeList += `<li>
        <div class="child1">
           <span>${id + 1}</span>
          <input type="checkbox" />
          <span class="done">${li.name}</span>
        </div>
        <div class="child2">
          <span class="dlt" onclick="editItem(${id})">Edit</span>
          <span class="dlt" onclick="deleteItem(${id})">Delete</span>
        </div>
      </li>`
    })
    list.innerHTML = storeList;
}

function editItem(id) {
    empty_id = id;
    userInfo.value = list_Of_Items[id].name;
    addItem.innerText = 'Save'
}

function deleteItem(id) {
    list_Of_Items.splice(id, 1);
    saveItem(list_Of_Items);
    displayItem();
}
