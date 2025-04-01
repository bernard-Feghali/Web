document.querySelector(".btnd").addEventListener("click", function() {

    var flag = document.querySelector("body").classList.contains("dark-mode");

    if(flag) {

        document.querySelector("body").classList.remove("dark-mode");
        document.querySelector("body").classList.add("light-mode");
        document.querySelector("body").classList.add("white-back");

    } else {

        document.querySelector("body").classList.remove("light-mode");
        document.querySelector("body").classList.remove("white-back");
        document.querySelector("body").classList.add("dark-mode");

    }

})