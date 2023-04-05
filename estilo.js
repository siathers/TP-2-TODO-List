var int = 0;
let cosas = [];
let tiempos=[]; 
let todos = [];
// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
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
    const todoItem = { itemName, timestamp };
    todos.push(ev.target.textContent);
    console.log(ev.target.textContent)
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
    console.log(t);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  cosas.push(t);
  const timestamp = new Date().getTime();
  tiempos.push(timestamp);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

function getFirstTodoItem() {
  let firstItem = todos[0];
  for (let i = 1; i < todos.length; i++) {
    if (todos[i].timestamp < firstItem.timestamp) {
      firstItem = todos[i];
      console.log(todos[i] )
      var element = todos[i];
    }
  }
  var nose = document.getElementById("ab");
  var text = document.createTextNode(element);
  nose.appendChild(text)
}

function InicioFinTodoItem() {
  let firstItem = todos[0];
  for (let i = 1; i < todos.length; i++) {
    if (todos[i].timestamp < todos[i - 1].timestamp) {
      var itemName = ev.target.textContent;
      const timestamp = new Date().getTime();
      const todoItem = { itemName, timestamp };
    }
  }
  var nose = document.getElementById("re");
  var text = document.createTextNode(todoItem);
  console.log(text)
  nose.appendChild(text)
}
