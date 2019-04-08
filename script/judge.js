var app = new Vue({
   el:"#app",
   data:{
       isTrue:false,
       isData:false,
   }
});

var app1 = new Vue({
    el:"#app1",
    data:{
        loginType:'username',
        isOk:false,
    },
    methods:{
        trigger:function () {
            if (this.loginType === 'username'){
                this.loginType = 'email';
            } else{
                this.loginType = 'username';
            }
        }
    }
});


var app3 = new Vue({
   el:"#app3",
   data:{
       list:[
           {id:1,name:'a'},
           {id:2,name:'b'},
           {id:3,name:'c'},
           {id:4,name:'d'},
       ],
       object:{
           name:'join',
           age:20,
           sex:'man',
       }
   },
    computed:{
       lister:function () {
           return this.list.filter(function (item) {
               return item.id % 2!==0;
           })
       }
    }
});

Vue.set(app3.list,4,{id:5,name:'e'});






















