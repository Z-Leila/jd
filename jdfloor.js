 var floor = $(".floor");
	var lis = $(".flis");
	var fudong = $(".floorbox")[0];
	var cw = document.documentElement.clientWidth;
	var ch = document.documentElement.clientHeight;
	var bh = fudong.offsetHeight;
	fudong.style.top = (ch - bh) / 2 + "px";
	var flag=true;
	var flag1=true;
	var sign=true;
	for (var i = 0; i < lis.length; i++) {
		lis[i].index = i;
		lis[i].onclick = function() {
			sign=false;
			// var obj = document.documentElement.scrollTop ? document.documentElement : document.body;//处理兼容性问题
			var top = floor[this.index].offsetTop;
			// 将当前点击的楼层距离屏幕的高度赋给滚动距离
			animate(document.documentElement,{scrollTop:top},300,function () {
			    sign=true;
			})
			animate(document.body,{scrollTop:top},300,function () {
			    sign=true;
			})
			for (var i = 0; i < lis.length; i++) {
				lis[i].style.background = "#fff"
				lis[i].style.color = "#666"
				lis[i].innerHTML=i+1+"F";
			}
			lis[this.index].style.color = "#fff" 
			lis[this.index].style.background = "#C81623"
			lis[this.index].style.fontSize = 12+"px";
			var aa = lis[this.index].getAttribute("aa");
			lis[this.index].innerHTML=aa;
			// 获取自定义属性，并将该属性赋值给当前所在框
		}
	}
     

     //滚动条事件
	window.onscroll=function(){
		if(!sign){
			return；
		}
		var obj=document.documentElement.scrollTop ? document.documentElement : document.body;
		for (var i=0; i<floor.length; i++) {
			if (obj.scrollTop>=(floor[i].offsetTop-ch)) {
				for (var j=0;j<lis.length;j++) {
					lis[j].style.background="#fff"
					lis[j].style.color="#666"
					lis[j].innerHTML=j+1+"F";
				}
				
				var aa=lis[i].getAttribute("aa");
				lis[i].innerHTML=aa;
				
				lis[i].style.color="#fff"
				lis[i].style.background="#c81623"
			}
		}
		if (obj.scrollTop>=(floor[0].offsetTop-ch)) {//开关控制
			if(flag){
				flag=false;
				animate(fudong,{opacity:1},300,function(){flag1=true;})
			} 
		}else{
				if(flag1) {
				flag1=false;
				animate(fudong,{opacity:0},300,function(){flag=true;})
			} 
		}
	}