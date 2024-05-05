// JavaScript for ICSE 10 Percentage Calculator

const form = document.getElementById("percentageCalculator");
const result = document.getElementById("result");
const copyLinkBtn = document.getElementById("copyLinkBtn");
const copyResultBtn = document.getElementById("copyResultBtn");
const shareHeading = document.querySelector(".share-heading");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Prompt the user for their name
    let name = prompt("Enter your name:");

    // If name is null (cancel was clicked) or empty, reload the page
    if (!name || name.trim() === "") {
        window.location.reload();
        return;
    }

    // const english = parseFloat(form.english.value);
    // const hindi = parseFloat(form.hindi.value);
    // const socialStudies = parseFloat(form.socialStudies.value);
    // const math = parseFloat(form.math.value);
    // const science = parseFloat(form.science.value);
    // const computer = parseFloat(form.computer.value);

    // // Exclude the lowest score out of the 6 subjects
    // const subjects = [english, hindi, socialStudies, math, science, computer];
    // const lowestScore = Math.min(...subjects);
    // const totalTop5 = subjects.reduce((acc, val) => acc + val, 0) - lowestScore;
    // const percentage = (totalTop5 / 500) * 100;
// Subjects scores
const english = parseFloat(form.english.value);  // English score
const hindi = parseFloat(form.hindi.value);
const socialStudies = parseFloat(form.socialStudies.value);
const math = parseFloat(form.math.value);
const science = parseFloat(form.science.value);
const computer = parseFloat(form.computer.value);

// Array of non-English subjects
const otherSubjects = [hindi, socialStudies, math, science, computer];

// Finding the lowest score among non-English subjects
const lowestNonEnglishScore = Math.min(...otherSubjects);

// Calculating total of the top 5 scores (English + 4 highest scores from other subjects)
const totalTop5 = english + otherSubjects.reduce((acc, val) => acc + val, 0) - lowestNonEnglishScore;

// Calculating percentage
const percentage = (totalTop5 / 500) * 100;


    let grade = "";
    if (percentage >= 90) {
        grade = "Distinction";
    } else if (percentage >= 75) {
        grade = "First Division";
    } else if (percentage >= 60) {
        grade = "Second Division";
    } else if (percentage >= 50) {
        grade = "Pass";
    } else {
        grade = "Fail";
    }

    // Display the result with name
    result.innerHTML = `<h4><center><p>Name --> <strong>${name}\n</strong></p></center></h4>
    <h4><center><p>Grade --> <strong>${grade}\n</strong></p></center></h4>
    <h4><center><p>Pecentage --> <strong>${percentage.toFixed(2)}%\n</strong></p></center></h4>`;

    // Show the result div
    result.style.display = "block";

    // Show the copy link button
    copyLinkBtn.style.display = "block";

    // Show the copy result button
    copyResultBtn.style.display = "block";

    // Show the share message
    shareHeading.style.display = "block";

    // Function to copy the link to clipboard
    function copyLink() {
        const url = window.location.href;
        const message = `Discover your ICSE 10th grade percentage, share your success, and celebrate your achievements with friends!\n`;
        const textToCopy = `${message}\nTry now! https://hz-projects.github.io/icse-percentage-calculator`;
        navigator.clipboard.writeText(textToCopy);
        alert("Click Ok to Copy!");
    }

    // Function to copy the result to clipboard
    function copyResult() {
        const url = window.location.href;

        const message = `CICSE Class 10th Result\n\nName: ${name}\nGrade: ${grade}\nPercentage: ${percentage.toFixed(2)}%\n\nSubjects\t\t\tMarks\n\nEnglish (Lit+Lang)-->\t\t${english}\nHindi-->\t\t${hindi}\nSocial Science (His&Civics+Geo)-->\t${socialStudies}\nMathematics-->\t\t${math}\nScience (Phy+Che+Bio)-->\t\t${science}\nComputer-->\t\t${computer}\n\nWebsite : https://hz-projects.github.io/icse-percentage-calculator`;


        navigator.clipboard.writeText(message);

        alert("Click OK to Copy Result!");
    }

    // Add event listeners to the buttons
    copyLinkBtn.addEventListener("click", copyLink);
    copyResultBtn.addEventListener("click", copyResult);
});

// Hide the result, copy link button, and copy result button initially
result.style.display = "none";
copyLinkBtn.style.display = "none";
copyResultBtn.style.display = "none";
shareHeading.style.display = "none";
