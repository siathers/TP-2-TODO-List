var int = 0;
let cosas = [];
let tiempos=[]; 
let todos = [];
let tiempos2 = [];
// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  button.className = "close";
  button.appendChild(txt);
  myNodelist[i].appendChild(button);
}
// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    var itemName = ev.target.textContent;
    ev.target.classList.toggle('checked');
    const timestamp = new Date().getTime();
    itemName.replace("x", "")
    for (i = 0; i < cosas.length; i++) {
      console.log(cosas[i])
      console.log(itemName)
      if((itemName)==((cosas[i])))
      {
        tiempos2[i]=timestamp;
        console.log(i)
      }
    }
    todos.push(ev.target.textContent);
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);;
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
    console.log(t);
  }
  document.getElementById("myInput").value = "";
  var button = document.createElement("button");
  var txt = document.createTextNode("");
  button.className = "close";
  button.appendChild(txt);
  li.appendChild(button);
  cosas.push(inputValue);
  const timestamp = new Date().getTime();
  console.log(timestamp)
  tiempos.push(timestamp);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
function getFirstTodoItem() {
var noseasda=cosas[0];
console.log(noseasda)
var restatiempos=tiempos[0]-tiempos2[0];
  for (let i = 0; i < cosas.length; i++) {
    if (restatiempos < tiempos[i]-tiempos2[i]) {
      restatiempos=tiempos[i]-tiempos2[i]
      noseasda=cosas[i]
      console.log(i)
    }
  }
  document.getElementById("ab").innerText=noseasda;
}

