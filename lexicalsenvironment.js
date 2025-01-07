function a(){
	var s=20;//parent lexical envi 2
	b();
	   //. . 2=null
	function b(){
	console.log(n); //child lexical1
	console.log(s);	//child lexical 1
}
}
var n=10; //super parent lexical envi /global space 3
a();
//It’s a environment where in which global space variable can access into function and also into nested function