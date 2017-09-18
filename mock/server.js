var app =  require('koa')();
var router = require('koa-router')();
var koabody = require('koa-body')({multipart: true});

router.get('/', function *(next){
    this.body = 'hello koa !'
});

router.get('/api', function *(next) {
    this.body = 'text data'
});

router.get('/api/1', function *(next){
    this.body = 'test data 1'
});

router.get('/api/search/all/:keyword/:page', function *(next) {
    const params = this.params;
    const category = params.category;
    const keyword = params.keyword;
    const page = params.page;

    console.log(category);
    console.log(keyword);
    console.log(page);

    this.body = {
        data: [
            {
                id: 1001,
                mingcheng: "爆款连衣裙",
                jiage: 100,
                xiaoliang: 50000,
                fengmian: "http://s3.mogucdn.com/mlcdn/917393/170915_0la4g15jb62g7g4828eda14idhjc9_640x900.jpg_468x468.jpg"
            },
            {

                id: 1002,
                mingcheng: "17秋装新款 自留款气质有型 绑带腰带长款全棉衬衫",
                jiage: 75.00,
                xiaoliang: 12,
                fengmian: "http://s3.mogucdn.com/mlcdn/917393/170911_4eg1h54h016ad90h0675752bhd8gh_640x900.jpg_468x468.jpg"
            },
            {

                id: 1003,
                mingcheng: "秋季新品韩版宽松显瘦大码系带蝴蝶结中长款收腰风衣大衣外套",
                jiage: 106.25,
                xiaoliang: 6,
                fengmian: "http://s3.mogucdn.com/mlcdn/917393/170915_42b183ijc3136ga3h88549g4felkb_640x900.jpg_468x468.jpg"
            },
            {

                id: 1004,
                mingcheng: "重工提花雪纺娃娃领衬衫长袖女 宽松多绑带双层仙女秋冬新款上衣",
                jiage: 97.5,
                xiaoliang: 37,
                fengmian: "http://s3.mogucdn.com/mlcdn/917393/170915_1ga239afic2bf706hgggcf63gc527_640x900.jpg_468x468.jpg"
            },
            {

                id: 1005,
                mingcheng: "爆款连衣裙",
                jiage: 54.70,
                xiaoliang: 233,
                fengmian: "http://s3.mogucdn.com/p2/170315/upload_49ek6lkgifkjf70gi4d28b6hh277f_640x900.jpg_468x468.jpg"
            },
            {
                id: 1001,
                mingcheng: "爆款连衣裙",
                jiage: 100,
                xiaoliang: 50000,
                fengmian: "http://s3.mogucdn.com/mlcdn/917393/170915_0la4g15jb62g7g4828eda14idhjc9_640x900.jpg_468x468.jpg"
            },
            {

                id: 1002,
                mingcheng: "17秋装新款 自留款气质有型 绑带腰带长款全棉衬衫",
                jiage: 75.00,
                xiaoliang: 12,
                fengmian: "http://s3.mogucdn.com/mlcdn/917393/170911_4eg1h54h016ad90h0675752bhd8gh_640x900.jpg_468x468.jpg"
            },
            {

                id: 1003,
                mingcheng: "秋季新品韩版宽松显瘦大码系带蝴蝶结中长款收腰风衣大衣外套",
                jiage: 106.25,
                xiaoliang: 6,
                fengmian: "http://s3.mogucdn.com/mlcdn/917393/170915_42b183ijc3136ga3h88549g4felkb_640x900.jpg_468x468.jpg"
            },
            {

                id: 1004,
                mingcheng: "重工提花雪纺娃娃领衬衫长袖女 宽松多绑带双层仙女秋冬新款上衣",
                jiage: 97.5,
                xiaoliang: 37,
                fengmian: "http://s3.mogucdn.com/mlcdn/917393/170915_1ga239afic2bf706hgggcf63gc527_640x900.jpg_468x468.jpg"
            },
            {

                id: 1005,
                mingcheng: "爆款连衣裙",
                jiage: 54.70,
                xiaoliang: 233,
                fengmian: "http://s3.mogucdn.com/p2/170315/upload_49ek6lkgifkjf70gi4d28b6hh277f_640x900.jpg_468x468.jpg"
            }
        ],
        hasMore: true
    }
});
router.get('/api/search/:category/:page', function *(next) {
    const params = this.params;
    const category = params.category;
    const keyword = params.keyword;
    const page = params.page;

    console.log(category);
    console.log(keyword);
    console.log(page);

    this.body = {
        data: [
            {
                id: 1001,
                mingcheng: "爆款连衣裙",
                jiage: 100,
                xiaoliang: 50000,
                fengmian: "http://s3.mogucdn.com/mlcdn/917393/170915_0la4g15jb62g7g4828eda14idhjc9_640x900.jpg_468x468.jpg"
            },
            {

                id: 1002,
                mingcheng: "17秋装新款 自留款气质有型 绑带腰带长款全棉衬衫",
                jiage: 75.00,
                xiaoliang: 12,
                fengmian: "http://s3.mogucdn.com/mlcdn/917393/170911_4eg1h54h016ad90h0675752bhd8gh_640x900.jpg_468x468.jpg"
            },
            {

                id: 1003,
                mingcheng: "秋季新品韩版宽松显瘦大码系带蝴蝶结中长款收腰风衣大衣外套",
                jiage: 106.25,
                xiaoliang: 6,
                fengmian: "http://s3.mogucdn.com/mlcdn/917393/170915_42b183ijc3136ga3h88549g4felkb_640x900.jpg_468x468.jpg"
            },
            {

                id: 1004,
                mingcheng: "重工提花雪纺娃娃领衬衫长袖女 宽松多绑带双层仙女秋冬新款上衣",
                jiage: 97.5,
                xiaoliang: 37,
                fengmian: "http://s3.mogucdn.com/mlcdn/917393/170915_1ga239afic2bf706hgggcf63gc527_640x900.jpg_468x468.jpg"
            },
            {

                id: 1005,
                mingcheng: "爆款连衣裙",
                jiage: 54.70,
                xiaoliang: 233,
                fengmian: "http://s3.mogucdn.com/p2/170315/upload_49ek6lkgifkjf70gi4d28b6hh277f_640x900.jpg_468x468.jpg"
            },
            {
                id: 1001,
                mingcheng: "爆款连衣裙",
                jiage: 100,
                xiaoliang: 50000,
                fengmian: "http://s3.mogucdn.com/mlcdn/917393/170915_0la4g15jb62g7g4828eda14idhjc9_640x900.jpg_468x468.jpg"
            },
            {

                id: 1002,
                mingcheng: "17秋装新款 自留款气质有型 绑带腰带长款全棉衬衫",
                jiage: 75.00,
                xiaoliang: 12,
                fengmian: "http://s3.mogucdn.com/mlcdn/917393/170911_4eg1h54h016ad90h0675752bhd8gh_640x900.jpg_468x468.jpg"
            },
            {

                id: 1003,
                mingcheng: "秋季新品韩版宽松显瘦大码系带蝴蝶结中长款收腰风衣大衣外套",
                jiage: 106.25,
                xiaoliang: 6,
                fengmian: "http://s3.mogucdn.com/mlcdn/917393/170915_42b183ijc3136ga3h88549g4felkb_640x900.jpg_468x468.jpg"
            },
            {

                id: 1004,
                mingcheng: "重工提花雪纺娃娃领衬衫长袖女 宽松多绑带双层仙女秋冬新款上衣",
                jiage: 97.5,
                xiaoliang: 37,
                fengmian: "http://s3.mogucdn.com/mlcdn/917393/170915_1ga239afic2bf706hgggcf63gc527_640x900.jpg_468x468.jpg"
            },
            {

                id: 1005,
                mingcheng: "爆款连衣裙",
                jiage: 54.70,
                xiaoliang: 233,
                fengmian: "http://s3.mogucdn.com/p2/170315/upload_49ek6lkgifkjf70gi4d28b6hh277f_640x900.jpg_468x468.jpg"
            }

        ],
        hasMore: true
    }
});

