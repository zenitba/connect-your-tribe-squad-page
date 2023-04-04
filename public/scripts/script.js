function membersl() {
    var members = document.querySelectorAll(".members");
  
    for (var i = 0; i < members.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = members[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        members[i].classList.add("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);