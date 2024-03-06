let BooksList=[{Name:"Indian Philosophy",
Author:"Dr. S. Radhakrishnan",
Publication_Year:1923},{Name:"Agnibeena",
Author:"Kazi Najrul Islam",
Publication_Year:1922},{Name:"Eternal India",
Author:"Indira Gandhi",
Publication_Year:2012},{Name:"Devdas",
Author:"Sarat Chandra Chattopadhyay",
Publication_Year:1917},{Name:"Indian Philosophy",
Author:"Dr. S. Radhakrishnan",
Publication_Year:20013},]
let NewBookList=BooksList.filter((p)=>p.Publication_Year<2010);
console.log(NewBookList);
NewBookList.forEach((p)=>{p.Author=p.Author.toUpperCase()});
console.log(NewBookList);