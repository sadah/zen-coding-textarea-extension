function init(){
  chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
      var lang = localStorage["lang"];
      var locale = localStorage["locale"];
      var indent = localStorage["indent"];
      if(!lang) lang = "en";
      if(!locale) locale = "en_US"
      if(!indent) indent = "\t";

      var shortcuts_json = localStorage["shortcuts_json"];
      var shortcuts = null;
      if(!shortcuts_json) {
        shortcuts = JSON.parse('{"shortcuts":[]}');
      }else{
        shortcuts = JSON.parse(shortcuts_json);
      }
      
      sendResponse({
        "lang":lang,
        "locale":locale,
        "indent":indent,
        "shortcuts":shortcuts["shortcuts"]
      });
    }
  );
}
window.onload = init();

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-908101-11']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = 'https://ssl.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
