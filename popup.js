getLocalStorage();

let newText;
function getCurrentTab() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tab) {
    chrome.tabs.sendMessage(
      tab[0].id,
      { greeting: "hello" },
      function (response) {
        if (document.getElementById("textarea").value==""){
          newText = response;
        }else{
          newText = newText + "\n" + response;
        }
       
        document.getElementById("textarea").value = newText;
        setLocalStorage(newText);
      }
    );
  });
}

let boutonAction = document.getElementById("action");
boutonAction.addEventListener("click", function () {
  getCurrentTab();
});

let boutonClear = document.getElementById("clear");
boutonClear.addEventListener("click", function () {
  chrome.storage.local.clear();
  newText = "";
  document.getElementById("textarea").value = "";
});

/*let textAreaInput = document.getElementById("textarea");
textAreaInput.addEventListener("change", function (e) {
  setLocalStorage(e.target.value);
});*/


let boutonSave = document.getElementById("save");
boutonSave.addEventListener("click", function () {
  setLocalStorage(document.getElementById("textarea").value);
});


function setLocalStorage(value) {
  chrome.storage.local.set({ key: value });
}
function getLocalStorage() {
  chrome.storage.local.get(["key"], function (result) {
    newText = result.key === undefined ? "" : result.key;
    document.getElementById("textarea").value = newText;
  });
}
