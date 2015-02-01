console.log("Content script launched "+document.location);
//document.body.style.backgroundColor="red";
if (document.location.href.indexOf("://www.otogami.com/")>0){
	console.log("Estamos en otogami.com");
	var digits=document.querySelectorAll(".price__digit");
	for (var i = 0; i < digits.length ; i++){
		var text=digits[i].textContent;		
		var numbers=convert(text);
		digits[i].innerHTML="<b>"+numbers[0]+"<span class='price__decimal'>,"+numbers[1]+"</span></b>$";
	}
	converTable(".offer__price");
	converTable(".offer__shippingcost");
}

function converTable(selector){
	var prices=document.querySelectorAll(selector);
	for (var i = 0; i < prices.length ; i++){
		var text=prices[i].textContent;		
		var numbers=convert(text);
		prices[i].innerHTML="<span>"+numbers[0]+","+numbers[1]+"</span>$";
	}
}

function convert(text){
	text=text.replace(/ /g,"");
	text=text.replace("€","");
	var euro=text.replace(",",".");
	var dolar=(euro*1.12).toFixed(2);	
	return dolar.split(".");
}