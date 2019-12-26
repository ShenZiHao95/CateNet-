/*切换视频资源*/
function changeVedio( number ){
    let $msj_video = document.getElementById( 'msj_video' );
    switch( number ){
        case 0:
            $msj_video.src = 'images/video/suyu.mp4';
            changeTextContent( '酥鱼的做法' ,'9万次播放 发布时间：2019-10-03');
            break;
        case 1:
            $msj_video.src = 'images/video/rishilmian.mp4';
            changeTextContent( '日式拉面的做法' ,'9万次播放 发布时间：2018-10-01');
            break;
        case 2:
            $msj_video.src = 'images/video/xiangsubing.mp4';
            changeTextContent( '香酥饼的做法' ,'11万次播放 发布时间：2019-04-29');
            break;
        case 3:
            $msj_video.src = 'images/video/zhuganmian.mp4';
            changeTextContent( '猪肝面的做法' ,'9万次播放 发布时间：2019-06-06');
            break;
        case 4:
            $msj_video.src = 'images/video/yugao.mp4';
            changeTextContent( '鱼糕的做法' ,'12万次播放 发布时间：2019-05-17');
            break;
        case 5:
            $msj_video.src = 'images/video/shaozimian.mp4';
            changeTextContent( '哨子面的做法' ,'8万次播放 发布时间：2018-10-03');
            break;
        case 6:
            $msj_video.src = 'images/video/suanmugua.mp4';
            changeTextContent( '酸木瓜的做法' ,'8万次播放 发布时间：2018-10-03');
            break;
        case 7:
            $msj_video.src = 'images/video/taisuniupa.mp4';
            changeTextContent( '台塑牛排的做法' ,'9万次播放 发布时间：2019-12-22');
            break;
        case 8:
            $msj_video.src = 'images/video/zhayushutiao.mp4';
            changeTextContent( '炸鱼薯条的做法' ,'8万次播放 发布时间：2019-10-08');
            break;
        case 9:
            $msj_video.src = 'images/video/nianyudundouf.mp4';
            changeTextContent( '鲶鱼炖茄子的做法' ,'11万次播放 发布时间：2018-08-09');
            break;
    }
}

/*遍历更改对应视频文本内容*/
function changeTextContent( name1 , name2 ){
    let $v_path_name = document.getElementsByClassName( 'v_path_name' );
    $v_path_name[0].innerHTML = name1;
    $v_path_name[1].innerHTML = name1;
    $v_path_name[2].innerHTML = name2;
}