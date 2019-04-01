Vue.component('tode-item',{
    // template:'<li>这是代办项</li>'
    props:['todo'],
    template:'<li v-bind:data-id="todo.id">{{ todo.text }}</li>'
});

var app1 = new Vue({
   el:"#app",
   data:{
       list:[
           {'id':1,'text':'蔬菜'},
           {'id':2,'text':'水果'},
           {'id':3,'text':'麦子'},
           {'id':4,'text':'其他'},
       ]
   }
});
