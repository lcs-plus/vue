var app = new Vue({
    el: "#app",
    data: {
        message: "Hello",
        msg:'abc'
    },
    computed:{
        reversedMessage:function () {

            return this.message.split('').reverse().join('');

        }
    },
    methods: {
        reversedMessage:function () {

            return this.message.split('').reverse().join('');

        },

        b:function(){
            return Date.now()
        },

        a:function () {
            return "aa";
        }

    }
});

//console.log(app.reversedMessage);


var app1=new Vue({
   el:"#demo",
   data:{
       first_name:'a',
       second_name:'b',
   },
    computed: {
        // full_name:function() {
        //     return this.first_name+ ' ' + this.second_name;
        // }

        full_name:{
            get:function () {
                return this.first_name+ ' ' + this.second_name;
            },
            set:function (newValue) {
                var names = newValue.split(' ');
                this.first_name = names[0];
                this.second_name=names[names.length-1];

            }
        }

    }
});











