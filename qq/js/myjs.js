window.onload = function(){
	var off = null;
	console.log($('.p1div')[0])
	//$('.p1div').click(function(){
		//alert(1);
	//});
	$('#bg')[0].style.transform = 'scale(1) rotateZ(0deg)';
	var lbody = $('body').innerWidth();
	//console.log($('#rMoveA div')[0])
	$('#rMoveA div')[0].style.background = '#4d94ff';
	$('.p1img2')[0].style.transform = 'translateZ(0)';
	var num = 0;
	wheel1();
	//var arr = [wheel1(),wheel2(),wheel3(),wheel4()];
	addWhell(document,function(down){
		
		if(down && off){//console.log(num%4+1)
			$('#rMoveA div').css('background','#c2c2d6');
			num--;console.log(num%4+1)
			if(num%4+1 <= 0 || num%4+1 >= 4){
				num = 0;
				$('#rMoveA div')[num%4].style.background = '#4d94ff';
				return;
			}
			//console.log(num)
			$('#rMoveA div')[num%4].style.background = '#4d94ff';
			if(num%4+1 == 1){//console.log(num)
				off = false;
				setTimeout(function(){
					$('.p2move').css('transition','0s');
					$('.p2move').css('transform','translateZ(-6000px) translateX(-4000px) translateY(1000px) rotateY(-180deg) rotateX(-90deg)')
					$('.p2move').css('opacity','0');
				
					$('.p2num').css('transition','0s');
					$('.p2num').css('transform','translateZ(-6000px)');
					$('.p2num').css('opacity','0');
					off = true;
				},4000)
				
				$('.p2num').css('transform','translateZ(1000px)');
				setTimeout(function(){
					wheel1();
				},2000)
			}
			if(num%4+1 == 2){
				off = false;
				
				setTimeout(function(){
					off = true;
					wheel2();
					
				},1500)
				//$('#p3nav').fadeTo(1000,1);
				$('.p3img').css('transition','1.5s');
				$('.p3img').css('transform','translateZ(50px) translateX(1500px) rotateY(45deg)');
				$('.p3Bimg').css('transition','1.5s');
				$('.p3Bimg').css('transform','translateZ(50px) translateX(-3000px) translateY(100px) rotateY(-45deg)');
			}
			if(num%4+1 == 3){//console.log(1)
				off = false;
				
				
				wheel3();
			
				$('#p3nav').fadeTo(1000,0);
				$('.p4Timg1').css('transition','2s');
				$('.p4Timg1').css('transform','rotateY(-60deg) translateZ(800px) translateX(800px) rotateX(120deg) scale(0.1)');
				$('.p4Timg2').css('transition','2s');
				$('.p4Timg2').css('transform','rotateY(-60deg) translateZ(800px) translateX(800px) rotateX(120deg) scale(0.1)');
				$('.p4Timg3').css('transition','2s');
				$('.p4Timg3').css('transform','rotateY(-60deg) translateZ(800px) translateX(800px) rotateX(120deg) scale(0.1)');
				$('.p4Timg4').css('transition','2s');
				$('.p4Timg4').css('transform','rotateY(-60deg) translateZ(800px) translateX(800px) rotateX(120deg) scale(0.1)');
				$('.p4Bimg').css('transition','2s');
				$('.p4Bimg').css('opacity','1');
				$('.p4Bimg').css('transform','rotateY(-60deg) translateZ(800px)');
				$('.p4word').css('transition','2s');
				$('.p4word').css('opacity','0');			
			}
			//console.log(num)  // 1+1
			if(num%4+1 == 4){//console.log(num)
				off = false;
				
				setTimeout(function(){
					off = true;
					wheel4();
					
				},2000)
				
				
			}
		}
		if(!down && off){
			$('#rMoveA div').css('background','#c2c2d6');
			num++;
			//console.log(num%4+1)
//			for(var i = 0; i < arr.length; i++){
//				if()
//			}
			$('#rMoveA div')[num%4].style.background = '#4d94ff';
			if(num%4+1 == 1){
				wheel1();
				//clearTimeout(timer);
			}
			if(num%4+1 == 2){
				wheel2();
			}
			if(num%4+1 == 3){
				wheel3()
			}
			if(num%4+1 == 4){
				wheel4();
			}
			
			
			//$('.p2num').css('transition','1s');
			//$('.p2num').css('transform','');
		}
	});
	function wheel4(){//console.log($('.p3img')[0])
		off = false;
		$('#p3nav').fadeTo(1000,1);
		$('.p3img').css('transition','1.5s');
		$('.p3img').css('transform','translateZ(50px) translateX(1500px) rotateY(45deg)');
		$('.p3Bimg').css('transition','1.5s');
		$('.p3Bimg').css('transform','translateZ(50px) translateX(-3000px) translateY(100px) rotateY(-45deg)');
		$('.p4Timg1').css('transition','2s');
		$('.p4Timg1').css('transform','rotateY(0) translateZ(0) translateX(0) rotateX(0) scale(1)');
		$('.p4Timg2').css('transition','2s');
		$('.p4Timg2').css('transform','rotateY(0) translateZ(0) translateX(0) rotateX(0) scale(1)');
		$('.p4Timg3').css('transition','2s');
		$('.p4Timg3').css('transform','rotateY(0) translateZ(0) translateX(0) rotateX(0) scale(1)');
		$('.p4Timg4').css('transition','2s');
		$('.p4Timg4').css('transform','rotateY(0) translateZ(0) translateX(0) rotateX(0) scale(1)');
		$('.p4Bimg').css('transition','2s');
		$('.p4Bimg').css('opacity','1');
		$('.p4Bimg').css('transform','rotateY(0) translateZ(0)');
		$('.p4word').css('transition','2s');
		$('.p4word').css('opacity','1');
		var timer = setTimeout(function (){//console.log(1)
			off = true;
		},2000);
	}
	function wheel3() {//console.log(off)
		
		off = false;
		setTimeout(function(){
			$('.p2move').css('transition','0s');
			$('.p2move').css('transform','translateZ(-6000px) translateX(-4000px) translateY(1000px) rotateY(-180deg) rotateX(-90deg)')
			$('.p2move').css('opacity','0');
			$('.p2move').css('transition','0s');
			$('.p2num').css('transition','0s');
			$('.p2num').css('transform','translateZ(-6000px)');
			$('.p2num').css('opacity','0');
		},2000)
		$('.p2num').css('transform','translateZ(1000px)');
		setTimeout(function(){
			
			
			$('#p3').css('opacity','1');
			$('.p3img').css('transition','1s');
			$('.p3img').css('transform','translateZ(-50px) rotateX(30deg)');
			$('.p3Bimg').css('transition','1.5s');
			$('.p3Bimg').css('transform','translateZ(-50px) translateX(-400px) translateY(180px)');
			
		},1500);
		setTimeout(function(){
			off = true;
		},3000);

	}
	
	function wheel2() {
		off = false;
		$('.p1img2').css('transition','translateZ(500px)');
		$('#donwlond').fadeTo(1000,1);
		$('.p1img2').css('transition','1s');
		$('.p1img2').css('opacity','0');
		$('.p1div').fadeTo(1000,0);
		$('.p1img1').fadeTo(1000,0);
		$('#bg').css('transform','translateX(0) scale(2) rotateZ(-65deg)');
		setTimeout(function(){
			$('.p2num').css('transition','2s');
			$('.p2num').css('transform','translateZ(-500px)');
			$('.p2num').css('opacity','1');
		},1600)
		$('.clock3').css('transition','3s');
		$('.clock3').css('transform','rotateZ(360deg)')
		$('.p2move').css('transition','1s');
		$('.p2move').css('transform','translateZ(-2000px) translateX(-200px) translateY(-200px) rotateY(-70deg) rotateX(-315deg)')
		$('.p2move').css('opacity','1');//console.log($('.p2move').css('transform'))
		setTimeout(function(){
			$('.p2move').css('transform','translateZ(1000px) translateX(0) translateY(200px) rotateY(0deg)')
		},900);
		var timer = setTimeout(function (){//console.log(1)
			$('.clock3').css('transform','rotateZ(0)');
			//$('.clock3').css('transform','scale(0)')
			off = true;
		},3600);
	}
	function wheel1() {
		off = false;
		$('#p3nav').fadeTo(1000,0);
		$('#donwlond').fadeTo(1000,0);
		$('#bg').css('opacity','1');
		$('#bg').css('transform','translateX(0) scale(1) rotateZ(0)');
		$('#donwlond').fadeTo(1000,0);
		$('.p4Timg1').css('transition','2s');
		$('.p4Timg1').css('transform','rotateY(-60deg) translateZ(800px) translateX(800px) rotateX(120deg) scale(0.1)');
		$('.p4Timg2').css('transition','2s');
		$('.p4Timg2').css('transform','rotateY(-60deg) translateZ(800px) translateX(800px) rotateX(75deg) scale(0.1)');
		$('.p4Timg3').css('transition','2s');
		$('.p4Timg3').css('transform','rotateY(-60deg) translateZ(800px) translateX(800px) rotateX(120deg) scale(0.1)');
		$('.p4Timg4').css('transition','2s');
		$('.p4Timg4').css('transform','rotateY(-60deg) translateZ(800px) translateX(800px) rotateX(120deg) scale(0.1)');
		$('.p4Bimg').css('transition','2s');
		$('.p4Bimg').css('opacity','1');
		$('.p4Bimg').css('transform','rotateY(-60deg) translateZ(800px)');
		$('.p4word').css('transition','2s');
		$('.p4word').css('opacity','0');
		var timer = setTimeout(function (){
			$('.p1img2').css('opacity','1');
			$('.p1img2').css('transition','translateZ(0)');
			$('.p1img1').fadeTo(100,1);
			$('.p1div').fadeTo(200,1);
			function fn1(){
//				$('.row1 div').each(function(i,elem){
//					$(elem).css('transition','translateX()')
//				});
				$('.row1 div').each(function(i,elem){
					$(elem).animate({
						left: -$(this).outerWidth(false),
						},{
							duration:($(this).offset().left)*40,
							easing:'swing',
							complete:function(){
									$('.row1 div').each(function(i,elem){//console.log($('body').innerWidth())
										if(parseFloat($(elem).css('left')) <= 0){
											$(this).css('left',$('body').innerWidth());
										};fn1();
									})
								}
						})
				})
			};fn1();
			function fn2(){
				$('.row2 div').each(function(i,elem){
					$(elem).animate({
						left: -$(this).outerWidth(false),
						},{
							duration:($(this).offset().left)*40,
							easing:'swing',
							complete:function(){
									$('.row2 div').each(function(i,elem){//console.log(parseFloat($(elem).css('left')))
										if(parseFloat($(elem).css('left')) <= 0){
											$(this).css('left',$('body').innerWidth());
										};fn2();
									})
								}
						})
				})
			};fn2();
			function fn3(){
				$('.row3 div').each(function(i,elem){
					$(elem).animate({
						left: -$(this).outerWidth(false),
						},{
							duration:($(this).offset().left)*40,
							easing:'swing',
							complete:function(){
									$('.row3 div').each(function(i,elem){//console.log(parseFloat($(elem).css('left')))
										if(parseFloat($(elem).css('left')) <= 0){
											$(this).css('left',$('body').innerWidth());
										};fn3();
									})
								}
						})
				})
			};fn3();
			function fn4(){
				$('.row4 div').each(function(i,elem){
					$(elem).animate({
						left: -$(this).outerWidth(false),
						},{
							duration:($(this).offset().left)*40,
							easing:'swing',
							complete:function(){
									$('.row4 div').each(function(i,elem){//console.log(parseFloat($(elem).css('left')))
										if(parseFloat($(elem).css('left')) <= 0){
											$(this).css('left',$('body').innerWidth());
										};fn4();
									})
								}
						})
				})
			};fn4();
			
		},1000);
		setTimeout(function(){
			off = true;
		},3000);
		
		
		
	};
	
}
