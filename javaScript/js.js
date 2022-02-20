function insertHandler(){
    if($('text').val()=='') {
        alert('留言内容不能为空');
        return false;
    }
    var localTime=new Date();
    var year = localTime.getFullYear();
    var month=localTime.getMonth()+1;
    var date = localTime.getDate();
    var hour=localTime.getDate();
    var minutes=localTime.getMinutes();
    var seconds=localTime.getSeconds();
    if(Math.floor(month/10)!=1) month='0'+month;
    if(Math.floor(date/10)==0) date='0'+date;
    if(Math.floor(hour/10)==0) hour='0'+hour;
    if(Math.floor(minutes/10)==0) minutes='0'+minutes;
    if(Math.floor(seconds/10)==0) seconds='0'+seconds;
    var postTime=year+'-'+month+'-'+date+'  '+hour+':'+minutes+':'+seconds;
    $('#postTime').val(postTime);
    $.ajax({
        type:'GET',
        url:'/留言板/.do',
        data:$('form').serialize()
    });
    $(document).ajaxStart(function(){
        $('#remind').text('正在发送……').show();
    });
    $(document).ajaxStop(function(){
        $('#reset').trigger('click');
        $('#remind').text('留言成功!').fadeOut(5000);
    
    });
}