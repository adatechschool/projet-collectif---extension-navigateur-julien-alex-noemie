 function getCurrentTab(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tab) {
    chrome.tabs.sendMessage(tab[0].id, {greeting: "hello"}, function(response) {
      console.log(response.farewell);
      console.log(tab);
    });
  });
}

let boutonAction=document.getElementById("action");
console.log(boutonAction);
boutonAction.addEventListener("click", function(){
  getCurrentTab();
});


  /*chrome.tabs.getSelected(null, function(tab) {
    // Send a request to the content script.
    chrome.tabs.sendRequest(tab.id, {action: "getDOM"}, function(response) {

      console.log(response.dom);
    });
  });   
});*/







