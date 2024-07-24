function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;


    
    }

Book.prototype.displayInfo = function() {
    console.log(`Title: ${this.title}, Auhtor: ${this.author}, Length: ${this.pages}`);

};

let booksArray = [];



function addBook(title, author, pages) {
    let newBook = new Book(title, author, pages);
    booksArray.push(newBook);
}

function searchAuthor(name) {
    return booksArray.filter(Book => Book.author === name);
}

function searchTitle(title) {
    return booksArray.filter(Book => Book.title === title);
}
// Here is the more effective version as mapping is just redundant here
function booksOver100Pages() {
    return booksArray.filter(Book => Book.pages > 100);
};

// here is a version with mapping
function getDetailedBooksOver100Pages() {
    return booksArray
        .filter(book => book.pages > 100)
        .map(book => ({
            ...book,
            title: `Title: ${book.title}`,
            author: `Author: ${book.author}`
        }));
}

addBook("The Hunger Games", "Suzanne Collins", 320);
addBook("Lord Of The Rings", "J.R.R. Tolkien", 1220);

console.log(getDetailedBooksOver100Pages())
console.log(booksOver100Pages())
console.log(booksArray);

// ==========================================================ACCOUNT===================================================================


function Account(accNumber, balance, owner) {
    this.accNumber = accNumber;
    this.balance = balance;
    this.owner = owner;

}

Account.prototype.withdraw = function(amount) {
    if (amount <= this.balance) {
        this.balance -= amount;
        return `withdrawal of ${amount} successfully withdrawn, new balance: ${this.balance}.`;
    } else {
        return `Insufficient funds. Your balance is $${this.balance}`
    }
}

Account.prototype.deposit = function(amount) {
    this.balance += amount;
    return `Deposit of ${amount} succesfully deposited. New Balance is $${this.balance}.`;
}

Account.prototype.interest = function(rate, years, timesPerYear) {
    const principal = this.balance;
    
    const amount = principal * Math.pow(1 + rate / timesPerYear, timesPerYear * years)
    const interestEarned = amount - principal;
    this.balance += interestEarned;
    return `Interest of $${interestEarned} added to balance!`

}