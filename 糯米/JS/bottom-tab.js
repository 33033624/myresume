

tabBtn.onmouseover= function (e) {
    e=e||window.event;
    e.target= e.target|| e.srcElement;
    if((e.target).tagName.toString().toLocaleLowerCase()=='li'){
        for(var i=0;i<oBtns.length;i++){
            oBtns[i].index=i;
            if(oBtns[i]== e.target){
                oBtns[i].className='selected';
                otabDivs[ oBtns[i].index].className='tab-con bg';              otabDivs[ oBtns[i].index].style.display='block';

            }else{
                oBtns[i].className='';
                otabDivs[i].className='tab-con';
                otabDivs[i].style.display='none';
            }

        }

    }
}


