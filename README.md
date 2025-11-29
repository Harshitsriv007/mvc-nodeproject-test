```markdown
# MVC Project - Node.js

This project is a simple **Node.js MVC application** using **Express.js** and **MongoDB**. It includes services, controllers, models, and repositories along with **unit tests** using **Jest**.

---

## Table of Contents

- [Project Structure](#project-structure)  
- [Features](#features)  
- [Installation](#installation)  
- [Running the Project](#running-the-project)  
- [Testing](#testing)  
  - [Unit Tests](#unit-tests)  
  - [E2E / Integration Tests](#e2e--integration-tests)  
- [Technologies](#technologies)  
- [Notes](#notes)  

---
```
```
## Project Structure

mvc-project/
│
├─ controllers/
│  └─ person.controller.js
│
├─ services/
│  └─ person.service.js
│
├─ repositories/
│  └─ person.repository.js
│
├─ models/
│  └─ person.model.js
│
├─ routes/
│  └─ person.routes.js
│
├─ **tests**/
│  ├─ unit/
│  │  └─ person.model.test.js
│  ├─ person.controller.test.js
│  ├─ person.service.test.js
│  └─ person.routes.test.js
│
├─ app.js
├─ package.json
└─ README.md
```
````

---

## Features

- **CRUD operations** for `Person` entity  
- **Password encryption** using bcrypt  
- **MongoDB** integration via Mongoose  
- **Unit tests** for models and services  
- **Controller and route testing** using Jest + Supertest  

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Harshitsriv007/mvc-nodeproject-test.git
cd mvc-project
````

2. Install dependencies:

```bash
npm install
```

3. Make sure **MongoDB** is installed and running on your machine.
   Example using **Homebrew**:

```bash
brew tap mongodb/brew
brew install mongodb-community@7.0
brew services start mongodb/brew/mongodb-community
```

---

## Running the Project

```bash
npm start
```

* The server runs on **[http://localhost:3000](http://localhost:3000)**
* MongoDB default connection: `mongodb://127.0.0.1:27017/mvc-project`

---

## Testing

### Unit Tests

Unit tests cover **models** and **services**. They do **not** require running the server.

Run unit tests:

```bash
npm run test:unit
```

> `test:unit` script runs only the tests inside `__tests__/unit/`

---

### E2E / Integration Tests

Tests covering **controllers** and **routes**. They run against a test MongoDB database.

Run all tests:

```bash
npm test
```

> Jest is configured to use Node ESM modules.

---

## Technologies

* Node.js (ESM)
* Express.js (v5)
* MongoDB & Mongoose
* Jest (Unit & Integration tests)
* Supertest (Route testing)
* bcryptjs (Password hashing)

---

## Notes

* Make sure **MongoDB** is running before running tests.
* Unit tests mock the repository layer to isolate business logic.
* Integration tests require actual MongoDB connection (`mvc-test` database recommended).
* Jest uses `--experimental-vm-modules` to support ESM imports.
* Increase test timeout if asynchronous operations exceed 5 seconds:

```js
jest.setTimeout(10000); // 10 seconds
```

---

## Author

Harshit Srivastava
