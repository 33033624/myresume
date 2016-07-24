
for (var i = 0; i < oLinks.length; i++) {
    var cur = oLinks[i];
    cur.index = i;

    cur.onclick = function (e) {
        window.clearTimeout(this.timer);
        var t = offset(oCons[this.index]).top;
        var curPos = (document.documentElement.scrollTop || document.body.scrollTop);
        var change = t - curPos;
        var duration = 300;
        var interval = 10;
        var speed = change / duration * interval;
        var _this=this;
        this.timer = window.setInterval(function (e) {
            if (speed >= 0) {
                curPos = curPos + speed;
                if (curPos >= t) {
                    document.documentElement.scrollTop = document.body.scrollTop = t;
                    var oA=_this.getElementsByTagName('a')[0];
                    var oSpan=oA
                        .getElementsByTagName('span')[0];
                        oSpan.style.display='none';
                        oSpan.style.position='static';
                        oA.style.color='#ff4883';
                        _this.pos='static';
                    window.clearInterval(_this.timer);
                    return;

                }
                document.documentElement.scrollTop = document.body.scrollTop = curPos;


            } else {
                curPos = curPos + speed;
                if (curPos < t) {
                    document.documentElement.scrollTop = document.body.scrollTop = t;
                    var oA=_this.getElementsByTagName('a')[0];
                    var oSpan=oA
                        .getElementsByTagName('span')[0];
                    oSpan.style.display='none';
                    oSpan.style.position='static';
                    oA.style.color='#ff4883';
                    _this.pos='static';
                    window.clearInterval(_this.timer);
                    return;
                }
                document.documentElement.scrollTop = document.body.scrollTop = curPos;

            }

        }, interval)


    };



        cur.onmouseover= function (e) {
            var oA=this.getElementsByTagName('a')[0];
            var oSpan=oA
                .getElementsByTagName('span')[0];
            this.pos=window.getComputedStyle(oSpan,null).position;
            if(this.pos !='static'){
                oSpan.style.display='none';
                oSpan.style.position='static';
                oA.style.color='#ff4883';
                this.pos='absolute';
                /*if(oline){
                    oline.style.background='transparent';
                }*/
            }

            };

        cur.onmouseout= function (e) {
            var oA=this.getElementsByTagName('a')[0];
            var oSpan=oA
                .getElementsByTagName('span')[0];
            oSpan.pos=window.getComputedStyle(oSpan,null).position;
               if(this.pos=='absolute'){
                   oSpan.style.display='block';
                   oSpan.style.position='absolute';
                   oA.style.color='transparent';
               }
        }

}