router.get('/api/detail/:id', function *(next) {

    console.log(this.params.id);
    this.body = {
        id:1002,
        name:"性感露肩一字领挂脖T恤衫打底衫长袖上衣秋装新款",
        jiage:47.50,
        yanse:["http://s3.mogucdn.com/mlcdn/917393/170909_14k0kgh275b2888e7c27b121flldc_640x900.jpg","http://s3.mogucdn.com/p2/170830/upload_3gej43hf2fc0f5l717d5l0cf85af3_640x900.jpg","http://s3.mogucdn.com/mlcdn/917393/170909_3ej3l2bg20hcf15bjg1fl8g8d7bha_640x900.jpg","http://s3.mogucdn.com/mlcdn/917393/170909_56kb0c8lfi7029l76jl4h35l5a9je_640x900.jpg"],
        chima:["34","35","36","37","38","39"],
        kucun:200,
        show:["http://s3.mogucdn.com/mlcdn/917393/170909_37c41kjf4a2ee203gcjl84k34ihlg_640x640.jpg_750x999.jpg","http://s3.mogucdn.com/mlcdn/917393/170909_7a58j3a80i24eh7kea4f89k0a328l_640x640.jpg_750x999.jpg","http://s3.mogucdn.com/mlcdn/917393/170909_4gcdh9blg057ghja4lc652c3j63ih_640x640.jpg_750x999.jpg","http://s3.mogucdn.com/mlcdn/917393/170909_6i4j5ae5aiab240l60j5k5bc7hjfa_640x640.jpg_750x999.jpg","http://s3.mogucdn.com/mlcdn/917393/170909_2ec1f29b52l8a1049l8bgd70gaec4_640x640.jpg_750x999.jpg"]
    }

})
router.get('/api/homeCarouse', function *(next){
    this.body = {
        url:"www.baidu.com",
        title:"C1"

    }
});
router.post('/api/buycheck',koabody, function *(next) {
    console.log("buy");
    this.body = JSON.stringify(this.request.body);
    console.log(this.body);
    if(this.body[13] == 1) {
        this.response.body = {
            ensure: true
        }
    }else{
        console.log(this.body[0]);
        console.log(this.body[1]);
        console.log(this.body[2]);
        console.log(this.body[3]);

        this.response.body = {
            ensure: false
        }
    }

});
router.post('/api/login', koabody,
    function *(next) {
        console.log("login");
        console.log(this.request.body);
        // => POST body
        this.body = JSON.stringify(this.request.body);
        console.log(this.body);
        this.response.body = {
            authenticated: true,
            tocken: "lingpai",
            err: 'no error'
        }
    }
);
router.post('/api/register', koabody,
    function *(next) {
        console.log("register");
        console.log(this.request.body);
        // => POST body
        this.body = JSON.stringify(this.request.body);
        console.log(this.body);
        this.response.body = {
            authenticated: true,
            err: 'no error'
        }
    }
);


//router.post('/api/post', koabody, function *(next) {
//    console.log(this.request.body);
//    this.body = JSON.stringify(this.request.body)
//})
app
    .use(router.routes())
    .use(router.allowedMethods());


app.listen(3000, ()=>console.log(router.post));


