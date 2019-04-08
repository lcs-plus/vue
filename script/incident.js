var app = new Vue({
    el:"#app",
    data:{
        num:0,
    },
    methods:{
        ss:function (msg,event) {

            //alert(this.num);
            this.num += 1;
            console.log(event);
        },
        doTh:function () {
            alert('a');
        }
    }
});
