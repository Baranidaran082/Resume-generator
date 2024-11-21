function generateResume() {
    document.querySelector(".resume-container").style.display = "block";
    document.querySelector(".form-container").classList.add('u')
    document.getElementById("resumeName").textContent = document.getElementById("fullName").value;
    document.getElementById("resumeTitle").textContent = document.getElementById("jobTitle").value;
    document.getElementById("resumeObjective").textContent = document.getElementById("objective").value;
    document.getElementById("resumeSkills").textContent = document.getElementById("skills").value;
    document.getElementById("resumeEducation").textContent = document.getElementById("education").value;
    document.getElementById("resumeContact").textContent = document.getElementById("contact").value;
    document.getElementById("resumeExperience").textContent = document.getElementById("experience").value;
    document.getElementById("resumeAchievements").textContent = document.getElementById("achievements").value;
    document.getElementById("resumeProjects").textContent = document.getElementById("projects").value;
}


