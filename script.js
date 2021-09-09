/*chrome.extension.onRequest.addListener(function(request, sendResponse) {
    if (request.action == "getDOM"){
        console.log("Okay ;)");
      sendResponse({dom: "The dom that you want to get"});
    }
        
    else
      sendResponse({}); // Send nothing..
   });*/

   console.log("test");

function getSelectionText() {
  if (window.getSelection) {
    //only work if supported
    var selObj = window.getSelection();
    console.log(selObj);
    var selectedText = selObj.toString();
    console.log(selectedText); 
    return selectedText;
    //get the selection object
    //alert(
      //"Selected text: \n" + selection.toString()
    //);
  }
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    
    if (request.greeting == "hello")
      sendResponse(getSelectionText());
      
  }
);

document.getElementById





 
    // paste dans la pop up

// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//       console.log(sender.tab ?
//                   "from a content script:" + sender.tab.url :
//                   "from the extension");
//       if (request.greeting == "hello")
//         sendResponse({farewell: "goodbye"});
//     }
//   );



// getSelectionText();
//   alert("test");