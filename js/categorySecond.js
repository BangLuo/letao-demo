var  page = 1;
var pageSize = 3;
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



})

function getData() {

    $.ajax({
     type:'get',
     url: `${APP.baseUrl}/category/querySecondCategoryPaging`,
     data: {
         page: page,
         pageSize: pageSize
     },
     success:function (response) {
             //console.log(response);
             var html = template('categorySecondTpl', response );
             //console.log(html);
             //计算总页数  ---response.total 数据总条数
             totalPage = Math.ceil(response.total/pageSize);
             $('#categorySecondTplBox').html(html);
     }

    })
}