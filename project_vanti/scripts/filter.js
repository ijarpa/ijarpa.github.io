// Filter Js
$(document).ready(function(){
    $(".filter-item").click(function(){
        const value = $(this).attr('data-filter');
        if (value == "all") {
            $(".card").show('1000');
        }
        else{
            $(".card").not('.'+value).hide('1000');
            $(".card").filter('.'+value).show('1000');
        }
    })
    // add active to button
    $('.filter-item').click(function(){
        $(this).addClass('active-filter').siblings().removeClass('active-filter')
    });
});
