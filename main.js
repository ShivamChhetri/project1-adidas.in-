$(document).ready(()=>{
   //topbar
    $('.login').on('mouseenter', ()=>{
        $('.logdrop').show();
        $('.signdrop').hide();
    });
    $('.logdrop').on('mouseleave', ()=>{
        $('.logdrop').hide();
    });
    
    
    $('.signup').on('mouseenter', ()=>{
        $('.signdrop').show();
        $('.logdrop').hide();

    });
    $('.signdrop').on('mouseleave', ()=>{
        $('.signdrop').hide();
 }); 



  //menubar
    $('.change').on('mouseover', event=>{
        $(event.currentTarget).siblings().show(); 
        $(event.currentTarget).addClass('menuhover');
        $(event.currentTarget).parent().siblings().children().removeClass('menuhover');
   
    });

    $('.alfa').on('mouseleave', event=>{
        $(event.currentTarget).children(".box").hide();
        $(event.currentTarget).children(".change").removeClass('menuhover');
    });  
     
});



/*---slider---*/

$(document).ready( () => {
    
       $('#1').show('fade',300);
       $('#1').delay(4000).hide('slide',{direction:'left'},300);
       let sc = 4;
       let count=2;
       let margin = $(".slider").width();
       setInterval(function(){
           $('#'+count).show('slide',{direction:'right'},300);
           $('#'+count).delay(4000).hide('slide',{direction:'left'},300);
           if(count===sc){
               count=1;
           }else{
               count++;
           }
       },4600);
      
});

/*$(document).ready( () => { 
    $(".bubble-box").on('click', ()=>{
        let get=event.currentTarget;
        $(get).css('background', '#000');
        $(get).siblings().css('background','#808080');
        get=get.id/10;
        console.log(get);
        $('.slider #1').show(300);
        $('.slider #2').show(300);
    }) 
});
 */

 $(document).ready(()=>{
    $('.bubble').on('click', (event) => {
        $('.allslide').hide();
        let get= event.currentTarget;
        $(get).css('background', '#000');
        $(get).siblings().css('background','#808080');
        get=(get.id)/10;
        $("#"+get).show();
    });
 });


/*---SLIDER 2----*/
$(document).ready( () =>{
    $('.bubble2').on('click', (event)=>{
        let get=(event.currentTarget.id)*10;
        $("#"+get).siblings().hide();
        $("#"+get).show();
    });
});

/*------TOP BUTTON------*/
$(document).ready( () => {
    window.onscroll=function(){scroll()};
    function scroll(){
        if(document.body.scrollTop>20 || document.documentElement.scrollTop>20) {
            document.getElementById("topBtn").style.display="block";
        } else {
            document.getElementById("topBtn").style.display="none";
       }
    }
    $("#topBtn").on('click', ()=>{
            document.documentElement.scrollTop= 0;   
            document.body.scrollTop=0;     
    });
});
 
    