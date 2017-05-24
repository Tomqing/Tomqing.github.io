$(function(){
    var city = $("#cityName").val();
    var action = $("#action").val();

    $(".apply-btn").click(function(){
        var mobile = $.trim($("[name=mobilephone]").val());
        tgFunObject.applyFn({
            "realname":"杭州家博会",
            "mobile":mobile,
            "actionId":action,
            "signup_remark":"家博会报名M站",
            "types":"hzjbh01",
            nameFlag:false,
            success:function(){
                $("[name=mobilephone]").val('');
                showMaskEditCom({
                    text:'<p class="commonIcon">报名成功</p>',
                    duration:3000
                });
            }
        });
    });

    $(".fixed-btn").click(function(){
        var mobile = $.trim($("[name=fixedphone]").val());
        tgFunObject.applyFn({
            "realname":"杭州家博会",
            "mobile":mobile,
            "actionId":action,
            "signup_remark":"家博会报名M站",
            "types":"hzjbh02",
            nameFlag:false,
            success:function(){
                $("[name=fixedphone]").val('');
                showMaskEditCom({
                    text:'<p class="commonIcon">报名成功</p>',
                    duration:3000
                });
            }
        });
    });

    $(".fixed-box .close").click(function(){
        $(this).parent().hide();
        $(".fixed-wrap").hide();
    });

    if(IsIOS && !IsSafari){
        $(".fixed-box .form-input").on({
            focus:function(){
                var top = $(window).scrollTop();
                setTimeout(function(){
                    var hei = $(document).height();
                    $(window).scrollTop(hei);
                    $(".fixed-box").data("top",top).css("position","absolute");
                },1000);
            },
            blur:function(){
                setTimeout(function(){
                    $(window).scrollTop($(".fixed-box").data("top"));
                    $(".fixed-box").css("position","fixed");
                },1000);
            }
        });
    }

    function scrollFn(){
        var top = $('.img-list').offset().top;
        var scrolltop = $(window).scrollTop();
        if(scrolltop>top){
            $('.fixed-box').addClass('show');
        }else{
            $('.fixed-box').removeClass('show');
        }
    }
    scrollFn();
    $(document).on("scroll touchmove",scrollFn);
});