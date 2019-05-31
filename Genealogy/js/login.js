var phoneReg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/; //手机号正则 
var count = 60; //间隔函数，1秒执行
var InterValObj1; //timer变量，控制时间
var curCount1; //当前剩余秒数
/*第一*/
function sendMessage1() {
    curCount1 = count;
    var phone = $.trim($('#phone1').val());
    if (!phoneReg.test(phone)) {
        alert(" 请输入有效的手机号码");
        return false;
    }
}

function codeButton() {
    var code = $("#code");
    code.attr("disabled", "disabled");
    setTimeout(function () {
        code.css("opacity", "0.8");
    }, 1000)
    var time = 60;
    var set = setInterval(function () {
        code.val("(" + --time + ")秒后重新发送");
    }, 1000);
    setTimeout(function () {
        code.attr("disabled", false).val("重新发送验证码");
        clearInterval(set);
    }, 60000);
}

/*提交*/
function binding() {
    alert(1)
}

//get请求
function get() {
    // 创建异步对象
    var xhr = new XMLHttpRequest();

    // 请求行
    xhr.open('get', 'http://39.98.47.107:9005/user/addUser?key1=value1&key2=value2');

    // 请求头
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // 普通字符串
            console.log(xhr.responseText);
            // json
            console.log(JSON.parse(xhr.responseText));
            // XML
            console.log(xhr.responseXML);
        } else {
            console.log("请求失败")
        }
    }
    // 回调函数

    // 请求主体  发送
    xhr.send(null);
}

