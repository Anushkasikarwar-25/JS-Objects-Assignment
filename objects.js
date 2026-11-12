//Task 1: Dynamic Property Access

const user = {
    username: "srija_dev",
    email: "srija@example.com",
    city: "Hyderabad"
};

let detail = prompt("Enter the detail you want (username, email, or city):");

if (user[detail] !== undefined) {
    console.log(user[detail]);
} else {
    console.log("Detail not available");
}

//Task 2: Object Transformation

const marks = {
    math: 70,
    english: 65,
    science: 80
};

const updatedMarks = {};

for (let subject in marks) {
    updatedMarks[subject] = marks[subject] + 5;
}

console.log("The values of updatedMarks are:", updatedMarks);


//Task 3: Object Property Manipulation

const book = {
    title: "The Mystery Box",
    author: "A. Writer",
    publishedYear: 2010,
    isAvailable: true
};

// Change title
book.title = "The secret key";

// Add genre property
book.genre = "Thriller";

// Remove isAvailable property
delete book.isAvailable;

// Remove author using bracket notation
delete book["author"];


console.log(book);


// Task 4: Product object with methods

const product = {
    name: "Laptop",
    price: 1000,
    discount: 10,


    calculateFinalPrice: function () {

        let discountAmount = (this.price * this.discount) / 100;

        return this.price - discountAmount;

    },


    updateDiscount: function (newDiscount) {

        this.discount = newDiscount;

        console.log(
            "Final price after new discount:",
            this.calculateFinalPrice()
        );

    }

};


console.log(product.calculateFinalPrice());


product.updateDiscount(20);