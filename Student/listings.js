// Sample Job Data
const jobs = [
    { title: "Software Engineer", company: "TechCorp", domain: "Software Development", skills: ["JavaScript", "React"], minCgpa: 7.0 },
    { title: "Data Analyst", company: "DataWorks", domain: "Data Science", skills: ["Python", "SQL"], minCgpa: 6.5 },
    { title: "Web Developer", company: "WebGenics", domain: "Web Development", skills: ["HTML", "CSS"], minCgpa: 6.0 }
];

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const userCgpa = parseFloat(params.get("cgpa"));
    const userSkills = params.get("skills").split(",").map(skill => skill.trim());
    const userDomain = params.get("domain");

    const jobList = document.getElementById("jobList");
    const matchedJobs = jobs.filter(job => {
        const skillMatch = job.skills.some(skill => userSkills.includes(skill));
        return skillMatch && job.minCgpa <= userCgpa && job.domain === userDomain;
    });

    if (matchedJobs.length > 0) {
        matchedJobs.forEach(job => {
            const jobCard = document.createElement("div");
            jobCard.classList.add("job-card");
            jobCard.innerHTML = `
                <h2>${job.title}</h2>
                <p><strong>Company:</strong> ${job.company}</p>
                <p><strong>Domain:</strong> ${job.domain}</p>
                <p><strong>Skills Required:</strong> ${job.skills.join(", ")}</p>
                <button onclick="applyJob('${job.title}')">Apply</button>
            `;
            jobList.appendChild(jobCard);
        });
    } else {
        jobList.innerHTML = "<p>No jobs found matching your profile.</p>";
    }
});

function applyJob(jobTitle) {
    // Redirect to Submit Success Page
    window.location.href = `submitcv.html?jobTitle=${encodeURIComponent(jobTitle)}`;
}
