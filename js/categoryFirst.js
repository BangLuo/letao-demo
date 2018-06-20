var  page = 1;
var pageSize = 5;
//总页数
var totalPage = null;
$(function () {

    //查询数据 渲染数据
     getData();
     $('#prev').on('click', function () {
        page--;
        if(page < 1){
            page = 1;
            alert('已经是第一页了');
        }
        getData();
     })

     $('#next').on('click', function () {
        page++;

        if(page > totalPage){
            page = totalPage;
            alert('没有更多的数据了')
        }
         getData()
     })

     $('#addCategoryConfirm').on('click' , function () {

        var categoryName = $.trim($('#addCategoryInput').val() );

        if(categoryName){
            //console.log(categoryName);
            addCategoryFn(categoryName);
        }else{
            alert('您还没有输入内容');
            return;
        }
     })





});
//查询数据  计算总条数 进行展示
function getData() {
    $.ajax({
     type:'get',
     url: `${APP.baseUrl}/category/queryTopCategoryPaging`,
     data: {
         page: page,
         pageSize: pageSize
     },
     success:function (response) {
            // console.log(response);
             if(response.error){
                location.href = "login.html"
             }else{

             var html = template('categoryFirstTpl', response );
            // console.log(html);
             $('#categoryFirstTplBox').html(html);

            }
            //计算总页数  ---response.total 数据总条数
            totalPage = Math.ceil(response.total/pageSize);


     }

    })

}

//添加一级分类
function addCategoryFn(categoryName) {
    $.ajax({
        type:'post',
        url: `${APP.baseUrl}/category/addTopCategory`,
        data:{
            categoryName: categoryName
        },
        success: function(response) {
            if(response.success){
                location.reload();
            }else{
                alert('您没有添加成功');
            }
        }
    })
}