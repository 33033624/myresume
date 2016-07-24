
    function  imgLoad(imgs) {
        for(var i=0;i<imgs.length;i++){
            var cur=imgs[i];
            if(cur.isload){
                continue;
            }
            (function (cur) {
                var curScollHeight=(document.documentElement.scrollTop||document.body.scrollTop)+(document.documentElement.clientHeight||document.body.scrollHeight);
                    var t=offset(cur).top+cur.offsetHeight;
                    if(t<=curScollHeight){
                        var tempImg=new Image;
                        tempImg.src=cur.getAttribute('trueSrc');
                        tempImg.onload= function () {
                            cur.src=this.src;
                            cur.style.display='block';
                            cur.style.background='#15FF6F';
                            tween(cur,{opacity:1},50);
                            cur.isload=true;
                        }

                    }

            })(cur)

            }
    }
    window.HTMLCollection(imgLoad(imgs));





