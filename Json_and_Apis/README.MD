# 🌐 JSON Operations and HTTP Methods Cheat Sheet

This document summarizes the core concepts of JSON serialization/deserialization and the fundamental HTTP methods used for interacting with web services (APIs).

---

## 💾 JSON (JavaScript Object Notation)

JSON is a lightweight data-interchange format. It is essentially a **string that looks like a JavaScript object**.

### A. Deserialization: `JSON.parse()`

**JSON parsing** means converting raw JSON text (a string) into usable JavaScript data (an object or array).

* **Function:** `JSON.parse(jsonString)`
* **Used When:**
    * When you call an API: APIs always return JSON as a **string**, which must be parsed.
    * When reading data from databases or files.

### B. Serialization: `JSON.stringify()`

**JSON stringify** converts a JavaScript value (object or array) into a JSON string.

* **Function:** `JSON.stringify(jsValue)`
* **Used When:**
    * When saving data to `localStorage` / `AsyncStorage`.
    * When **sending data to a server** (APIs), as the network requires data to be sent as a string.
    * When saving data in files (e.g., `data.json`).

### Terminology

* **Serialization:** Converting objects $\rightarrow$ string format (JSON)
* **Deserialization:** Converting string $\rightarrow$ objects again

---

## 📡 HTTP Request Methods

These are the standardized methods used by a client (like your browser or application) to communicate the desired action on a resource on the server. The methods correspond directly to **CRUD** (Create, Read, Update, Delete) operations.

| HTTP Method | Meaning | CRUD Operation |
| :--- | :--- | :--- |
| **GET** | Retrieve data from the server. | **READ** |
| **POST** | Send data to the server to create a **new** resource. | **CREATE** |
| **PUT** | Send data to the server to **replace** an existing resource entirely. | **UPDATE** |
| **PATCH** | Send data to the server to **modify part** of an existing resource. | **UPDATE (partial)** |
| **DELETE** | Request the server to remove a specified resource. | **DELETE** |