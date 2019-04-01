var data = {a: "<h1>abcd</h1>", istrue: true};

// Object.freeze(data);

var app = new Vue({
    el: "#app",
    // data:data,
    data: {
        a: "<h1>abcd</h1>",
        istrue: true,
        num:3,
        attbuid:'class',
        url:"https://www.baidu.com",
    },
    created: function () {
        //该实例创建的时候执行
        // alert('start');
    }

});


app.$watch('a', function (newValue, oldValue) {
    alert('b');
});
// app.a=7;
// app.a=2;
// data.a =3;
//
// console.log(app.a);
//
// console.log(data.a);
