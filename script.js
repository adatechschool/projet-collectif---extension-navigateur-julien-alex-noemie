/*chrome.extension.onRequest.addListener(function(request, sendResponse) {
    if (request.action == "getDOM"){
        console.log("Okay ;)");
      sendResponse({dom: "The dom that you want to get"});
    }
        
    else
      sendResponse({}); // Send nothing..
   });*/

   console.log("test");

   chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
      if (request.greeting == "hello")
        sendResponse({farewell: "goodbye"});
    }
  );


/*function getSelectionText() {
    console.log("step1");
    if (window.getSelection) {
        console.log("step2");
      //only work if supported
      var selection = window.getSelection(); //get the selection object
      alert(
        "Selected text: \n" + selection.toString()
      );
    }
  }


  getSelectionText();
    alert("test");
    // paste dans la pop up
*/

