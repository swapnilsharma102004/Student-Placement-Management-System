// script.js

// Handle profile picture upload
const editPhotoBtn = document.getElementById("edit-photo-btn");
const uploadPhotoInput = document.getElementById("upload-photo");
const profileImg = document.getElementById("profile-img");

editPhotoBtn.addEventListener("click", () => {
  uploadPhotoInput.click();
});

uploadPhotoInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      profileImg.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// Academic performance chart
const ctx = document.getElementById("performance-chart").getContext("2d");
const performanceChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "Semester 1",
      "Semester 2",
      "Semester 3",
      "Semester 4",
      "Semester 5",
      "Semester 6",
    ],
    datasets: [
      {
        label: "CGPA",
        data: [2.5, 3.0, 6.9, 1.9, 3.5, 7.7], // Replace with dynamic values if required
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  },
});
