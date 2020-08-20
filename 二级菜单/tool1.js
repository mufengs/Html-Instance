function addClass(obj, cla){
		 if(!hasClass(obj,cla)){
		 obj.className+=" "+cla;
		  }
		  }
		function hasClass(obj,cla){
		  var reg=new RegExp("\\b"+cla+"\\b");
		  return reg.test(obj.className);
		  }
		function moveClass(obj,cla){
		  var reg=new RegExp("\\b"+cla+"\\b");
		  obj.className=obj.className.replace(reg,"");
		  }
		function toggleClass(obj,cla){
		  if(hasClass(obj,cla)){
		    moveClass(obj,cla)
			}else{
			addClass(obj,cla)
			}
			}