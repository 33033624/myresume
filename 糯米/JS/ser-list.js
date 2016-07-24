(function () {
    if (document.body.addEventListener) {
        var a = function (type, fn) {
            document.body.addEventListener(type, fn, false)
        }
    } else {
        a = function (type, fn) {
            document.body.attachEvent('on' + type, fn);
        }
    }
    this.a = a;
}());


function listBlock(ser, serList) {
    ser.onfocus = ser.onkeyup = function (e) {
        e = e || window.event;
        var val = this.value.replace(/(^ +| +$)/g, '');
        val ? serList.style.display = 'block' : serList.style.display = 'none';
    };
    window.a('click', click);
    function click(e) {
        e = e || window.event;
        e.target = e.target || e.srcElement;
        if (e.target.tagName.toLowerCase() == 'a' && e.target.parentNode.parentNode
            == serList) {
            ser.value = e.target.innerHTML;
            serList.style.display = 'none'
        } else {
            serList.style.display = 'none'
        }
    }
    ser.onclick = function (e) {
        e = e || window.event;
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
    };
}
listBlock(ser, serList);
listBlock(fixSer, fixBlock);

