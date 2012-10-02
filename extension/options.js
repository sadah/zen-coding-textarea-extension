$(function(){
  $('#tabs').tabs();
  init();
});

function submit() {
  saveSelect("lang");
  saveSelect("locale");
  saveSelect("indent");
  saveTextBox();
  var status = document.getElementById("status");
  status.innerHTML = "Options Saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 2000);
}

function init(){
  restoreSelect("lang");
  restoreSelect("locale");
  restoreSelect("indent");
  restoreTextBox();
}

// Saves options to localStorage.
function saveSelect(id) {
  var val = document.getElementById(id);
  var select = val.children[val.selectedIndex].value;
  localStorage[id] = select;
}

function saveTextBox(){
  var textBoxes = document.getElementsByTagName("input");
  var shortcuts = new Array();
  for(var i=0; i < textBoxes.length; i++){
    var key = textBoxes[i].value;
    var j=0;
    if(key){
      shortcuts.push({"key":key,"action":textBoxes[i].id});
      console.log("shortcuts key:" + shortcuts[j].key + " action:" + shortcuts[j].action);
      j++;
    }
  }
  console.log("shortcuts:" + shortcuts.length);
  console.log("shortcuts json:" + JSON.stringify({"shortcuts":shortcuts}));
  localStorage["shortcuts_json"] = JSON.stringify({"shortcuts":shortcuts});
}

function restoreTextBox(){
  var shortcuts_json = localStorage["shortcuts_json"];
  var shortcuts = null;
  if(!shortcuts_json) {
    shortcuts = JSON.parse('{"shortcuts":[]}')["shortcuts"];
  }else{
    shortcuts = JSON.parse(shortcuts_json)["shortcuts"];
  }
  for(var i=0; i<shortcuts.length; i++){
    var textBox = document.getElementById(shortcuts[i].action);
    textBox.value = shortcuts[i].key;
  }
}

// Restores select box state to saved value from localStorage.
function restoreSelect(id) {
  var val = localStorage[id];
  if (!val) {
    return;
  }
  var select = document.getElementById(id);
  for (var i = 0; i < select.children.length; i++) {
    var child = select.children[i];
    if (child.value == val) {
      child.selected = "true";
      break;
    }
  }
}