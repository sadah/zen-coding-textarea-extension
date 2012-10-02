(function(){
  var option = null;
  chrome.extension.sendRequest("", function( response ){
    extensionOptions = response;
    main(extensionOptions);
  });
})();

function main(extensionOptions){
  var zen_textarea = zen_cte(extensionOptions);
  zen_textarea.setup({pretty_break: true});
  
  var shortcuts = extensionOptions["shortcuts"];
  for(var i=0; i<shortcuts.length; i++){
    zen_textarea.addShortcut(shortcuts[i].key, shortcuts[i].action);
  }
}