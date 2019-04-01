var app = new Vue({
    el:"#app",
    data:{
        message:new Date().toLocaleString()
    }
});

var app1 = new Vue({
    el:"#app1",
    data:{
        seen:true,
    }
});

var app2 = new Vue({
    el:"#app2",
    data:{
        list:[
            {name:'张三'},
            {name:'李四'},
            {name:'王五'},
            {name:'赵柳'},
        ]
    },
});

var app3 = new Vue({
    el:"#app3",
    data:{
        msg:0,
    },
    methods:{
        reverseMsg:function () {
            this.msg=parseInt(this.msg) + parseInt(20);
        }
    }
});
