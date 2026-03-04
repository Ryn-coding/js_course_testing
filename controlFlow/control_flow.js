let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);

let role = prompt("Enter your role (Employee / Enrolled Member / Subscriber / Non-Subscriber):");

role = role.toLowerCase();

switch (role) {
    case "employee":
        console.log("You are authorized to access Dietary Services.");
        break;

    case "enrolled member":
        console.log("You are authorized to access Dietary Services and one-on-one interaction with a dietician.");
        break;

    case "subscriber":
        console.log("You are authorized for partial access to Dietary Services.");
        break;

    case "non-subscriber":
        console.log("You need to enroll or subscribe first to avail Dietary Services.");
        break;

    default:
        console.log("Invalid role entered. Please try again.");
}