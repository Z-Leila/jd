$(function(){
		var box=$(".banner-middle")[0];
		var imgs=$(".img");
		var circles=$(".circle");
		var one=$(".selected");
		var right=$(".right")[0];
		var left=$(".left")[0];
		var n=0;
		var next=0;
		var flag=true;
		var t=setInterval(move,2000);
		function move(){
			if(!flag){
				return;
			}
			flag=false;
			next=n+1;
			if(next>=imgs.length){
				next=0;
			}
			for(var i=0;i<imgs.length;i++){
				circles[i].style.background="#3e3e3e";
				
			}
			imgs[n].style.opacity=1;
			imgs[next].style.opacity=0;
			circles[next].style.background="#b61b1f";
			imgs[next].style.zIndex=1;
			animate(imgs[n],{opacity:0},1000);
			animate(imgs[next],{opacity:1},1000,function(){flag=true});
			n=next;
		}
		function move1(){
			if(!flag){
				return;
			}
			flag=false;
			next=n-1;
			if(next<0){
				next=imgs.length-1;
			}
			for(var i=0;i<imgs.length;i++){
				circles[i].style.background="#3e3e3e";
				imgs[n].style.opacity=1;
				imgs[next].style.opacity=0;
			}
			circles[next].style.background="#b61b1f";
			imgs[next].style.zIndex=1;
			animate(imgs[n],{opacity:0},1000);
			animate(imgs[next],{opacity:1},1000,function(){flag=true});
			n=next;
		}
		box.onmouseover=function(){
			clearInterval(t);
			left.style.display="block"
		    right.style.display="block"
		}
		box.onmouseout=function(){
			t=setInterval(move,3000);
			left.style.display="none"
		    right.style.display="none"
		}
		right.onclick=function(){
			move();
		}
		left.onclick=function(){
			move1();
		}
		for(var i=0;i<imgs.length;i++){
			circles[i].index=i;
			circles[i].onmouseover=function(){
				for(var j=0;j<circles.length;j++){
					circles[j].style.background="#3e3e3e";
					imgs[n].style.opacity=1;
				    imgs[this.index].style.opacity=0;
				}
					circles[this.index].style.background="#b61b1f";
					imgs[this.index].style.zIndex=1;
					animate(imgs[n],{opacity:0},1000);
					animate(imgs[this.index],{opacity:1},1000);
					n=this.index;
		    }
		}

       

        var cha=$(".chacha")[0];
        cha.onclick=function () {
	   	var xiaoshi=$(".top-img")[0];
	   	xiaoshi.style.display="none"
	   }






 

        var windows=$(".window")[0];
    	var big=$(".slider")[0];
    	var div=$(".done");
    	var width=div[0].offsetWidth;
    	var slider=$(".right-slider")[0];
    	var slidel=$(".left-slider")[0];
    	var flag=true;
    	var r=setInterval(slide,3000);
    	function slide(){
    		if(!flag){
    			return;
    		}
    		flag=false;
    		animate(big,{left:-4*width},200,function(){
    			var first=getFirst(big);
    			big.appendChild(first);
    			big.style.left=0;
    			flag=true;
    		})
    	}
    	function slide1(){
    		if(!flag){
    			return;
    		}
    		var first=getFirst(big);
    		var last=getLast(big);
    		insertBefore(last,first);
    		big.style.left=-4*width+"px";
    		animate(big,{left:0},200,function(){flag=true})
    	}
    	windows.onmouseover=function(){
    		clearInterval(r);
    		slider.style.display="block"
		    slidel.style.display="block"
    	}
    	windows.onmouseout=function(){
    		r=setInterval(slide,1000);
    		slider.style.display="none"
		    slidel.style.display="none"
    	}
    	slider.onclick=function(){
    		slide();
    	}
    	slidel.onclick=function(){
    		slide1();
    	}
    	
        


        var zong=$(".fore6");
		var zongs=$(".phonejd");
		var zongb=$(".zong-b");
		var zongt=$("#change");
		for(var i=0;i<zong.length;i++){
			zong[i].index=i;
			zong[i].onmouseover=function(){
				for(var j=0;j<zong.length;j++){
					zongb[j].style.display="none";
				}
				zongb[this.index].style.display="block";
			}
			zong[i].onmouseout=function(){
				for(var j=0;j<zong.length;j++){
					zongb[j].style.display="none";
				}
				zongb[this.index].style.display="none";
			}
		}





		var gz=$(".fore3 gu");
		var gzs=$(".myjd");
		var gzb=$(".weixin");
		var gzt=$("#vairey");
		for(var i=0;i<gz.length;i++){
			gz[i].index=i;
			gz[i].onmouseover=function(){
				for(var j=0;j<gz.length;j++){
					gzb[j].style.display="none";
				}
				gzb[this.index].style.display="block";
			}
			gz[i].onmouseout=function(){
				for(var j=0;j<gz.length;j++){
					gzb[j].style.display="none";
				}
				gzb[this.index].style.display="none";
			}
		}






       //我的京东隐藏

		var my=$(".fore3 my");
		var mys=$(".myjdlog");
		var myb=$(".user");
		var myt=$(".useinfo");
		for(var i=0;i<my.length;i++){
			my[i].index=i;
			my[i].onmouseover=function(){
				for(var j=0;j<my.length;j++){
					myb[j].style.display="none";
				}
				myb[this.index].style.display="block";
			}
			my[i].onmouseout=function(){
				for(var j=0;j<my.length;j++){
					myb[j].style.display="none";
				}
				myb[this.index].style.display="none";
			}
		}



        // 地址隐藏
		var address=$(".head-left");
		var addresss=$(".dropdown");
		var addressb=$(".cities");
		var addresst=$("#city");
		for(var i=0;i<address.length;i++){
			address[i].index=i;
			address[i].onmouseover=function(){
				for(var j=0;j<address.length;j++){
					addressb[j].style.display="none";
				}
				addressb[this.index].style.display="block";
			}
			address[i].onmouseout=function(){
				for(var j=0;j<address.length;j++){
					addressb[j].style.display="none";
				}
				addressb[this.index].style.display="none";
			}
		}


		// 网站导航
		var webteseb=$(".danghangtext")[0];
		var webteset=$(".web")[0];
		
			webteset.onmouseover=function(){
				webteseb.style.display="block";
			}
			webteset.onmouseout=function(){
				
				webteseb.style.display="block";
			}
			webteseb.onmouseover=function(){
				webteseb.style.display="block";
			}
			webteseb.onmouseout=function(){
				
				webteseb.style.display="none";
			}

     
       //客户服务隐藏

        var kehub=$(".kehu")[0];
		var kehut=$(".kehuserver")[0];
		
			kehut.onmouseover=function(){
				kehub.style.display="block";
			}
			kehut.onmouseout=function(){
				
				kehub.style.display="block";
			}
			kehub.onmouseover=function(){
				kehub.style.display="block";
			}
			kehub.onmouseout=function(){
				
				kehub.style.display="none";
			}





       // var hover=$(".hover");
       // var dropdown=$(".dropdown");
       // for(var  i=0;i<hover.length;i++){
       // 	hover[i].index=i;
       // 	hover[i].onmouseover=function(){
       // 		dropdown[this.index].style.display="block";

       // 	}
       // 	hover[i].onmouseout=function(){
       // 		hover[this.index].style.display="none";
       // 	}
       // }

//菜单隐藏开始
   var bannerleftlis=$(".item")
   var cebianlan=$(".cebianlan-box")
   for (var i = 0; i < bannerleftlis.length; i++) {
   	bannerleftlis[i].index=i;
   	bannerleftlis[i].onmouseover=function(){
   		cebianlan[this.index].style.display="block"
   	}
   	bannerleftlis[i].onmouseout=function(){
   		cebianlan[this.index].style.display="none"
   	}
   }
   for (var i = 0; i < cebianlan.length; i++) {
   		cebianlan[i].index=i;
   	cebianlan[i].onmouseover=function(){
   		cebianlan[this.index].style.display="block"
   	}
   	cebianlan[i].onmouseout=function(){
   		cebianlan[this.index].style.display="none"
   	}
   }; 




//菜单隐藏结束

//滚动晒单开始
        var bookhe=$(".liuyan")[0];
        var message=$(".updownmove;");
		var height=$(".updownmove")[0].offsetHeight;
		// console.log(width);
		var flag1=true;
		var shijian=setInterval(gundong,2000)
		function gundong(){
			if(!flag1){
				return;
			}
			flag1=false;
			var first=getFirst(bookhe);
			animate(bookhe,{top:-height},1000,function(){
				bookhe.appendChild(first);
				bookhe.style.top=0;
				flag1=true;
			})
		}
		
//滚动晒单结束


// 右边浮动开始
        var nlas=$(".nla");     //图标
		var ntas=$(".nta");     //文字
		for(var i=0;i<nlas.length;i++){
			nlas[i].index=i;
			nlas[i].onmouseover=function(){
	        	// 鼠标放上去当前的图标的函数
	    		var ww=nlas[this.index].offsetWidth;
	    		nlas[this.index].background="#c81623"
	   			animate(ntas[this.index],{right:ww},700)
			}
			nlas[i].onmouseout=function(){
				// 鼠标离开的函数
				animate(ntas[this.index],{right:-35},700)
			}
		}
//右边浮动结束



// 封装轮播
        var box=document.querySelectorAll(".img-box");
        console.log(box)
        for(var i=0;i<box.length;i++){
        	lunbo(box[i]);
        }
//选项卡
    var xxkType=$(".tab-item");
	var xxkin=$(".void");
	var xxk=document.querySelectorAll(".xxk");
	// console.log(xxk.length);
	// console.log(xxkType.length);
	// console.log(xxk.length);
	for(var i=0;i<xxkType.length;i++){
		xxkType[i].index=i;
		xxk[i].style.zIndex=0;
		xxkin[i].style.display="none";
		xxkType[i].onmouseover=function(){
			xxkin[this.index].style.display="block";
			xxk[this.index].style.zIndex=1;
		}
		xxkType[i].onmouseout=function(){
			xxkin[this.index].style.display="none";
			xxk[this.index].style.zIndex=0;
		}
	}

	for(var i=0;i<xxk.length;i++){
		xxk[i].index=i;
		xxk[i].onmouseover=function(){
			xxkin[this.index].style.display="block";
			xxk[this.index].style.zIndex=1;
		}
		xxk[i].onmouseout=function(){
			xxkin[this.index].style.display="none";
			xxk[this.index].style.zIndex=0;
		}
	}



//封装楼层开始		
    var floor = $(".floor");
	var lis = $(".flis");
	var fudong = $(".floorbox")[0];
	var cw = document.documentElement.clientWidth;
	var ch = document.documentElement.clientHeight;
	var bh = fudong.offsetHeight;
	var hidePng = $('.hide-png');
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
				animate(hidePng[i],{height:0},500)
			}
			lis[this.index].style.color = "#fff" 
			lis[this.index].style.background = "#C81623"
			lis[this.index].style.fontSize = 12+"px";
			var aa = lis[this.index].getAttribute("aa");
			lis[this.index].innerHTML=aa;
			animate(hidePng[this.index],{height:25},500)
			// 获取自定义属性，并将该属性赋值给当前所在框
		}
	}
     

     //滚动条事件
	window.onscroll=function(){
		if(!sign){
			return;
		}
		var obj=document.documentElement.scrollTop ? document.documentElement : document.body;
		for (var i=0; i<floor.length; i++) {
			if (obj.scrollTop>=(floor[i].offsetTop-ch)) {
				for (var j=0;j<lis.length;j++) {
					lis[j].style.background="#fff"
					lis[j].style.color="#666"
					lis[j].innerHTML=j+1+"F";
					animate(hidePng[j],{height:0},300)
				}
				
				var aa=lis[i].getAttribute("aa");
				lis[i].innerHTML=aa;
				animate(hidePng[i],{height:25},300)
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


//封装楼层结束












    	// var top=$(".top");
    	// var novtwo=$(".novtwo");
    	// for(var i=0;i<novtwo.length;i++){
    	// 	novtwo[i].style.display="none";
    	// 	top[i].index=i;
    	// 	top[i].onmouseover=function(){
    	// 		novtwo[this.index].style.display="block";
    	// 	}
    	// 	top[i].onmouseout=function(){
    	// 		novtwo[this.index].style.display="none";
    	// 	}
    	// }






})