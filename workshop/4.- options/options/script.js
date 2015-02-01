var change=localStorage["change"];
if (!change){
	change="1.21";
}
$("#change").val(change);

$("#save").click(function(){
	var value=$("#change").val();
	localStorage["change"]=value;
});

