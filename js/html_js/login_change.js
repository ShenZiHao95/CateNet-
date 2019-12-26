/*根据点击的按钮判断是手机号登录还是账号密码登录*/
var isChange = true;

function switch_login_reg(number) {
    let $login_phone_tab = document.getElementById('login_phone_tab');
    let $login_pwd_tab = document.getElementById('login_pwd_tab');
    let $judge_direction_isleft = document.getElementById('judge_direction_isleft');
    let $judge_direction_istop = document.getElementById('judge_direction_istop');
    let $nl_gozc = document.getElementById('nl_gozc');
    if (number == 1) {
        //手机号登录
        $login_phone_tab.className = "current";
        $login_pwd_tab.className = "";
        $judge_direction_isleft.className = "login_box_main left";
    } else if (number == 3) {
        if (isChange) {
            $judge_direction_istop.className = "login_box_reg top";
            $nl_gozc.innerHTML = "已有账号？立即登录";
            isChange = !isChange;
        } else {
            $judge_direction_istop.className = "login_box_reg bottom";
            $nl_gozc.innerHTML = "没有账号？立即注册";
            isChange = !isChange;
        }

    } else {
        //账号密码登录
        $login_phone_tab.className = "";
        $login_pwd_tab.className = "current";
        $judge_direction_isleft.className = "login_box_main right";
    }
}

/*打开第三方链接区域*/
var isOpen = true;

function openThirdLink() {
    let $third_login_link = document.getElementById('third_login_link');
    let $more_dsf_btn = document.getElementById('more_dsf_btn');
    !isOpen ? $third_login_link.style.display = 'none' : $third_login_link.style.display = 'block';
    !isOpen ? $more_dsf_btn.innerHTML = '更多第三方登录' : $more_dsf_btn.innerHTML = '收起';
    !isOpen ? $third_login_link.className = 'third_login_link close' : $third_login_link.className = 'third_login_link open';
    isOpen = !isOpen;
}