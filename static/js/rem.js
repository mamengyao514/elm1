 	function  rem(){
		document.documentElement.style.fontSize=document.documentElement.clientWidth/7.5+"px";
	 }
	  rem();
	//事件  onresize当屏幕的尺寸发生改变的时候会触发该事件
	window.onresize=rem;
