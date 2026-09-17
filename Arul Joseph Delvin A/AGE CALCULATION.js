const dobInput = prompt("Enter your date of birth (YYYY-MM-DD):");

const dob = new Date(dobInput);
const today = new Date();

if (isNaN(dob.getTime())) {
    console.log("Invalid date format.");
} else {
    let age = today.getFullYear() - dob.getFullYear();

    const month = today.getMonth() - dob.getMonth();

    if (
        month < 0 ||
        (month === 0 && today.getDate() < dob.getDate())
    ) {
        age--;
    }

    console.log("Your age is:", age);
}
