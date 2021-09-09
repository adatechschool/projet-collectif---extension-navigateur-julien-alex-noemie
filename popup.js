
 let newText;
   async function getCurrentTab(){
   await chrome.tabs.query({active: true, currentWindow: true}, function(tab) {
     chrome.tabs.sendMessage(tab[0].id, {greeting: "hello"}, function(response) {
      console.log(typeof response);
      newText = response;
      console.log(newText);
      document.getElementById("textarea").innerHTML = newText;


    });
  });
}

let boutonAction=document.getElementById("action");
console.log(boutonAction);
boutonAction.addEventListener("click", function(){
  getCurrentTab();
});









