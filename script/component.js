Vue.component('button-counter',{

    data:function () {
        return{
            count:0,
            msg:'a'
        }
    },
    template: '<button v-on:click="count++">click  {{ count }} {{ msg }}</button>'

});


Vue.component('blog-title',{

    props:['post'],
    data:function () {
        return {}
    },
    template:'<div class="blog-title" v-bind:style="{fontSize:post.postFontSize+\'px\'}">' +
        '<h4>{{ post.title }}</h4>' +
        '<button v-on:click="post.postFontSize+=1">放大</button>' +
        '<span v-html="post.name"></span>' +
        '</div>'

});

Vue.component('custom-input',{
    props:['value'],
    data:function () {
        return{}
    },
    template:`<input v-bind:value="value" v-on:input="$emit('input',$event.target.value)">`
});


Vue.component('alert-box',{
    template:'<div class="demo-alert-box">' +
        '<strong>Error!</strong>' +
        '<slot></slot>' +
        '</div>'
});

var app = new Vue({
    el:"#app",
    data:{
        list:[
            {'title':'title1','name':'name1','postFontSize':12},
            {'title':'title2','name':'name2','postFontSize':12},
            {'title':'title3','name':'name3','postFontSize':12},
            {'title':'title4','name':'name4','postFontSize':12},
        ],
        'searchText':'aa'
    }
});



Vue.component('tab-home', {
    template: '<div>Home component</div>'
});

Vue.component('tab-posts', {
    template: '<div>Posts component</div>'
});

Vue.component('tab-archive', {
    template: '<div>Archive component</div>'
});

new Vue({
    el: '#dynamic-component-demo',
    data: {
        currentTab: 'Home',
        tabs: ['Home', 'Posts', 'Archive']
    },
    computed: {
        currentTabComponent: function () {
            return 'tab-' + this.currentTab.toLowerCase()
        }
    }
});
