$(document).ready(function(){
    $(".show").click(function(){
        // $(".display_img").show(); // 일반적인 숨겨진 이미지 보여주기, 시간 0초
        // $(".display_img").show("slow"); // 보여주기까지의 속도를 천천히 나오도록 구성(1초~1.5초)
        // $(".display_img").show("normal"); // 보여주기까지의 속도를 중간속도로 나오도록 구성(0.5초~1초)
        // $(".display_img").show("fast"); // 보여주기까지의 속도를 빠르게 나오도록 구성(0.5초 미만)
        // $(".display_img").show(5000); // 보여주기까지의 속도를 선언한 속도로 나오도록 구성(5초)
        $(".display_img").show(5000, function(){
            $(".display_img").css("color", "#fff"); // 앞에 있는 효과가 진행완료된 후에 콜백함수가 적용된다
        });
    })
    $(".hide").click(function(){
        $(".display_img").hide();
    });
    /* ---------------------------------------------------- */
    $(".fadeIn").click(function(){
        $(".fade_img").fadeIn(); // 공간을 가져오는 동시에 opacity: 1;이 된다
    });
    $(".fadeOut").click(function(){
        $(".fade_img").fadeOut();
    });
    /* ---------------------------------------------------- */
    $(".slideDown").click(function(){
        $(".slide_img").slideDown();
    });
    $(".slideUp").click(function(){
        $(".slide_img").slideUp();
    });
    /* ---------------------------------------------------- */
    $(".origin").click(function(){
        var $active=$(this).hasClass("active");
        if($active==false){
            $(this).addClass("active");
            $(".fs_box ul").slideDown();
        }else{
            $(this).removeClass("active");
            $(".fs_box ul").slideUp();
        }
    });
    /* ---------------------------------------------------- */
    var $move=0;
    $(".go_right").click(function(){
        $(".ani_img").stop().animate({"margin-left":($move+=200)+"px"},1000); // 사칙연산 최우선순위는 ()
    });
    $(".go_left").click(function(){
        $(".ani_img").stop().animate({"margin-left":($move-=200)+"px"},1000);
    });
});