// JavaScript Document
/*
	日历-头部的时间
*/
var time1 = document.getElementById('time1');
var time2 = document.getElementById('time2');
var time3 = document.getElementById('time3');
var dateBox = document.getElementById('dateBox');//Ul
var now = 0; //点击下一个或者上一个。

function time(){
	var oDate = new Date();
	var iY = oDate.getFullYear();
	var iMon = oDate.getMonth()+1;
	var iDate = oDate.getDate();
	var iD = oDate.getDay();
	var iH = oDate.getHours();
	var iM = oDate.getMinutes();
	var iS = oDate.getSeconds();
	var arr = ['日','一','二','三','四','五','六'];
	time1.innerHTML = toDou(iH) + ':' + toDou(iM) + ':' + toDou(iS)
	/*
		填写中文日期 
	*/
	time2.innerHTML = toDou(iY) + '年' +  toDou(iMon) + '月' + toDou(iDate)+'日'+', 星期'+arr[iD];
	
}
time();
var timer1 = null;
timer1 = setInterval(time,1000);



creatLi();
function creatLi(){
	/*
		生成空白li 
	*/
	dateBox.innerHTML = '';
	var oDate = new Date();
	/*
		填写日期 2016年6月
	*/
	var iMon = oDate.getMonth()+1;
	
	time3.innerHTML = toDou(oDate.getFullYear()) + '年' +  iMon + '月';
	oDate.setMonth(oDate.getMonth()+now);
	oDate.setDate(1);
	var m = oDate.getDay();
	if(m == 0){
		m = 7;
	}
	m--;//因为要作为循环空白的个数    3 —— 2  4 - 3

	/*
		上个月有多少天 
	*/
	var oDate = new Date();
	oDate.setMonth(oDate.getMonth());
	oDate.setDate(0);
	var prevD = oDate.getDate();//上个月都多少天
	var prevDinnerHTML = prevD - m;
	//console.log(prevD)
	
	
	for(var i=0;i<m;i++){
		var li = document.createElement('li');
		li.className = 'gray';
		li.innerHTML = ++prevDinnerHTML;
		dateBox.appendChild(li);
	}
	
	
	/*
		生成日期 
	*/
	var oDate = new Date();
	var toDay = oDate.getDate();
	//console.log(toDay)
	
	oDate.setMonth(oDate.getMonth()+now);
	oDate.setMonth(oDate.getMonth()+1);
	oDate.setDate(0);//从0开始计算，都多少天
	var d = oDate.getDate();
	iMon = oDate.getMonth()+1;
	
	time3.innerHTML = toDou(oDate.getFullYear()) + '年' +  iMon + '月';
	
	for(var i=0;i<d;i++){
		var li = document.createElement('li');
		li.innerHTML = i+1;
		if(now == 0 && i == toDay-1){
			li.className = 'active';
		}
		dateBox.appendChild(li);
	}
	
	//console.log(d);
	
	/*
		下个月的空白 
	*/
	
	var len = 42; //一共42个格子
	var lis = dateBox.getElementsByTagName('li');
	var nextInnerHTML = len - lis.length; //总共格子 - 现有的
	
	for(var i=0;i<nextInnerHTML;i++){
		var li = document.createElement('li');
		li.className = 'gray';
		li.innerHTML = i+1;
		dateBox.appendChild(li);
	}
}


/*
	点击下一个月 
*/
var porn = document.getElementById('porn');
var prev = porn.children[0];
var next = porn.children[1];

next.onclick = function(){
	now++;
	creatLi();
}
prev.onclick = function(){
	now--;
	creatLi();
}
//console.log(nextInnerHTML)


function toDou(n){
	return n<10?'0'+n:''+n;
}	