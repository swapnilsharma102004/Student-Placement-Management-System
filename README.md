
# Student Placement Management System

Welcome to the Student Placement Management System, designed to streamline the process of managing student placements efficiently. This system aims to provide a comprehensive platform for tracking and organizing student placements.


## Project Overview

The Student Placement Management System is a software solution that helps educational institutions manage student placements by automating tasks such as student registration, placement tracking, and reporting. It is built with [list technologies used, e.g., HTML, php, MySQL].
## Technologies Used

Backend: php

Frontend: HTML, CSS, JavaScript

Database: Myphpadmin

Other Tools: Xampp
## File Structure

Below is a brief description of each file and its purpose:

(All the CSS and JS file for style and functionality are of same name )

### Log_in
- **`login_form.php`:** It is the main code for the login page
- **`login.css`:** It gives color and design to login page
- **`login.js`:** It gives functionality to the login page

### Integration
- **`config.php`:** This connect to our local database
- **`database.php`:** It holds the user registration data 

### Student 

- **`home.html`:** This is the home page of student dashboard 
- **`listing.php`:** This page shows the jobs listed by the coordinator
- **`jobapp.html`:** In this page Student apply for the job listed by the coordinator
- **`submit_application.php`:** It Submits the application to the coordinator
- **`submit_cv.php`:** It holds the CV and submits the application which is shown at the coordinator page
- **`internship-listing.html`:** List of internship(under progress{you can try contributing} because it is same as job listing)
- **`profile.html`:** Shows you the profile of Student(not integrated)
- **`tracking.html`:** To track the application submitted by the student(not implemented for tracking , you can use ABC123,XYZ456 for testing)
- **`discussion.html`:** This is the area for discussion amoung Students
- **`about.html`:** This holds the information about the website
- **`faq.html`:** This is the section where frequently asked question can be accessed

### Coordinator

- **`coordinator.php`:** Dashboard for the coordinator login 
- **`job-opening.php`:** Here coordinator will add the job opening which will be shown at the listing.php in student section
- **`schedual-interview.php`:** In this page coordinator can schedule interviews for the selected Students
- **`view_application.php`:** It shows all the uploaded CVs by the students to the coordinator




