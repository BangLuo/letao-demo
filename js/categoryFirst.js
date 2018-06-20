$(function () {

    //
    $.ajax({
     type:'get',
     url: `${APP.baseUrl}/category/queryTopCategoryPaging`,
     data: {
         page: 1,
         pageSize: 10
     },
     success:function (response) {
             console.log(response);

             var html = template('categoryFirstTpl', response );
             console.log(html);
             $('#categoryFirstTplBox').html(html);
     }

    })




});