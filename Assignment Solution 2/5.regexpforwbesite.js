const urlPattern = /^(http|https):\/\/[\w\d!@#$%^&*()-_+=~`[\]{}|\\:;"'<,>.?/]+?\.[a-zA-Z]+$/;
// Function to check if a URL matches the pattern
function isValidURL(url) {
  return urlPattern.test(url);
}
// Test cases
const testURLs = [
  "http://www.example.com",
  "https://www.example.com",
  "http://example.com/path",
  "https://example.com/path/to/resource",
  "http://123example.com",
  "https://example123.com",
  "http://example.com?query=123",
  "https://example.com/path/to/resource?query=123",
  "http://example.com:8080",
  "https://example.com:8443",
  "http://example.com/path/to/resource#section",
  "https://example.com/path/to/resource#section",
  "ftp://example.com", // Not a valid URL
  "example.com", // Not a valid URL
  "http://", // Not a valid URL
  "https://" // Not a valid URL
];
// Test the URLs and print results
testURLs.forEach(url => {
  const isValid = isValidURL(url);
  console.log(`${url} is ${isValid ? 'valid' : 'not valid'}`);
});