$(function () {
    layui.use(['element', 'table', 'laydate', 'laypage', 'layer', 'upload'], function () {
        var $ = layui.jquery,
            layer = layui.layer;
        var laypage = layui.laypage; //分页操作
        var laydate = layui.laydate; //日期操作
        var layer = layui.layer; //弹出框操作
        var table = layui.table; //表格操作
        var upload = layui.upload; //文件上传操作
        // Tab栏切换功能
        var element = layui.element; //Tab的切换功能，切换事件监听等，需要依赖element模块
        //触发事件
        var active = {
            tabAdd: function () {
                //新增一个Tab项
                element.tabAdd('demo', {
                    title: '新选项' + (Math.random() * 1000 | 0) //用于演示
                        ,
                    content: '内容' + (Math.random() * 1000 | 0),
                    id: new Date().getTime() //实际使用一般是规定好的id，这里以时间戳模拟下
                })
            },
        };

        //监听表格复选框选择
        table.on('checkbox(demo)', function (obj) {
            console.log(obj)
        });
        //监听工具条
        table.on('tool(demo)', function (obj) {
            var data = obj.data;
            // if (obj.event === 'detail') {
            //     layer.msg('ID：' + data.id + ' 的查看操作');
            // } else if (obj.event === 'del') {
            //     layer.confirm('真的删除行么', function (index) {
            //         obj.del();
            //         layer.close(index);
            //     });
            // } else if (obj.event === 'del') {
            //     layer.alert('编辑行：<br>' + JSON.stringify(data))
            // }
            if (obj.event === 'edit') {
                layer.open({
                    type: 2,
                    skin: 'layui-layer-rim', //加上边框
                    area: ['886px', '539px'], //宽高
                    content: '../../pages/Popup/popup-merge.html',
                    title: '族谱合并',
                    btn: ['取消', '确定']
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
        // 分页
        laypage.render({
            elem: 'demo8', //分页容器的id
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

        //日期范围
        laydate.render({
            elem: '#test6',
            range: true
        });
        //日期时间选择器
        laydate.render({
            elem: '#test5',
            type: 'datetime'
        });

        //普通图片上传
        var uploadInst = upload.render({
            elem: '#test1',
            url: '/upload/',
            before: function (obj) {
                //预读本地文件示例，不支持ie8
                obj.preview(function (index, file, result) {
                    $('#demo1').attr('src', result); //图片链接（base64）
                });
            },
            done: function (res) {
                //如果上传失败
                if (res.code > 0) {
                    return layer.msg('上传失败');
                }
                //上传成功
            },
            error: function () {
                //演示失败状态，并实现重传
                var demoText = $('#demoText');
                demoText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>');
                demoText.find('.demo-reload').on('click', function () {
                    uploadInst.upload();
                });
            }
        });

        // 推送
        $('#push').on('click', function () {
            layer.open({
                type: 2,
                area: ['886px', '539px'],
                shadeClose: true, //点击遮罩关闭
                content: '../../pages/Popup/push.html',
                title: '目前推送'
            });
        });
        // 删除弹框
        $('#clans-del').on('click', function () {
            layer.open({
                type: 1,
                area: ['400px', '240px'],
                shadeClose: true, //点击遮罩关闭
                content: '确认删除吗？',
                title: '删除',
                btn: ['取消', '删除']
            });
        });
        // 定时群发
        $('#time').on('click', function () {
            layer.open({
                type: 2,
                area: ['886px', '424px'],
                shadeClose: true, //点击遮罩关闭
                content: '../../pages/Popup/time.html',
                title: '定时群发'
            });
        });
        //前后若干天可选，这里以7天为例
        var ins22 = laydate.render({
            elem: '#test-limit1',
            min: 0,
            max: 700000000000000,
            ready: function () {
                ins22.hint('抱歉，只能选择未来时间');
            }
        });

    });

})