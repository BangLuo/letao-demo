$(function() {
    //1 登录 按钮点击事件
    //2 获取用户名 密码
    //3 校验用户输入信息
    //4 成功 请求接口
    $('#loginBtn').on('click', function () {

        var result = $('#loginForm').serializeToJson();

        //console.log(result);
        //验证用户名
        if (!$.trim(result.username)){
            alert('请输入用户名');
            return;
        }

        //验证密码
        if (!$.trim(result.password)){
            alert('请输入密码');
            return;
        }

        //发送ajax请求
        $.ajax({
            type: 'post',
            url: `${APP.baseUrl}/employee/employeeLogin`,
            data: result,
            success:function (response) {
                    if(response.success) {
                        location.href = "user.html";
                    }else{
                        alert(response.message);
                    }
            }



        });


    });
});