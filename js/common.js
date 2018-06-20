$(function(){
    //右侧菜单下滑效果
	var navLi = $('.navs li')

	navLi.on('click',function(){

		$(this).find('ul').slideToggle();

	});





});



//全局配置
var APP = {
    baseUrl: 'http://fullstack.net.cn:3000',
}


//截取修改地址的id
function getUrlParams(name){
   // console.log(name);
    var search = location.search.slice(1);
    //console.log(search);

    var ary1 = search.split('&');

    for(var i = 0; i < ary1.length; i++) {

       var ary2 = ary1[i].split('=');

        if(ary2[0] == name) {
            return ary2[1];
        }
    }

    return -1;

}

//将表单数据以Json形式返回  $.fn ---> jQuery对象方法扩展

$.fn.serializeToJson = function () {

    //console.log(this.serializeArray);

    var formAry = this.serializeArray();
    //console.log(formAry);
    var result = {};

    formAry.forEach(function (item) {

        //console.log(item);
        result[item.name] = item.value;

    })
    return result;

}
