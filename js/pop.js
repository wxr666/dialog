;(function(a){
    var btn=document.querySelector('.btn');
    var obj={
        width:300,
        background:'#0099FF',
        title:'确认弹窗',
        btn:['确定','取消'],
        sure:function(){
            alert('确定');
        },
        close:function(){
            alert('取消');
        }
    }

    function text(obj){
        var defaults={
            width:400,
            height:150,
            btn:['确定']
        }
        var data={};
        for(var key in defaults){
            data[key]=defaults[key];
        }
        for(var key in obj){
            data[key]=obj[key];
        }
        this.width=data.width;
        this.height=data.height;
        this.background=data.background;
        this.title=data.title;
        this.btn=data.btn;
        this.sure=data.sure;
        this.close=data.close;
        this.w=document.documentElement.clientWidth||document.body.clientWidth;
        this.h=document.documentElement.clientHeight||document.body.clientHeight;
        this.init();
    }
    text.prototype={
        constructor:text,
        init:function(){
            console.log(this)
            var mark=document.createElement('div');
            mark.classList.add('mark');
            var dialog=document.createElement('div');
            dialog.classList.add('dialog');
            dialog.style.width=this.width+'px';
            dialog.style.height=this.height+'px';
            dialog.style.background=this.background;
            dialog.style.left=(this.w-this.width)/2+'px';
            dialog.style.top=(this.h-this.height)/2+'px';
            document.body.appendChild(dialog);
            document.body.appendChild(mark);
            var h2=document.createElement('h2');
            h2.innerHTML=this.title;
            dialog.appendChild(h2);
            var p=document.createElement('p');
            for(var i=0;i<this.btn.length;i++){
                console.log(this.btn[i])
                switch(this.btn[i]){
                    case '确定':
                    p.innerHTML+='<span class="sure">'+this.btn[i]+'</span>';
                    break;
                    case '取消':
                    p.innerHTML+='<span class="close">'+this.btn[i]+'</span>';
                    break;
                }
            }
            dialog.appendChild(p);
            this.addEvent();
        },
        addEvent:function(){
            var sure=document.querySelector('.sure');
            var close=document.querySelector('.close');
            sure.onclick=this.sure;
            close.onclick=this.close;
        }
    }
    var btn=document.querySelector('.btn');
    btn.onclick=function(){
        new text(obj)
    }
})(window)