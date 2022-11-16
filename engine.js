// MARSAN EXCHANGE

var lang="en";

$(function(){

    var userLang = navigator.language || navigator.userLanguage;
    console.log(userLang);
    console.log(userLang.split('-')[0]);
    if(userLang.split('-')[0]=="fr"){
        lang="fr";
    }
    language();
    

    window.scrollTo(0,0);
  
    window.onload = function() {
        window.scrollTo(0,0);
        setTimeout(function(){run();},800);
    }

    events();

    setTimeout(function(){run();},2500);
  
});

function events(){
    $('.marsan_language').on("click",function(){
        if(lang=="en"){lang="fr";}
        else{lang="en";}
        language();
    });
    $('.marsan_footer_lang').on("click",function(){
        if(lang=="en"){lang="fr";}
        else{lang="en";}
        language();
    });

    $('.marsan_video').on("click",function(){
        $('.marsan_play').removeClass("marsan_play_hide");
        setTimeout(function(){$('.marsan_play_video').trigger('play');},900);
    });

    $('.marsan_play_close').on("click",function(){
        $('.marsan_play').addClass("marsan_play_hide");
        $('.marsan_play_video').trigger('pause');
    });
    
    $('.marsan_large_contract').on("click",function(){
        $('.marsan_token_contract').css("opacity",0.5);
        const el = document.createElement('textarea');
        el.value = "0x9af5a20aac8d83230ba68542ba29d132d50cbe08";
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        
        document.body.removeChild(el);
        setTimeout(function(){$('.marsan_token_contract').css("opacity",1);$('.marsan_token_contract').text(marsan["general_copied_"+lang]);},130);

    });

    $('.marsan_large_token').on("click",function(){
        if($('.marsan_tokenomics').hasClass("marsan_tokenomics_hide")){
            $('.marsan_tokenomics').removeClass("marsan_tokenomics_hide");
        }
        else{
            $('.marsan_tokenomics').addClass("marsan_tokenomics_hide");
        }
        
    });
    
}


function run(){
}

function language(){
    for(i=0;i< $('.marsan').length;i++){
        $('.marsan').eq(i).empty().append(
            marsan[$('.marsan').eq(i).attr("marsan")+"_"+lang]
        );
    }
    for(i=0;i< $('.marsan_link').length;i++){
        $('.marsan_link').eq(i).attr("href",(marsan[$('.marsan_link').eq(i).attr("marsan_link")+"_"+lang]));
    }
    if(lang=="en"){
        $('.marsan_language_p').text("fr");
        $('.marsan_footer_lang').text("fr");
    }
    else{
        $('.marsan_language_p').text("en");
        $('.marsan_footer_lang').text("en");
    }
}