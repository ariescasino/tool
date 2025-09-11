"use strict";

let USER_ACTION_MENU_SHOW = false;


$(document).ready(function () {
    // right sidebar
    $(".btn-open-right-sidebar").on("click", function () {
        USER_ACTION_MENU_SHOW = (USER_ACTION_MENU_SHOW == false) ? true : false;
        initRightSidebar(USER_ACTION_MENU_SHOW);
    });
    
});


function initRightSidebar(status) {
    USER_ACTION_MENU_SHOW = status;
    if (status) {
        $(".sidebar-backdrop").removeClass("hidden");
        $(".sidebar-body").removeClass("right-[-82%]").addClass("right-0");
    } else {
        $(".sidebar-backdrop").addClass("hidden");
        $(".sidebar-body").removeClass("right-0").addClass("right-[-82%]");
    }
}
