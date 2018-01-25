// 折叠图用

//不带为a大小图轮换
$('#featured').orbit({
frontendWidth: 260,		//最前面图片的宽度 第3张
frontendHeight: 400,            //要显示的高度，不是页面的高度
frontendBorder: '1px solid #d9d9d9',

backendWidth: 230, //第2，4张图片的宽度
backendWidth2: 180, //第1，5张图片的宽度

backendTop: 26,	//第2,4张图片到上面的距离
backendTop2: 55,	// 第1张，最后一张图  到上面的距离
	
frontendLeft: 330,  //第3张图片移动的距离
backendLeft: 145, //第2张图右移动的距离
backendLeft3: 520, //第4张
backendLeft4: 710,//第5张
backendLeft2: 0, //第一张  开始时，第一张在的位置

backendBorder: '1px solid #d9d9d9',
backendBorder2: '1px solid #d9d9d9',

sceneWidth: 980,  //页面显示宽度
sceneHeight: 400,  //页面高度
});	
	

/*带a连接为左右先后展开，
$('#featured').orbit({
frontendWidth: 485,		//frontend Img Width
frontendHeight: 300,
// frontendBorder: '1px solid #d9d9d9',
backendWidth: 170, //backend Img Width 1
backendWidth2: 140, //backend Img Width 2

backendTop: 35,	//backend Img  1 Position
backendTop2: 50,	// backend Img Position 2  

frontendLeft: 200,  //front left
backendLeft: 80, //backend Img  1 left
backendLeft2: 450, //backend Img Position left
backendLeft3: 775, //backend Img  1 rgiht
backendLeft4: 870,// backend Img Position right 

// backendBorder: '0 solid #d9d9d9',	 
// backendBorder2: '1px solid #d9d9d9',
sceneWidth: 1150,
sceneHeight: 300,
});	


*/
