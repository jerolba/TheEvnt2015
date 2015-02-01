console.log("Content script launched "+document.location);

chrome.runtime.onMessage.addListener(
	  function(request, sender, sendResponse) {
		  if (request.type=="load"){
			  var cont=changePrices(request.change);
			  sendResponse({prices:cont});			  
		  }
	  });


function changePrices(change){
	var digits=document.querySelectorAll(".price__digit");
	for (var i = 0; i < digits.length ; i++){
		var text=digits[i].textContent;		
		var numbers=convert(text);
		digits[i].innerHTML="<b>"+numbers[0]+"<span class='price__decimal'>,"+numbers[1]+"</span></b>$";
	}
	var cont=digits.length;
	cont+=converTable(".offer__price");
	cont+=converTable(".offer__shippingcost");
	return cont;


	function converTable(selector){
		var prices=document.querySelectorAll(selector);
		for (var i = 0; i < prices.length ; i++){
			var text=prices[i].textContent;		
			var numbers=convert(text);
			prices[i].innerHTML="<span>"+numbers[0]+","+numbers[1]+"</span>$";
		}
		return prices.length;
	}

	function convert(text){
		text=text.replace(/ /g,"");
		text=text.replace("€","");
		var euro=text.replace(",",".");
		var dolar=(euro*change).toFixed(2);	
		return dolar.split(".");
	}
}