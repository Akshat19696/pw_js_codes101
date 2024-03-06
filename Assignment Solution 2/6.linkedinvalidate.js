// Regular expression pattern for matching valid LinkedIn profile URLs
const linkedInProfilePattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

// Function to check if a LinkedIn profile URL matches the pattern
function isValidLinkedInProfile(url) {
    return linkedInProfilePattern.test(url);
}

// Test cases
const testURLs = [
    "https://www.linkedin.com/in/johndoe123",
    "https://www.linkedin.com/in/jane_smith",
    "https://www.linkedin.com/in/abcd",
    "https://www.linkedin.com/in/abcdefghijklmno_pqrstuvwxy_12345", // Too long
    "https://www.linkedin.com/in/invalid@profile", // Contains invalid character
    "http://www.linkedin.com/in/johndoe123", // Does not start with https://
    "https://www.linkedin.com/profile" // Does not end with a letter or digit
];

// Test the URLs and print results
testURLs.forEach(url => {
    const isValid = isValidLinkedInProfile(url);
    console.log(`${url} is ${isValid ? 'a valid' : 'not a valid'} LinkedIn profile URL`);
});
