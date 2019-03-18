//jq写的nav选项卡效果
// $(".header-2-bottom .nav ").onmouseover(function(){
// 	$(this).addClass("active")
// })
// $(".zh ul li").click(function(){
// 	$(this).addClass("active").siblings().removeClass("active")
// 	var ss=$(this).index()
// 	$(".zh ol li").eq(ss).show().siblings().hide()
	
// 		})
//js实现的下拉菜单显示隐藏的效果

	
		// click1("li01","ul01");
		// click1("li01","ul01");
		// click1("li01","ul01");
		// function myFn(param1,param2){
	 //      var myli = document.getElementById(param1);
	 //      var myul = document.getElementById(param2);
	 //      myli.onmouseover = function(){
	 //        myul.style.display = 'block';
	 //      }
	 //      myli.onmouseout = function(){
	 //         myul.style.display = 'none';
	 //     }
	 //  }
	 //  myFn('li01','ul01');
	 //  myFn('li02','ul02');
	 //  myFn('li03','ul03');
	 //  myFn('li04','ul04');
//限时抢购

window.onload=clock;
function clock(){

}
function a(str){//#box .cls  p
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}

	