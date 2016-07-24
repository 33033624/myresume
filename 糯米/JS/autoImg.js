
/*用法如下 输入一个对象 可以设置轮播图的宽高度 有无左右按钮 轮播按钮  以及时间  轮播时间  */
new AutoImg({
    bannerId: 'outerBox',
    width: 247,
    duration: 2000,
    interval: 200,
    btn: false,
    list: true,
    url: 'data/json.json'
});

function AutoImg(opations) {
    this.ary = {
        bannerId: '',
        width: 1000,
        duration: 2000,
        interval: 500,
        btn: true,
        list: true,
        url: '',
        method: 'get',
        isAs: false,
        data: null,
        getData: null
    };
    for (var key in opations) {
        if (opations.hasOwnProperty(key)) {
            this.ary[key] = opations[key];
        }
    }


    this.outer = document.getElementById(this.ary.bannerId);
    this.inner = document.getElementById('innerBox');
    this.odivs = this.inner.getElementsByTagName('div');
    this.imgs = this.outer.getElementsByTagName('img');
    this.btnL = utils.getElementsByClass('btnL', this.outer)[0];
    this.btnR = utils.getElementsByClass('btnR', this.outer)[0];
    this.list = utils.getElementsByClass('list', this.outer)[0];
    this.lis = this.list.getElementsByTagName('li');
    this.timer = null;
    this.step = 0;


    var _this = this;
    function getData() {

        var xhr = new XMLHttpRequest();
        xhr.open(_this.ary.method, _this.ary.url, _this.ary.isAs);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)) {
                _this.ary.getData = utils.jsonParse(xhr.responseText);
            }
        };
        xhr.send(_this.ary.data);
    }

    function bindData() {
        var str = '', listStr = '';
        for (var i = 0; i < _this.ary.getData.length; i++) {
            var cur = _this.ary.getData[i];
            for (var key in cur) {
                str += '<div><img src="" trueSrc="' + cur.src + '"/></div>'
            }
            if (_this.ary.list) {
                if (i == 0) {
                    listStr += '<li class="bg"></li>';
                }
                else {
                    listStr += '<li></li>';
                }
            }

        }
        str += '<div><img src="" trueSrc="' + _this.ary.getData[0].src + '"/></div>';
        _this.inner.style.width = (_this.ary.getData.length + 1) * _this.ary.width + 'px';
        _this.inner.innerHTML += str;
        if (_this.list) {
            _this.list.innerHTML += listStr;
        }
    }




    function delayLoad() {
        for (var i = 0; i < _this.imgs.length; i++) {
            var cur = _this.imgs[i];
            if (cur.isload)continue;
            (function (cur) {
                cur.isload = true;
                var temp = new Image;
                temp.src = cur.getAttribute('trueSrc');
                temp.onload = function () {
                    cur.src = this.src;
                    cur.parentNode.style.display = 'block';
                    tween(cur.parentNode, {opacity: 1}, _this.ary.interval);
                }
            })(cur)
        }
    }


    function auto() {
        _this.step++;
        if (_this.step == _this.ary.getData.length+1) {
            _this.step = 1;
            utils.css(_this.inner, {left: 0})
        }
        tween(_this.inner, {left: -(_this.step * _this.ary.width)}, _this.ary.interval);
        focusAlign();

    }


    function focusAlign() {
        var tempStep = _this.step == _this.ary.getData.length ? 0 : _this.step;
        if (_this.lis) {
            for (var i = 0; i < _this.lis.length; i++) {
                if (i == tempStep) {
                    _this.lis[i].className = 'bg';
                } else {
                    _this.lis[i].className = '';
                }
            }
        }
    }

    function stopOn() {
        _this.outer.onmouseover = function () {
            window.clearTimeout(_this.timer);

        };
        _this.outer.onmouseout = function (e) {
            _this.timer = window.setInterval(auto, _this.ary.duration)
        }
    }


    function clickEvent() {
        if (_this.ary.btn) {
            _this.btnR.onclick = function (e) {
                auto();
                e.preventDefault()
            };
            _this.btnL.onclick = function (e) {

                if (_this.step == 0) {
                    _this.step = _this.ary.getData.length;
                    utils.css(_this.inner, {left: -_this.step * _this.ary.width})
                }
                _this.step--;
                tween(_this.inner, {left: -_this.step * _this.ary.width}, _this.ary.interval);
                e.preventDefault()
            }
        }
    }


    function lisClick() {
        if (_this.lis) {
            for (var i = 0; i < _this.lis.length; i++) {
                var cur = _this.lis[i];
                cur.index = i;
                cur.onclick = function () {
                    _this.step = this.index;
                    tween(_this.inner, {left: -_this.step * _this.ary.width}, _this.ary.interval);
                    focusAlign();
                }
            }
        }
    }

    this.allFn = function allFn() {
        getData();
        bindData();
        delayLoad();
        clickEvent();
        lisClick();
        stopOn();
        _this.timer = window.setInterval(auto, _this.ary.duration);
    };
    this.allFn();
}


