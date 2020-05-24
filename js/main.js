jQuery(document).ready(function(){
    //按回车键获取文本框值
    $('#headerGet').on('keydown',function(e){
            if(e.keyCode == 13){
                var param = $(this).val();
                getDate(param)
            }
    })

    function getDate(param){
        //var result;
        var param = param?param : "北京";
        $.ajax({
        type:'get',
        url:'https://www.tianqiapi.com/free/week',
        data:{
            appid:"76295956",
            appsecret:"2xnOpGxY",
            city:param
        },
        dataType:'jsonp',
        jsonp:'callback',
        
        success:function(json){
            
            console.log(json);
            var html = template('tmp',json);
            $('#ullist').html(html);
           // result=json;
        }

    })
    //return result;
}
   // var obj = getDate();
   // console.log(obj);
})