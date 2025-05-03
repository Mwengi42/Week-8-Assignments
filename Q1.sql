-- Create Authors Table
CREATE TABLE Authors (
    AuthorID INT AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(100) NOT NULL,
    LastName VARCHAR(100) NOT NULL,
    UNIQUE(FirstName, LastName)
);

-- Create Books Table
CREATE TABLE Books (
    BookID INT AUTO_INCREMENT PRIMARY KEY,
    Title VARCHAR(255) NOT NULL,
    AuthorID INT,
    YearPublished INT,
    FOREIGN KEY (AuthorID) REFERENCES Authors(AuthorID) ON DELETE CASCADE
);

-- Create Customers Table
CREATE TABLE Customers (
    CustomerID INT AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(100) NOT NULL,
    LastName VARCHAR(100) NOT NULL,
    Email VARCHAR(100) UNIQUE
);

-- Create Borrow Records Table
CREATE TABLE BorrowRecords (
    BorrowID INT AUTO_INCREMENT PRIMARY KEY,
    BookID INT,
    CustomerID INT,
    DateBorrowed DATE NOT NULL,
    DateReturned DATE,
    FOREIGN KEY (BookID) REFERENCES Books(BookID),
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

-- Sample Data
INSERT INTO Authors (FirstName, LastName) VALUES ('John', 'Smith'), ('Jane', 'Doe');
INSERT INTO Books (Title, AuthorID, YearPublished) VALUES ('Book1', 1, 2000), ('Book2', 2, 2010);
INSERT INTO Customers (FirstName, LastName, Email) VALUES ('Alice', 'Johnson', 'alice.johnson@email.com');
INSERT INTO BorrowRecords (BookID, CustomerID, DateBorrowed) VALUES (1, 1, '2023-05-01');
