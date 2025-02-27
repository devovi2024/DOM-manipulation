# **DOM (Document Object Model)**

## **What is DOM?**
DOM (Document Object Model) is a programming interface for web documents. It represents the structure of a webpage as a **tree-like model**, where each element is a **node**.

## **Why is DOM Important?**
- Allows JavaScript to interact with HTML & CSS.
- Helps in dynamically updating content without reloading the page.
- Enables event handling (e.g., click, hover, keypress).
- Makes webpages more interactive and dynamic.

---

## **1️⃣ Selecting Elements**
### **Methods to Select Elements:**
1. `getElementById("id")` → Selects an element by its **ID**.
2. `querySelector(".class")` → Selects the **first matching** element using a CSS selector.
3. `querySelectorAll("p")` → Selects **all matching** elements as a **NodeList**.

📌 *Example:*
```js
let title = document.getElementById("main-title");
let firstParagraph = document.querySelector("p");
let allParagraphs = document.querySelectorAll("p");
```

---

## **2️⃣ Changing Content**
### **Methods to Change Content:**
4. `innerText` → Changes **only text** (ignores hidden text).
5. `innerHTML` → Changes **text + HTML tags**.
6. `textContent` → Changes **all text, including hidden content**.

📌 *Example:*
```js
document.getElementById("heading").innerText = "Hello World!";
document.getElementById("content").innerHTML = "<b>Bold Text</b>";
```

---

## **3️⃣ Adding/Removing Classes**
### **Methods to Modify CSS Classes:**
7. `classList.add("new-class")` → Adds a class.
8. `classList.remove("old-class")` → Removes a class.
9. `classList.toggle("toggle-class")` → Adds if not present, removes if present.

📌 *Example:*
```js
document.getElementById("box").classList.add("highlight");
document.getElementById("box").classList.remove("hidden");
document.getElementById("box").classList.toggle("dark-mode");
```

---

## **4️⃣ Event Listeners**
### **Common Events & Listeners:**
10. `click` → Triggers when element is clicked.
11. `mouseover` → Triggers when mouse is over the element.
12. `keydown` → Triggers when a key is pressed.
13. `dblclick` → Triggers on double-click.

📌 *Example:*
```js
document.getElementById("btn").addEventListener("click", function() {
    alert("Button Clicked!");
});
```

---

## **Opposite of DOM**
DOM is **structured, interactive, and dynamic**, so its opposites can be:
- **Unstructured Data** (Plain text, raw HTML)
- **Static Content** (Fixed webpage, no JavaScript interaction)
- **Backend Data** (JSON, database, server-side logic)

📌 *Fun Comparison:* *"DOM is like LEGO—move and change things! Its opposite is a drawing—you can’t change it!"* 

---

## **Final Thoughts**
✅ DOM makes webpages **interactive** 
✅ Used for **dynamic content, animations, & event handling** 
✅ Mastering DOM is key for **JavaScript developers** 



