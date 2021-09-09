
getLocalStorage();


let newText;
function getCurrentTab() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tab) {
    chrome.tabs.sendMessage(tab[0].id, { greeting: "hello" }, function (response) {
      newText = response;
      document.getElementById("textarea").innerHTML = newText;
      setLocalStorage(newText);
    });
  });
}

let boutonAction = document.getElementById("action");
console.log(boutonAction);
boutonAction.addEventListener("click", function () {
  getCurrentTab();
});


// Local Storage in progress
function setLocalStorage(value) {
  chrome.storage.local.set({ key: value });
  //console.log("NewText " + typeof newText);
}
function getLocalStorage() {
  chrome.storage.local.get(['key'], function (result) {
    console.log(result.key);
    document.getElementById("textarea").innerHTML = result.key;
  });
}










