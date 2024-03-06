const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 }
];
function getTitle_of_books(b,func){
  let titles=b.map((m)=>m.title);
   return func(titles);
}
function titles_in_alphabeticalorder(p){
return console.log(p.sort());
}
getTitle_of_books(books,titles_in_alphabeticalorder);
