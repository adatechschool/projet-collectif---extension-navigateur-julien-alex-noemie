
 let newText;
  function getCurrentTab(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tab) {
     chrome.tabs.sendMessage(tab[0].id, {greeting: "hello"}, function(response) {
      console.log(response);
      newText = response;
      console.log(newText);
    });
  });
}

let boutonAction=document.getElementById("action");
console.log(boutonAction);
boutonAction.addEventListener("click", function(){
  getCurrentTab();

  document.getElementById("textarea").innerHTML = newText; 
});









