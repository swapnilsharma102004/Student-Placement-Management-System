const internships = [
    { title: "Data Science Intern", company: "DataWorks", domain: "Data Science", skills: ["Python", "SQL"], minCgpa: 6.5, stipend: "10,000/month" },
    { title: "Web Development Intern", company: "WebGenics", domain: "Web Development", skills: ["HTML", "CSS", "JavaScript"], minCgpa: 6.0, stipend: "8,000/month" },
    { title: "AI Research Intern", company: "AI Labs", domain: "Artificial Intelligence", skills: ["Python", "Machine Learning"], minCgpa: 7.0, stipend: "15,000/month" }
];

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const userCgpa = parseFloat(params.get("cgpa"));
    const userSkills = params.get("skills").split(",").map(skill => skill.trim());
    const userDomain = params.get("domain");

    const internshipList = document.getElementById("internshipList");
    const matchedInternships = internships.filter(internship => {
        const skillMatch = internship.skills.some(skill => userSkills.includes(skill));
        return skillMatch && internship.minCgpa <= userCgpa && internship.domain === userDomain;
    });

    if (matchedInternships.length > 0) {
        matchedInternships.forEach(internship => {
            const internshipCard = document.createElement("div");
            internshipCard.classList.add("internship-card");
            internshipCard.innerHTML = `
                <h2>${internship.title}</h2>
                <p><strong>Company:</strong> ${internship.company}</p>
                <p><strong>Domain:</strong> ${internship.domain}</p>
                <p><strong>Skills Required:</strong> ${internship.skills.join(", ")}</p>
                <p><strong>Stipend:</strong> ${internship.stipend}</p>
                <button onclick="applyInternship('${internship.title}')">Apply</button>
            `;
            internshipList.appendChild(internshipCard);
        });
    } else {
        internshipList.innerHTML = "<p>No internships found matching your profile.</p>";
    }
});

function applyInternship(internshipTitle) {
    // Redirect to Submit CV Page
    window.location.href = `submitcv.html?internshipTitle=${encodeURIComponent(internshipTitle)}`;
}
