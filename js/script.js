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
    /* ---------------------------------------------------- */
    setInterval(function(){
        var $f_child=$(".slider_01 ul li").first();
        $(".slider_01 ul").animate({"margin-left":"-100%"},1000,function(){ // ul width: 400%;(1600px)로 -400px만큼 margin-left: ;를 주기위해선, margin-left":"-100%
            $(".slider_01 ul").append($f_child).css("margin-left", "0"); // append()는 find()와 같은 탐색선택자가 아니므로 css()가 적용될 선택자는 $(".slider_01 ul")가 된다, animate()는 이벤트가 아니라 효과이므로 $(this)로 선언하지 말 것!
        });
    },5000);
    /* ---------------------------------------------------- */
    // 0. css만 적용된 상태로, ul 영역에 margin-left: -100%;를 주므로써 1번 이미지가 영역 왼쪽으로 나가있는 상태
    // 1. setInterval() 적용하기 전, 4번 이미지를 가장 왼쪽으로 이동시키고, 1번 이미지가 영역 내부로 들어가도록 만든다
    var $last_child=$(".slider_02 ul li").last(); // 최초로 로딩간에 선택되어진 4번 이미지
    $(".slider_02 ul").prepend($last_child);

    // 2. setInterval() 적용; ul 영역을 animate({"margin-left":"0"})를 주므로써 4번 이미지를 영역 내부로 밀어넣고, 콜백 함수를 통해 현재 가장 오른쪽에 위치한 3번 이미지를 다시 가장 왼쪽으로 이동시키는 동시에 ul 영역을 css("margin-left", "-100%")로 원복시킨다
    setInterval(function(){
        var $l_child=$(".slider_02 ul li").last(); // 이미지를 회전시키는 과정상 마지막 자식
        console.log($l_child);
        $(".slider_02 ul").animate({"margin-left":"0"},1000,function(){
            $(".slider_02 ul").prepend($l_child).css("margin-left", "-100%");
        });
    },5000);
    /* ---------------------------------------------------- */
    setInterval(function(){
        var $f_child=$(".slider_03 ul li").first();
        $(".slider_03 ul").animate({"margin-top":"-300px"},1000,function(){ // {"margin-top":""} %로 속성값을 작성하게되면 오류가 생긴다
            $(".slider_03 ul").append($f_child).css("margin-top", "0");
        });
    },5000);
    /* ---------------------------------------------------- */
    var $last_child=$(".slider_04 ul li").last();
    $(".slider_04 ul").prepend($last_child);
    setInterval(function(){
        var $l_child=$(".slider_04 ul li").last();
        $(".slider_04 ul").animate({"margin-top":"0"},1000,function(){
            $(".slider_04 ul").prepend($l_child).css("margin-top", "-300px");
        })
    },5000);
});