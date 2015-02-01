console.log("Desde el background");

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	if (changeInfo.status=='complete'){
		if (tab.url.indexOf("://www.otogami.com/")>0){
			var change=localStorage["change"];
			chrome.tabs.sendMessage(tabId, {type:"load", change:change}, function(ack) {
				console.log("Modified "+ack.prices+" prices");
			});
		}
		
	}
});
