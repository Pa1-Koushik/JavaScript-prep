# ✨ Modern JavaScript Features Cheat Sheet

This document summarizes several modern features in JavaScript designed to improve code readability, safety, and conciseness.

---

## 📄 String and Function Syntax

### 1. Template Literals

Template literals allow you to create **dynamic, multi-line strings** using:

- Backticks `` ` ``
- `${}` placeholders

They make string manipulation easier and more readable.

---

### 2. Default Parameters

Default parameters allow you to assign a **default value** to a function parameter when:

- No argument is passed
- The argument is `undefined`

```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}
```

---

## 🛡️ Property Access and Safety

### 3. Optional Chaining (`?.`)

Optional chaining safely accesses **deeply nested object properties**.

If any property is `null` or `undefined`, the expression short-circuits and returns **`undefined`** instead of throwing an error.

```javascript
user?.address?.city;
```

---

### 4. Nullish Coalescing (`??`)

The Nullish Coalescing operator returns the right-hand value only when the left-hand value is:

- `null`
- `undefined`

This avoids replacing valid falsy values like `0`, `""`, and `false`.

```javascript
const count = 0 ?? 10; // → 0 (valid)
```

---

## 📚 Objects, Modules, and Operators

### 5. Object Shorthand

Object shorthand allows cleaner object creation when **variable and property names match**:

```javascript
const color = "red";
const item = { color }; // Equivalent to { color: color }
```

---

## 📦 1. ES Module Imports

The way you import depends on how the values were exported.

| Export Type | Rule | Import Syntax | Example |
|------------|------|----------------|---------|
| **Default Export** | Only ONE default export per file | No curly braces | `import greet from "./message.js";` |
| **Named Exports** | Multiple named exports allowed | Use curly braces `{}` | `import { add, sub } from "./math.js";` |

---

## ⚡ 2. Spread (`...`) and Rest (`...`) Operators

Both use `...` but behave differently based on context.

---

### A. Spread Operator (`...`)

- **Function:** Breaks things apart
- **Action:** Expands arrays/objects into individual values
- **Use Cases:**  
  - Clone arrays  
  - Merge objects  
  - Pass array elements into functions  

```javascript
const nums = [1, 2, 3];
console.log(...nums); // 1 2 3
```

---

### B. Rest Operator (`...`)

- **Function:** Combines things
- **Action:** Collects remaining values into a single array
- **Use Cases:**  
  - Function parameters  
  - Destructuring  

```javascript
function sum(...values) {
  return values.reduce((a, b) => a + b);
}
```

---
