$(function () {
    $.ajax({
     type:'get',
     url: `${APP.baseUrl}/category/querySecondCategoryPaging`,
     data: {
         page: 1,
         pageSize: 10
     },
     success:function (response) {
             console.log(response);

             var html = template('categorySecondTpl', response );
             console.log(html);
             $('#categorySecondTplBox').html(html);
     }

    })
})