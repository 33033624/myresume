
window.onscroll = function () {

        imgLoad(imgs);
        getBlock();
    if ((document.documentElement.scrollTop || document.body.scrollTop) > 0) {

        goTop.style.display = 'block';

        if ((document.documentElement.scrollTop || document.body.scrollTop) > (document.documentElement.clientHeight || document.body.clientHeight)) {
            var target = 50;
            var duration = 100;
            var speed = (target / duration) * 10;
            if (oTopSearch.style.display != 'block') {
                oTopSearch.style.overflow='visible';

                oTopSearch.style.display = 'block';
                var timer = window.setInterval(function () {
                    if (((oTopSearch.offsetHeight) + speed) > 50) {
                        oTopSearch.style.height = 50 + 'px';
                        window.clearInterval(timer);
                        getBlock();
                        return;
                    }
                    oTopSearch.style.height = (oTopSearch.offsetHeight) + speed + 'px';
                }, 10)


            }






        }
        if ((document.documentElement.scrollTop || document.body.scrollTop) < (document.documentElement.clientHeight || document.body.clientHeight)) {
            oTopSearch.style.overflow='hidden';
            fixBlock.style.display='none';
            var target = 50;
            var duration = 100;
            var speed = (target / duration) * 10;
            if (oTopSearch.style.display != 'none') {
                var timer = window.setInterval(function () {
                    if (((oTopSearch.offsetHeight) - speed) <= 0) {
                        oTopSearch.style.height = 0 + 'px';
                        oTopSearch.style.display = 'none';
                        window.clearInterval(timer);
                        return;
                    }
                    oTopSearch.style.height = (oTopSearch.offsetHeight) - speed + 'px';
                }, 10)

            }

        }
    }

    if ((document.documentElement.scrollTop || document.body.scrollTop) == 0) {
        goTop.style.display = 'none';
    }
};





var go = document.getElementById('go');
go.onclick = function () {
    window.clearInterval(this.timer);
    var dur = (document.documentElement.scrollTop || document.body.scrollTop);
    var duration = 500;
    var interval = 10;
    var speed = (dur / duration) * interval;

    var _this=this;
    this.timer = window.setInterval(function () {
        dur = dur - speed;

        if (dur <= 0) {

            window.clearInterval(_this.timer);
            document.documentElement.scrollTop = document.body.scrollTop = 0;
            return;
        }
        document.documentElement.scrollTop = dur;
        document.body.scrollTop = dur;
    }, interval)

};


function getBlock() {
    var cur = (document.documentElement.scrollTop || document.body.scrollTop);
    if (cur >= (offset(oCons[0]).top)) {

        if( (cur >= (offset(oCons[oLinks.length-1]).top+oCons[oLinks.length-1].offsetHeight/2))){
            fixLeft.style.display = 'none';
        }
        else{
            fixLeft.style.display = 'block';
        }
    }
    if (cur < (offset(oCons[0]).top)) {
        fixLeft.style.display = 'none';
    }


    for (var i = 0; i < oCons.length-1; i++) {


        var oA=oLinks[i].getElementsByTagName('a')[0];
        var oSpan=oA.getElementsByTagName('span')[0];
        if ((cur >= offset(oCons[i]).top) && (cur < offset(oCons[i + 1]).top)) {

            oSpan.style.display = 'none';
            oSpan.style.position = 'static';
            oA.style.color='#ff4883';

        } else {

            if(cur>=(offset(oLinks[oLinks.length-1]).top) && cur<=((offset(oLinks[oLinks.length-1]).top+oLinks[oLinks.length-1].offsetHeight))) {

                oSpan.style.display = 'none';
                oSpan.style.position = 'static';
                oA.style.color='#ff4883';
            }
            else
            {

                oSpan.style.display = 'block';
                oSpan.style.position = 'absolute';
                oA.style.color='transparent';
            }

        }
    }


}
