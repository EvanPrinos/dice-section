function toggleNav() {
  const popoutsidenav = document.getElementById("popoutsidenav");
  const topleftbutton = document.getElementsByClassName("topleftbutton");

  if (popoutsidenav.style.width === "35vw") {
    // Close the sidenav
    popoutsidenav.style.width = "0vw";
    popoutsidenav.style.border = "0px, solid, #22B5F6";
    topleftbutton.style.textcolor = "#22B5F6";

  } else {
    // Open the sidenav
    popoutsidenav.style.width = "35vw";
    popoutsidenav.style.border = "1px, solid, #22B5F6";
    topleftbutton.style.textcolor = "#D0BD45";


  }
}