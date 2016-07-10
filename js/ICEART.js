// JavaScript Document
function renovates(){
   	document.location.reload();
}
$(function(){
	
	$('.support').addClass('in');
	
	$('.close').click(function(){
		$('.support').removeClass('in').addClass('out');	
	})
	
	var offset = $(document).innerWidth()/2;
	var offsetW = ($(document).width()-1600)/2
		
	$(document).on('mousemove',function(ev){
		var e = ev || window.event;
		
			$('#banner').css({
				'background-position':	(e.clientX*(offsetW/offset)) +'px 0px'
			})
	});
	
	
	var shows =	$('.showf li');
	var sh_W = $('.showf li').eq(0).width();	 
	var aBtn = $('.button a');
	var _index = 0;
	var timer = 0;
	var num = 0;
	shows.each(function(i,elem){
		if(i == 0){
			return 
		};	
		$(elem).css({
			left: sh_W
		});
	});
	
	timer = setInterval(tab,2500);

	function tab(){
		num++;
		if(num >= shows.length){
			shows.eq(0).css({
				left:sh_W
			});
			num = 0;
			shows.eq(num).stop().animate({
				left:0
			},500);
			shows.eq(shows.length-num-1).stop().animate({
				left:-sh_W
			},500);
		}else{
			
			shows.eq(num%shows.length).css({
				left:sh_W
			});
			
			shows.eq(num-1).stop().animate({
			//上一个
				left:-sh_W
			},500);
			
			//下一个		
			shows.eq(num).stop().animate({
				left:0
			},500);
		}
		
		aBtn.eq(num).addClass('btn'+num+'_fire').siblings().removeClass('btn'+_index+'_fire');	
		_index = num;
	}
	
	aBtn.click(function(){
		num = $(this).index();

		aBtn.eq(num).addClass('btn'+num+'_fire').siblings().removeClass('btn'+_index+'_fire');
		if(num > _index){
			shows.eq(num).css({
				left:sh_W
			});
			shows.eq(_index).stop().animate({
				left:-sh_W
			},500);
			shows.eq(num).stop().animate({
				left:0			
			},500);
			
		}else if(num < _index){ 
			shows.eq(num).css({
				left:-sh_W
			});
			shows.eq(_index%9).stop().animate({
				left:sh_W
			},500);
			
			shows.eq(num).stop().animate({
				left:0
			},500);
		}
		_index = num;	
	
	});
	
	
	$('.case li').hover(function(){
		$('.bg_case',this).stop().animate({
			bottom: 30
		},400);
		$('.X',this).stop().css({
			left: 50	
		}).animate({
			left: 80
		},400).show();
		$('.Y',this).stop().css({
			right: 50	
		}).animate({
			right: 80
		},400).show();
		$('.fire',this).show();
	},function(){
		$('.bg_case',this).stop().animate({
			bottom: 14
		},400);
		$('.X, .Y, .fire',this).hide();
	});
	function foot_scroll()
	{
		if($(document).scrollTop() < ($(document).height()-$(window).height())*0.7 )
		{
			$('.footer').animate({
				'bottom':'-278px'
			},800,
			function(){
				setTimeout(foot_scroll,500);
			});
		}
		else
		{
			$('.footer').animate({
				'bottom':'0px'
			},800,
			function(){
				setTimeout(foot_scroll,500);
			});
		}
	}
	foot_scroll();
	
	var out = $('#out_m');
	var aS = out.find('a');
	var str = '';
	for(var i = 0;i < 5; i++){
		str += '<a href="javascript:;" style="background: url(img/out_btn.png) no-repeat '+i%5*-125+'px '+0+'px;" class="otn'+i+'"><span></span>		</a>';
		
	}
	out.html(str);
	
})
	
	
$(function(){
	var ul = $('#oUl');
	var lis = ul.find('li');
	var pos = [];
	
	//布局转换
	lis.each(function(i,elem){
		pos[i] = {
			left:elem.offsetLeft,
			top:elem.offsetTop
		}
	});
	lis.each(function(i,elem){
		$(elem).css({
			left:pos[i].left,
			top:pos[i].top,
			position:'absolute',
			margin:0
		});
		elem.dataset.index = i;
		Drag(lis[i]);
	});


	var zIndex = 2;
	//拖拽
	function Drag(obj){
		$(obj).on('mousedown',function(ev){
			var minObj = null;//碰撞之后最小到li
			$(obj).css({zIndex:zIndex++})
			
			var disX = ev.pageX - $(obj).position().left;
			var disY = ev.pageY - $(obj).position().top;
			
			$(document).on('mousemove',function(ev){
				var arr = [];  //将碰撞到到li，push到数组中
				var min = Infinity; //求出最小到。
				
				lis.each(function(i,elem){
					if(obj == elem){return};//把自己排除。
					if(Bong(obj,elem)){
						arr.push(elem);
						//$(elem).addClass('active');
					}
				});
				
				$.each(arr,function(i,elem){
					var L = obj.offsetLeft - arr[i].offsetLeft;
					var T = obj.offsetTop - arr[i].offsetTop;
					
					//求c边  勾股定理
					var sqrt = Math.sqrt(Math.pow(L,2)+Math.pow(T,2))//开方;
					
					if(min > sqrt){
						min = sqrt;
						minObj = elem
					}
					lis.removeClass('active');
					if(minObj){
						$(minObj).addClass('active');
					}
					//console.log(minObj)
				});
				
				//console.log(arr)
				$(obj).css({
					left:ev.pageX - disX,
					top:ev.pageY - disY
				});
			});
			
			$(document).on('mouseup',function(){
				if(minObj){
					$(minObj).animate({
						left:pos[obj.dataset.index].left,
						top:pos[obj.dataset.index].top
					});
					
					$(obj).animate({
						left:pos[minObj.dataset.index].left,
						top:pos[minObj.dataset.index].top
					});
					
					var temp = minObj.dataset.index;
					
					minObj.dataset.index = obj.dataset.index;
					
					obj.dataset.index = temp;
					
					lis.removeClass('active');
				}else{
					$(obj).animate({
						left:pos[obj.dataset.index].left,
						top:pos[obj.dataset.index].top
					});
				}
				//console.log(minObj)
				$(this).off();
			})
			return false;
		});
	}
	
	//点击
	
	$('#btn').click(function(){
		pos.sort(function(){
			return Math.random() - 0.5;
		});
		lis.each(function(i,elem){
			$(elem).animate({
				left:pos[i].left,
				top:pos[i].top
			});
			lis[i].dataset.index = i;//重置索引
		});
	});
	
	function Bong(obj1,obj2){
	 	var left1 = obj1.offsetLeft;
		var right1 = left1 + obj1.offsetWidth;
		var top1 = obj1.offsetTop;
		var bom1 = top1 + obj1.offsetHeight;
		var left2 = obj2.offsetLeft;
		var right2 = left2 + obj2.offsetWidth;
		var top2 = obj2.offsetTop;
		var bom2 = top2 + obj2.offsetHeight;
		if(right1 < left2 || bom1 < top2 || left1 > right2 || top1 > bom2){ //没碰到
			//没碰到
			return false;
		}else{
			//碰到
			return true;
		}
 	}
})


$(function(){
	var box = $('.boxs');
	var list = $('.list');
	var str ="";
	num = 0;
	for(var i=0;i<36;i++) {
		str+='<div style="background: url(img/bg1.jpg) '+((i%6)*-100)+
			  'px '+(parseInt(i/6)*-100)+'px;position:absolute;left:'+((i%6)*100)+
			  'px;top:'+(parseInt(i/6)*100)+'px;"></div>';
	}
	box.html(str);
	var div = box.find('div');

	div.click(function(){
		list.append('<li style="background: url(img/bg1.jpg) '+(($(this).index()%6)*-100)+
					'px '+(parseInt($(this).index()/6)*-100)+'px;"></li>')	
			div.eq($(this).index()).addClass("div");
			div.eq($(this).index()).unbind("click");
	})
})