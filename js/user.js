
  //查询用户登录状态 ---登录拦截
   $.ajax({
    type:'get',
    async: false,
    url: `${APP.baseUrl}/employee/checkRootLogin`,
    success:function (response) {
        if(response.error){
            location.href = 'login.html';
        }else{

        }
    }

   })
$(function () {

   //查询用户 展示用户
   $.ajax({
    type:'get',
    url: `${APP.baseUrl}/user/queryUser`,
    data: {
        page: 1,
        pageSize: 100
    },
    success:function (response) {
            console.log(response);

            var html = template('userTpl', response );
            //console.log(html);

            $('#userTplBox').html(html);
    }

   })

   //更新用户状态
   $('#userTplBox').on('click', '.statusBtn', function () {
        var id = $(this).attr('data-user-id');
        var isDelete = $(this).attr('data-user-Status');
        $.ajax({

            type:'post',
            url: `${APP.baseUrl}/user/updateUser`,
            data: {
                id: id,
                isDelete:  isDelete == 1? 0 : 1
            },
            success:function (response) {
                    if (response.success) {
                        location.reload();
                    }else{
                        alert(response.message);
                    }
            }

        })

   } )

})