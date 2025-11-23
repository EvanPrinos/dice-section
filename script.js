function toggleNav() {
  const popoutsidenav = document.getElementById("popoutsidenav");

  if (popoutsidenav.style.width === "35vw") {
    // Close the sidenav
    popoutsidenav.style.width = "0vw";
  } else {
    // Open the sidenav
    popoutsidenav.style.width = "35vw";
  }
}