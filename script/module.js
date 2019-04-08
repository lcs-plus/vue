var blogTest = {
    props:['post'],
    template:"<div>" +
        "<h1 style='color: aqua;'>{{ post.title }}</h1>" +
        "<span style='color: cornflowerblue' v-html='post.content'></span>" +
        "</div>"
};

var blogMain = {
    props:['post'],
    data:function(){
      return {
          num:0
      }
    },
    components: {
        'blog-test':blogTest
    },
    computed:{
        numSize:function () {
            this.post.title='bbb';
            return Date.now()
        }
    },
    template: "<div><blog-test v-bind:post='post'></blog-test><span>{{ num - numSize }}</span></div>"
};

var blogIndex = {
  props:{
      propA:Number,
      propB:[String,Number],
      propC:{
          type:Number,
          required:true,
      },
      propD:{
          type:Number,
          default:100,
      },
  }
};


var app = new Vue({
    el:"#app",
    data:{
        post:{
            title:'aa',
            content:'bbbbbbbbbbbb',
        },
        list:{
            propA:1,
        }
    },
    components:{
        'blog-test':blogTest,
        'blog-main':blogMain,
        'blog-index':blogIndex,
    }
});














