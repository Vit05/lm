$(document).ready(function () {


    //
    //
    //auth pop up widht for desktop and mobile
    var auth_width;
    $(window).resize(function () {
        $(".main-auth").colorbox.resize();
        if ($(window).width() < 600) {
            auth_width = "90%";
        } else {
            auth_width = "460px";
        }
    });
    if ($(window).width() < 600) {
        auth_width = "90%";
    } else {
        auth_width = "460px";
    }


    /*  $(".main-auth").colorbox({
     inline: true,
     innerWidth: auth_width,
     close: "<i class='i-cross'></i>",
     onOpen: function () {
     initTab(".auth-content", ".auth-nav");
     }

     });*/
    //
    //
    //
    //      ADD
    //      VAR for top position
    //
    //
    //
    //
    $('#auth_pop_up').modal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .8, // Opacity of modal background
        in_duration: 300, // Transition in duration
        out_duration: 200, // Transition out duration
        starting_top: '20%', // Starting top style attribute
        ending_top: '5%', // Ending top style attribute
        ready: function () { // Callback for Modal open. Modal and trigger parameters available.
            initTab(".auth-content", ".auth-nav");
            console.log('pop up Opened');
        },
        complete: function () {
          console.log('pop up closed');
        }
    });

    var $select_city = $("#select_city").select2({
        dropdownAutoWidth: false
    });
    $('.select-city').on('click', function () {
        $('.select-drop-city').addClass('opened');
        $select_city.select2("open");
        return false;
    });
    $(document).on('click', function () {
        $('.select-drop-city').removeClass('opened');
        $select_city.select2("close");
//            $select_city.val(null).trigger("change");
    });
    $select_city.on("change", function (e) {
        $('.select-drop-city').removeClass('opened');
        $select_city.select2("close");
    });


    var frameHeight = $(window).height();

    $(window).resize(function () {

        if ($(window).width() > 768) {
            $(".top-nav nav").show();

        }
    });

    //
    //
    //mob navigation

    $('#mobile_nav').on("click", function () {
        var n = $('.top-nav nav'),
            m = $(this),
            bd = $('body'),
            bg = $('#mob_bg');


        if (n.hasClass('nav-opener')) {
            n.removeClass('nav-opener');
            m.removeClass('open');
            // bd.removeClass('no-scroll');


        } else {
            n.addClass('nav-opener');

            m.addClass('open');
            // bd.addClass('no-scroll');

        }
    });


    $('#mob_bg').on('click', function () {
        $('.top-nav nav').removeClass('nav-opener');
        $('#mobile_nav').removeClass('open');
        // $('body').removeClass('no-scroll');
    });





    function initTab(content, nav) {
        $(content + '>div').hide();
        $(content + '>div:first').show();
        $(nav + ' li').click(function () {
            $(nav + ' li').removeClass("active");
            $(this).addClass("active");
            $(content + '>div').hide();
            var indexer = $(this).index();
            $(content + '>div:eq(' + indexer + ')').fadeIn();
        });

    }
});