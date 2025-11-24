# 🚀 JavaScript Functions: A Complete Guide

This document summarizes the core concepts of functions in JavaScript, including their various forms, behavior (hoisting, scope), and their role in the language's single-threaded, asynchronous model.

---

## 1. Functions: The Core Building Blocks

In JavaScript, **functions are special objects** that can be called (invoked). They serve as a **block of code that performs a specific task.**

### Function Definition Types

Function definition is the general term for any way a function is created. There are three main types:

| Feature | Function Declaration | Function Expression | Arrow Function |
| :--- | :--- | :--- | :--- |
| **Syntax** | `function name() {}` | `const f = function() {}` | `(params) => {}` |
| **Hoisting** | **Fully Hoisted** (✅) | Variable is hoisted (❌ Function value not hoisted) | Not Hoisted (❌) |
| **`this` Binding** | Dynamic (Depends on call) | Dynamic (Depends on call) | **Lexical** (Inherits from outer scope) |
| **`arguments` Object** | **Available** (✅) | **Available** (✅) | **Unavailable** (❌ - Must use Rest Parameters) |
| **Constructor** | **Can be used with `new`** (✅) | **Can be used with `new`** (✅) | **Cannot be used with `new`** (❌) |
| **Anonymous** | No (Must have name) | Yes (Typically) | Yes (Typically) |

### Function Declaration vs. Expression

| Feature | Function Declaration | Function Expression |
| :--- | :--- | :--- |
| **Hoisting Behavior** | Call before definition is OK due to **full hoisting**. | Call before definition causes error. Only the variable is hoisted. |
| **Typical Use** | Standalone, general-purpose functions. | **Callbacks, closures, IIFEs,** and dynamic function assignment. |

> **Anonymous Functions:** Functions without a name, primarily used as **values** (e.g., passed as arguments or assigned to variables). Function Expressions and Arrow Functions are often anonymous.

---

## 2. Function Behavior and Properties

### First-Class Citizens 🥇
In JavaScript, functions are **first-class citizens**, meaning they can be treated like any other value:
* Stored in variables.
* **Passed as arguments** to other functions.
* **Returned from** other functions.
* Stored in arrays or objects.
* Assigned properties.

### Pure Functions
A **pure function** is one that:
1.  Always returns the **same output for the same input** (deterministic).
2.  Does **not cause any side effects** (e.g., doesn't modify global state, doesn't perform I/O like network requests).

### Returning Functions
A **returning function** uses the `return` statement to send a value back to the caller. This allows the function's result to be stored, used, or passed to another function.

---

## 3. Scope and Accessibility

Scope determines **where a variable or function is accessible** in the code.

### Function Scope
* Every function in JS creates its **own scope**.
* Variables declared **inside a function** are not accessible outside that function.
* Variables declared **outside any function** are **global** and accessible from everywhere.

---

## 4. Higher-Order Functions (HOFs) and Callbacks

### Higher-Order Functions (HOFs)
HOFs are functions that **operate on other functions**. This means they either:
1.  **Take one or more functions as arguments** (e.g., `map`, `filter`, `setTimeout`).
2.  **Return a function** as a result (e.g., a function factory or currying).

HOFs are used to make code **cleaner, more reusable, and better for data transformation** (e.g., Array methods).

### Callbacks
A **callback function** is a function that is **passed as an argument** to another function and is executed **later** by the receiving function.

* **Passing Reference:** Use the function name **without parentheses** (`fun`) to pass the function reference.
* **Immediate Execution:** Use the function name **with parentheses** (`fun()`) to call it immediately.

Callbacks are essential for:
* **Asynchronous programming** (API calls, timers).
* **Event handling** (`addEventListener`).
* Making functions reusable.

---

## 5. JavaScript's Execution Model: Single-Threaded Async

JavaScript is inherently a **Single-Threaded** language. 

* It executes code **one line at a time** in a **synchronous** model by default.
* It **cannot run two JS lines simultaneously** on the main thread.

However, JS supports asynchronous operations using:
* **Callbacks**
* **Promises**
* **`async/await`**
* **`setTimeout` / `setInterval`**
* **`fetch` / API calls**
* **Event Listeners**

This asynchronous capability is achieved by leveraging the runtime environment components (like the Browser's **Web APIs** or Node's APIs) in coordination with the **Event Loop**, **Call Stack**, and **Task Queue / Microtasks**. These mechanisms allow JS to delegate time-consuming tasks and execute the callbacks later, once the long-running operation is complete, without blocking the main thread.

