# ⚛️ JavaScript & React Core Concepts Cheat Sheet

This document summarizes key concepts related to **state management (immutability)** in React and JavaScript, **valid identifier rules**, and essential **array iteration methods** in JavaScript.

---

## 💾 React State Management: Ensuring Immutability

When updating state (especially in React), you **must avoid mutating the original object**. Instead, you **clone the object first, and then update the clone.**

* **Most Common Method:** Using the **Spread Operator** `{ ...obj }` to create a shallow copy.

---

## 🏷️ JavaScript Identifiers: Rules for Keys and Variables

An **identifier** is a sequence of characters used to name a variable, function, class, or object key.

### ✔️ Valid Identifiers

These can be used **without quotes** as object keys OR variable names.

* Can contain **letters** (A–Z, a–z).
* Can contain **digits**, **BUT cannot start with a digit**.
* Can contain **`_`** (underscore).
* Can contain **`$`** (dollar sign).
* **Cannot contain spaces**.
* **Cannot contain special characters** like `-`, `.`, `@`, `#`, etc.

### ❌ Non-Valid Identifiers (Require Quotes)

These cannot be used directly as keys or variable names. You must use quotes to use them as object keys (e.g., `{'non-valid': value}`).

* They fail because:
    * They contain **spaces**.
    * They **start with a number**.
    * They contain **special characters** like `-`, `.`, `@`, etc.

---

## 🔄 Looping / Iteration Array Methods in JavaScript

| Method | What it Does | When to Use (✔) | When to Avoid (❌) |
| :--- | :--- | :--- | :--- |
| **1. `forEach()`** | Loops through each element. Used for performing an action. **Does NOT return anything** (returns `undefined`). | **✔** When you want to **log, update UI, or modify external variables** (side effects). | **❌** Not for creating new arrays. |
| **2. `map()`** | Loops through array. **Creates a new array** by transforming each element. Length is always the same as original. | **✔** When you want a **new array of transformed data**. | **❌** Not for filtering, not for single-result output. |
| **3. `filter()`** | **Returns a new array** with elements that pass a condition. Length can change. | **✔** When you want to **keep only specific elements**. | |
| **4. `reduce()`** | Converts array to one single value. Uses `acc` (accumulator) and `cur` (current value). | **✔** When output is one value $\rightarrow$ **sum, max, count, object, string, array flatten**. | |
| **5. `every()`** | Checks if **EVERY** element satisfies a condition. Returns `true` or `false`. | **✔** **Validating conditions** (password rules, input checks). | |
| **6. `some()`** | Checks if **AT LEAST ONE** element satisfies a condition. Returns `true` or `false`. | **✔** Checking if there is **ANY match**. | |
| **7. `find()`** | Returns the **first element** that matches the condition. If not found $\rightarrow$ `undefined`. | **✔** To get the **actual value/object** of the matching element. | |