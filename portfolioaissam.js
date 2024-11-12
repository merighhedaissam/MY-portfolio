document.addEventListener("DOMContentLoaded", () => {
    const words = document.querySelectorAll(".word");
    let currentWordIndex = 0;
    setInterval(() => {
        words.forEach(word => word.style.opacity = "0");
        words[currentWordIndex].style.opacity = "1";
        currentWordIndex = (currentWordIndex + 1) % words.length;
    }, 3000);
});

function toggleSection(sectionId) {
    const skillsSection = document.getElementById("my-skills");
    const projectsSection = document.getElementById("my-projects");

    // Hide both sections first
    skillsSection.style.display = "none";
    projectsSection.style.display = "none";

    // Show the clicked section
    document.getElementById(sectionId).style.display = "block";


    
}
