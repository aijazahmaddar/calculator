function display(n) {

	myform.textview.value+=n;

	// body...
}

function clr(){

    myform.textview.value="";
}

function del(){
	var a=myform.textview.value;
	myform.textview.value=a.slice(0, a.length-1);


}

