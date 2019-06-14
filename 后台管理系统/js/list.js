layui.use(['table', 'laydate', 'laypage', 'layer'], function () {

    var table = layui.table; //表格操作
    var laypage = layui.laypage; //分页操作
    var laydate = layui.laydate; //日期操作
    var layer = layui.layer; //弹出框操作
    //日期范围选择
    laydate.render({
        elem: '#test6',
        range: true //或 range: '~' 来自定义分割字符
    });

    // 分页
    laypage.render({
        elem: 'demo7', //分页容器的id
        count: 1000, //总条数
        layout: ['count', 'prev', 'page', 'next', 'limit', 'skip'],
        //,skip: true //开启跳页
        jump: function (obj, first) {
            if (!first) {
                layer.msg('第' + obj.curr + '页', {
                    offset: 'b'
                });
            }
        }
    });

    var table = layui.table;
    //监听表格复选框选择
    table.on('checkbox(demo)', function (obj) {
        console.log(obj)
    });
    //监听工具条
    table.on('tool(demo)', function (obj) {
        var data = obj.data;
        if (obj.event === 'detail') {
            layer.msg('ID：' + data.id + ' 的查看操作');
        } else if (obj.event === 'del') {
            layer.confirm('真的删除行么', function (index) {
                obj.del();
                layer.close(index);
            });
        } else if (obj.event === 'edit') {

            layer.open({
                type: 2,
                skin: 'layui-layer-rim', //加上边框
                area: ['1000px', '800px'], //宽高
                content: 'popup-merge.html',
                btn: ['取消','确定']
            });
        }
    });

    var $ = layui.$,
        active = {
            getCheckData: function () { //获取选中数据
                var checkStatus = table.checkStatus('idTest'),
                    data = checkStatus.data;
                layer.alert(JSON.stringify(data));
            },
            getCheckLength: function () { //获取选中数目
                var checkStatus = table.checkStatus('idTest'),
                    data = checkStatus.data;
                layer.msg('选中了：' + data.length + ' 个');
            },
            isAll: function () { //验证是否全选
                var checkStatus = table.checkStatus('idTest');
                layer.msg(checkStatus.isAll ? '全选' : '未全选')
            }
        };

    $('.demoTable .layui-btn').on('click', function () {
        var type = $(this).data('type');
        active[type] ? active[type].call(this) : '';
    });

});