var func = function()
{
			//form
		$('.line select, .line input').styler();


    $('input:text, input:password').each(function(){
        var txtval = $(this).val();
        $(this).focus(function(){
						$(this).css({'color':'#000', 'font-style':'normal'});
            if($(this).val() == txtval){
                $(this).val('')
            }
        });
        $(this).blur(function(){
						$(this).css({'color':'#000', 'font-style':'normal'});
            if($(this).val() == ""){
                $(this).val(txtval);
            }
        });
    });



		// enter
		$('.enter-link').each(function(i, item){
			$(item).bind('mouseover', function(e){
			 e.preventDefault();
			 $('div.enter-drop').show();
			})
		});

		var n = 0;
		$("div.enter-drop").bind("mouseenter",function(){
			$(this).show();
		}).bind("mouseleave",function(){
			$(this).hide();
		});


		// delete
		$('.del').click(function(e){
				e.preventDefault();
				$(this).parents(".serial-list li").animate({ opacity: 'hide' }, "slow", function() {
                    $(this).detach();
                    var summBall = 0;
                    var summBallPro = 0;
                    $('.serial-list li').each(function() {
                        var currBall = Number($(this).find('.ball em').html().replace(' ', ''));
                        if ($(this).find('.ball-pro').length == 0) {
                            summBall += currBall;
                        } else {
                            summBallPro += currBall;
                        }
                    });
                    $('.serial-list-top-ball em').html(String(summBall).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
                    $('.serial-list-top-ball.ball-pro em').html(String(summBallPro).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
                });
		});

		// message
		$('.message-box span').click(function(){
				$(this).parents(".message-box div").animate({ opacity: 'hide' }, "slow");
		});


		// faq
		$(".support-full div.s-top").click(function(){
			$(this).next("div.s-bot").slideToggle("slow")
			.siblings("div.s-bot:visible").slideUp("slow");
			$(this).toggleClass("active");
			$(this).siblings("div.s-top").removeClass("active");
			return false;
		});


		// popup
		$('.popup-link').click(function(){
				$('.overlay').fadeIn('fast',function(){
						$('.popup-box').animate({'top':'250px'},500);
				});
		});
		$('.close-popup, .overlay').click(function(){
				$('.popup-box').animate({'top':'-2000px'},500,function(){
						$('.overlay').fadeOut('fast');
				});
		});


		// reg
		$(".u-name").each(function(i, item){
			$(item).bind("click", function(e){
			 e.preventDefault();
			 $(".u-name").removeClass("act");
			 $(this).addClass("act");
			 $(".hide-block").hide();
			 $(".hide-block").eq(i).show();
			});
		});

		$(".hide-name-drop").click(function(e){
			$("div.u-name").removeClass("act");
			$(".hide-block").fadeOut("fast");
		e.preventDefault();
		});


		// Ball
		$(".history-b").each(function(i, item){
			$(item).bind("click", function(e){
			 e.preventDefault();
			 $(".history-b").removeClass("act");
			 $(this).addClass("act");
			 $(".hide-block").hide();
			 $(".hide-block").eq(i).show();
			});
		});

		$(".hide-history-drop").click(function(e){
			$("div.history-b").removeClass("act");
			$(".hide-block").fadeOut("fast");
		e.preventDefault();
		});

		// More
		$(".more-link").each(function(i, item){
			$(item).bind("click", function(e){
			 e.preventDefault();
			 $(".more-link").removeClass("act");
			 $(this).addClass("act");
			 $(".more-txt").hide();
			 $(".more-txt").eq(i).show();
			});
		});

		//
		$(".mlink").click(function(e){
				$(this).hide();
				$(this).next("div.mdrop").slideToggle("fast");
			e.preventDefault();
		});

		$(".hide-mdrop").click(function(e){
				$(".mlink").show();
				$(this).parents("div.mdrop").hide();
			e.preventDefault();
		});



		// view-popup
		$('.view-link').click(function(){
				$('.overlay').fadeIn('fast',function(){
						$('.view').animate({'top':'250px'},500);
				});
		});
		// answer-popup
		$('.answer-link').click(function(){
				$('.overlay').fadeIn('fast',function(){
						$('.answer').animate({'top':'250px'},500);
				});
		});

		// canceled-popup
		$('.canceled').click(function(){
				$('.overlay').fadeIn('fast',function(){
						$('.zachet-p').animate({'top':'250px'},500);
				});
		});

		// zachet-popup
		$('.zachet').click(function(){
				$('.overlay').fadeIn('fast',function(){
						$('.fail-p').animate({'top':'250px'},500);
				});
		});


		$('.close-popup, .overlay').click(function(){
				$('.answer, .view').animate({'top':'-2000px'},500,function(){
						$('.overlay').fadeOut('fast');
				});
		});


		if ($('.scroll-pane').length > 0) {
            $('.scroll-pane').jScrollPane();
        }


		// textarea
        if ($('textarea').length > 0) {
            $('textarea').elastic();
        }


    $(window).bind('load resize scroll', function() {
        if ($('.shop-box-menu').length > 0) {
            if ($(window).scrollTop() > $('.shop-box-menu').offset().top) {
                $('.shop-box-menu').addClass('fixed');
            } else {
                $('.shop-box-menu').removeClass('fixed');
            }
            $('.shop-box-menu a').each(function() {
                var curLink = $(this);
                var curBlock = $(curLink.attr('href'));
                if (curBlock.offset().top < $(window).scrollTop() + $(window).height() / 2) {
                    $('.shop-box-menu a.active').removeClass('active');
                    curLink.addClass('active');
                }
            });
        }
    });

    $('.shop-box-menu a').click(function(e) {
        $(window).scrollTop($($(this).attr('href')).offset().top - 70, 500);
        e.preventDefault();
    });



};

$(func);


