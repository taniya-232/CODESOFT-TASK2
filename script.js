function showSection(sectionId) {
  
  document.querySelectorAll("section.hidden").forEach(sec => {
    sec.style.display = "none";
  });

  
  document.getElementById(sectionId).style.display = "block";

  
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}


