var music=document.getElementById('music'),
    musicAudio=document.getElementById('musicAudio'),
    pre=document.getElementById('pre'),
    list=document.getElementById('list'),
    lis=list.getElementsByTagName('li'),
    heig=document.documentElement.clientHeight,
    wrapper=document.getElementById('swiper-wrapper'),
    slides=document.getElementsByClassName('swiper-slide');
window.setTimeout(function () {
    musicAudio.play();
    musicAudio.addEventListener('canplay', function () {
        music.style.display='block';
        music.className='music musicMove'
    },false)
},1000);
music.addEventListener('click', function () {
    if(musicAudio.paused){
        musicAudio.play();
        music.className='music musicMove';
        return
    }
    musicAudio.pause();
    music.className='music'
});



FastClick.attach(document.body);
(function (desW) {
    var winW=document.documentElement.clientWidth;
    if(winW>desW){
        document.querySelector('.swiper-container').style.width=desW+'px';
        document.querySelector('.swiper-container').style.margin='0 auto';
        return;
    }
    document.documentElement.style.fontSize=winW/desW*100+'px';
}(640));


var swip=new Swiper('.swiper-container',{
    direction:'vertical',
    loop:true,
    effect:'cube',
    cube: {
        slideShadows: false,
        shadow: false
    },
    onSlideChangeStart: function (swiper) {
        var ind=swiper.activeIndex;
        var slides=swiper.slides;
        var len=slides.length;
        var trueLen=len-2;
        if(ind==trueLen){
            pre.style.display='none';
        }else{
            pre.style.display='block';
        }
    },
    onSlideChangeEnd: function (swiper) {
        var ary=['red','blue','green','yellow','pink','black','lightblue'];
        var ind=swiper.activeIndex;
        console.log(ind);
        var slides=swiper.slides;
        var len=slides.length;
        var trueLen=len-2;
        [].forEach.call(slides, function (item, index) {
            if(index==ind){
                item.id='page'+(ind % trueLen==0?( trueLen):ind %trueLen);
               /* document.body.style.opacity=0;
                window.setTimeout(function () {
                    document.body.style.opacity=1;
                    document.body.style.background=ary[ind];
                    /!*document.body.style.webkitAnimation='fadeIn 2s 0 linear 1 both';
                    document.body.style.animation='fadeIn 2s 0 linear 1 both';*!/
                },500);*/
                return;
            }
            item.id=null;
        })



    }
});
(function () {
  for(var i=0;i<lis.length;i++){
      var cur=lis[i];
          cur.index=i;
      cur.onclick= function (e) {
          swip.slideTo(this.index+3, 1000, false);
          for(var j=0;j<slides.length;j++){
              if(j==(this.index+3)){
                  slides[j].id='page'+(this.index+3);

              }
              else{
                  slides[j].id=null;
              }
          }
      }
  }
}());






