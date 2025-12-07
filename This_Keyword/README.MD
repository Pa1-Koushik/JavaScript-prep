# 🔑 JavaScript Core Concepts: `this` Keyword, Modes, and Binding Methods

This cheat sheet summarizes the rules governing the **`this`** keyword, the effect of Strict Mode, and the utility of `call`, `apply`, and `bind` for execution context control.

---

## 1. 🌐 The `this` Keyword: Global Context

The value of the **`this`** keyword in the global space is always the **global object**.

* It is the **`window`** object in a browser environment.
* It is the **`global`** object in a Node.js environment.
* The **`window`** object itself is a global object that contains browser functions, APIs, and global variables.

---

## 2. 🚦 Strict Mode vs. Non-Strict Mode

JavaScript behaves differently based on the execution mode.

* **Strict Mode** has more rules and restrictions. To enable it, use `"use strict";` at the top of the code.

### Simple Function Call (`this` inside a function)

| Execution Mode | Value of `this` | Reason |
| :--- | :--- | :--- |
| **Strict Mode** | **`undefined`** | No automatic substitution. |
| **Non-Strict Mode** | **`window`** (Global Object) | **`this` substitution** occurs. |

### `this` Substitution (Non-Strict Only)

* If the value of the `this` keyword is **`undefined` or `null`**, it will be replaced with the **global object** only in **Non-Strict Mode**.

---

## 3. 🎯 `this` Behavior in Functions and Methods

The `this` keyword value depends entirely on **how the function is called**.

### A. Simple Function Call

* Calling without any reference of an object:

    ```javascript
    function x() {
      console.log(this)
    }

    x() // Output (Strict Mode): undefined 
    ```

* Calling via the global object:

    ```javascript
    // Assuming x() is globally defined
    window.x() // Output (Both Modes): window [value becomes the calling object]
    ```

### B. Inside an Object's Method

* If a function is associated with an object, it is called a **method**.
* The value of **`this`** inside a method is the **object itself** (the calling object).

    ```javascript
    const obj = {
        a: 10,
        x: function() {
            console.log(this.a) // 'this' is 'obj'
        }
    }

    obj.x() // Output: 10
    ```

### C. Inside Arrow Functions (Lexical `this`)

* **Arrow functions do not provide their own `this` binding.**
* They **retain the `this` value of the enclosing lexical context** (the scope where the arrow function is present).
* If the arrow function is present inside an object defined in the global scope, its `this` value becomes **`window`**. 

### D. Inside DOM Elements

* The **`this`** keyword inside a DOM event handler refers to the **HTML element** that received the event.

---

## 4. 🔗 Function Context Control: `call`, `apply`, & `bind`

The primary use of these methods is to **borrow a function** from one object and run it as if it belongs to another object, using the target object's data.

### A. `call()`

| Feature | Description |
| :--- | :--- |
| **Action** | **Immediately invokes** the function. |
| **Syntax** | `func.call(thisArg, arg1, arg2, ...)` |
| **Arguments** | Passed **one-by-one** (comma-separated). |
| **Purpose** | The first argument (`thisArg`) defines what **`this`** should refer to. |

### B. `apply()`

| Feature | Description |
| :--- | :--- |
| **Action** | **Immediately invokes** the function. (Works like `call()`) |
| **Syntax** | `func.apply(thisArg, [arg1, arg2, ...])` |
| **Arguments** | Must be in an **array**. |

### C. `bind()`

| Feature | Description |
| :--- | :--- |
| **Action** | **Does NOT call** the function immediately. |
| **Return** | Returns a **new function** with **`this` permanently bound** (fixed). |
| **Use Case** | You can call it later (common in React, event listeners, and OOP). |