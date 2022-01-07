//scroll
$(document).ready(function() {
    var scroll_pos
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos>= 1){
            $("nav").addClass("putih")
        } else if (scroll_pos<= 1){
            $("nav").removeClass("putih")
        }  
    })
})
