# 🚀 JavaScript Execution Model, Asynchronicity, and Data Exchange

This document covers the fundamental concepts of how JavaScript code runs, manages asynchronous operations, and handles data transfer formats.

---

## 1. ⚙️ JavaScript Execution Context (EC)

JavaScript is a **Synchronous, Single-threaded language**, meaning it executes one command at a time in a specific, sequential order. All code execution happens within an **Execution Context (EC)**.

### Execution Context Components

Every EC is a "big box" containing two components:

1.  **Memory Component (Variable Environment):**
    * The storage space where all variables and functions are stored in key-value pairs.
2.  **Code Component (Thread of Execution):**
    * The place where the code is executed line by line.

### The Two Phases of EC Creation

When the JavaScript engine starts running code, the EC is created in two distinct phases:

| Phase | Description | Hoisting Behavior |
| :--- | :--- | :--- |
| **A. Memory Creation Phase** | The engine scans the code and allocates memory before any execution. | **Variables** (`var`): Initialized to `undefined`. **Functions:** The entire code body is stored in memory (full hoisting). |
| **B. Code Execution Phase** | The engine executes the code line by line, top to bottom. | **Variables:** Actual values are assigned, replacing `undefined`. **Function Call:** A new Function EC is created and pushed onto the Call Stack. |

### Global vs. Function EC

* **Global Execution Context (GEC):** The first EC created when the program starts. It forms the base context and creates the global object (e.g., `window` in a browser) and sets the `this` keyword.
* **Function Execution Context (FEC):** A brand new EC created every time a function is invoked.

---

## 2. 📚 The Call Stack (Execution Stack)

The **Call Stack** is a **Last-In, First-Out (LIFO)** data structure used exclusively to **manage the order of Execution Contexts**. 

* **Start:** The **GEC** is pushed onto the bottom of the stack.
* **Invocation:** When a function is called, a new **FEC** is created and pushed onto the top of the stack.
* **Execution:** The engine always executes the code of the EC currently at the **top** of the stack.
* **Return:** When a function finishes, its **FEC is popped** (deleted) from the stack, and control returns to the EC below it.
* **End:** When the whole code is finished, the GEC is popped, and the Call Stack becomes empty.

---

## 3. ⏱️ Asynchronous JavaScript & Promises

**Asynchronous code** is code that completes **later**, allowing the single-threaded JavaScript engine to continue executing other tasks without waiting.

### Drawbacks of Callbacks (The Problem Promises Solved)

* **Callback Hell:** Deeply nested, hard-to-read, and difficult-to-maintain code caused by sequential asynchronous operations.
* **Inversion of Control:** Losing control over *when*, *how often*, and *if* a callback function will be executed by a third-party function or library.
* **Error Handling:** Painful and inconsistent across deeply nested calls.

### The Promise Object

A **Promise** is a special JavaScript object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

| State | Description | Handlers |
| :--- | :--- | :--- |
| **1. Pending** | Initial state; the operation is still working and not yet finished. | None |
| **2. Fulfilled (Resolved)** | The operation completed **successfully** and now has a resulting value. | Handled by `.then()` |
| **3. Rejected** | The operation **failed** (network error, exception, etc.) and has an error reason. | Handled by `.catch()` |

### Promise Chaining

**Promise Chaining** is calling multiple `.then()` methods sequentially. Each `.then()` method executes after the previous one resolves and **returns a new Promise**, allowing for a structured sequence of async operations.

* **Rule:** You must **return** a value or a new Promise from a `.then()` block to pass the result to the next `.then()` in the chain.

---

## 4. ✨ Async/Await

The `async/await` syntax is a modern way to **consume (use)** Promises, making asynchronous code look and behave like synchronous code.

### **`async` Keyword**

* Used before a function declaration (`async function getData() { ... }`).
* An `async` function **always returns a Promise**. If you return a non-Promise value, JavaScript automatically wraps it in a resolved Promise.

### **`await` Keyword**

* Can only be used **inside an `async` function**.
* It is placed in front of a Promise (the one you want to resolve).
* It **pauses the execution** of the `async` function until the Promise settles (either resolves or rejects).

*The Promise itself is the same underneath; `async/await` just provides a cleaner syntax than `.then()` chaining.*

---

## 5. 📡 `fetch` vs. `Axios`

Both `fetch` and `Axios` are used to make REST API calls, and both **always return a Promise**.

| Feature | `fetch` (Browser API) | `Axios` (npm Library) |
| :--- | :--- | :--- |
| **Built-in?** | ✔ Yes (Native) | ❌ No (Requires installation) |
| **Data Parsing** | ❌ Requires manual `.json()` call. | ✔ **Auto-parses** JSON response data. |
| **Error Handling** | ❌ Only rejects on **network errors**. Status codes like 404/500 resolve. | ✔ **Rejects on 400/500** status codes (more intuitive). |
| **Interceptors** | ❌ No built-in support. | ✔ Allows logic to run **before** the request or **after** the response. |

---

## 6. 📝 JavaScript Object vs. JSON

| Feature | JavaScript Object | JSON (JavaScript Object Notation) |
| :--- | :--- | :--- |
| **Type** | An **in-memory data structure** (Code). | A **string format** (Data Exchange). |
| **Network** | ❌ Cannot be sent directly over the internet. | ✔ Standard format for sending data (APIs). |
| **Key Quotes** | Keys **can be** without quotes (or quoted). | Keys **must** be enclosed in **double quotes** (`"key"`). |
| **Value Types** | Can contain **any** JS type (functions, `undefined`, Date, etc.). | Only standard data types: string, number, boolean, null, array, object. |