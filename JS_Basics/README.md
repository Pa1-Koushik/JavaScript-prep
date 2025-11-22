# 📚 Core JavaScript Fundamentals

This document summarizes key concepts regarding variable declarations, scope, memory management, and data types in JavaScript.

---

## 1. Variable Declaration: `var`, `let`, and `const`

| Feature | `var` | `let` | `const` |
| :--- | :--- | :--- | :--- |
| **Scope** | **Function Scope** | **Block Scope** | **Block Scope** |
| **Redeclaration (Same Scope)** | **Allowed** (✅) | **Not Allowed** (❌) | **Not Allowed** (❌) |
| **Reassignment** | **Allowed** (✅) | **Allowed** (✅) | **Not Allowed** (❌) |
| **Hoisting Initialization**| Initialized to `undefined` | Stays in Temporal Dead Zone (TDZ) | Stays in Temporal Dead Zone (TDZ) |

> **Note:** Redeclaration of `let` and `const` **is** allowed if it occurs in a **different** scope (e.g., inside a nested block).

---

## 2. Scope in JavaScript

Scope defines the accessibility of variables.

### 🌎 Global Scope
The **outermost environment** in a JavaScript program. Variables declared globally are accessible **anywhere** in the code. There is only one global space per environment.

### 📦 Block Scope
* A block is any code inside **curly braces** (`{}`).
* Variables declared with **`let`** or **`const`** exist **ONLY** inside that block.
    ```javascript
    if (true) {
      let x = 1; // x is block-scoped
    }
    // console.log(x); // ReferenceError
    ```

###  función Function Scope
* Variables declared with **`var`** exist **ONLY** inside the function where they are declared, no matter how many blocks are inside.
    ```javascript
    function example() {
      if (true) {
        var y = 2; // y is function-scoped
      }
      console.log(y); // Output: 2
    }
    ```

---

## 3. Hoisting and TDZ

**Hoisting** is a behavior where variable and function declarations are moved (conceptually) to the top of their scope during the **Creation Phase** of the JavaScript execution context.

### Hoisting Differences
* **Function Hoisting:** Function declarations are **fully hoisted** (the entire body is available) and can be called before they appear in the code.
* **`var` Hoisting:** The declaration is hoisted, but it's initialized with the value **`undefined`**.
* **`let`/`const` Hoisting:** The declaration is hoisted, but they are **not initialized**.

### 💀 Temporal Dead Zone (TDZ)
The TDZ is the period between a `let`/`const` variable being hoisted and its actual line of declaration being executed. During this time, the variable cannot be accessed, preventing unsafe early use and encouraging safer coding practices.

---

## 4. Data Types and Comparison

### Data Type Categories

| Category | Characteristics | Memory Storage | Copy Mechanism | Examples |
| :--- | :--- | :--- | :--- | :--- |
| **Primitive (Simple)** | Immutable, single value | **Stack** (directly) | **By Value** | `Number`, `String`, `Boolean`, `Null`, `Undefined` |
| **Reference (Complex)** | Mutable, object-like | **Heap** (via reference/pointer) | **By Reference** | `Object`, `Array`, `Function` |

> **Note:** When assigning a primitive, the value is copied. When assigning a reference type, only the memory pointer (reference) is copied, so both variables point to the same object in the Heap.

### Type Coercion
The automatic or implicit conversion of a value from one data type to another.

* **Implicit Coercion:** JS automatically converts types (e.g., `5 + "5"` results in `"55"`).
* **Explicit Coercion (Type Casting):** Manual conversion using functions like `Number()`, `String()`, or `Boolean()`.

### Equality Operators

| Operator | Name | Comparison Type | Type Coercion |
| :--- | :--- | :--- | :--- |
| **`==`** | Loose Equality | Compares **value only** | **Yes**, performs coercion |
| **`===`** | Strict Equality | Compares **value AND data type** | **No**, no coercion |

---

## 5. Memory Management

JavaScript utilizes two areas for storing data:

### ⚙️ Stack Memory
* Used for **Primitive data types**.
* Characterized by **fast access** and **predictable storage** (LIFO structure).
* Memory is **freed automatically** when the function containing the data finishes executing.

### 🗑️ Heap Memory
* Used for **Reference (non-Primitive) data types** (objects, arrays, functions).
* Characterized by **flexible size** and **slower access**.
* Memory is managed by the **Garbage Collector**.

### Garbage Collection
JavaScript's automatic process of finding and removing unused objects from the **Heap** memory so that the program doesn't run out of memory. This process happens periodically and is not instantly controlled by the programmer.