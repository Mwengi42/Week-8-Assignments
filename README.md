# 📚 Library Management System – Relational Database Design

## 📌 Project Overview

This project is a relational database design for a **Library Management System**, developed using **MySQL**. It simulates a real-world use case where libraries manage books, members, authors, and borrow/return transactions.

---

## 🧠 Entity-Relationship Diagram (ERD)

The ERD illustrates the logical structure of the database and shows how entities like `Books`, `Members`, `Borrowings`, and `Authors` are related.

---

## 🗃️ Database Schema Overview

### 📂 Tables Created

1. **Books**
   - `book_id` (Primary Key)
   - `title`
   - `isbn` (UNIQUE)
   - `author_id` (Foreign Key → Authors)

2. **Authors**
   - `author_id` (Primary Key)
   - `name`

3. **Members**
   - `member_id` (Primary Key)
   - `full_name`
   - `email` (UNIQUE)

4. **Borrowings**
   - `borrow_id` (Primary Key)
   - `book_id` (Foreign Key → Books)
   - `member_id` (Foreign Key → Members)
   - `borrow_date`
   - `return_date`

### 🔐 Constraints Used

- `PRIMARY KEY`, `FOREIGN KEY`, `NOT NULL`, and `UNIQUE` constraints are applied to ensure **data integrity**.
- Relationships implemented: 
  - `Books` ↔ `Authors` (Many-to-One)
  - `Borrowings` ↔ `Books` (Many-to-One)
  - `Borrowings` ↔ `Members` (Many-to-One)

---

## 📝 How to Set Up

1. Open MySQL Workbench or your preferred SQL environment.
2. Run the SQL script file:
   ```sql
   SOURCE path/to/library_schema.sql;
