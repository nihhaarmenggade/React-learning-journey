# Theme Switcher Project Explanation

We are creating a card that can switch its background theme between **Light Mode** and **Dark Mode** by using the **React Context API**.

---

## S1. `createContext()`

`createContext()` in React is used to create a Context object that allows you to share data between components without passing props manually through every level of the component tree. This problem is known as **prop drilling**.

---

## S2. Creating the Context Folder

We created a custom folder called **mycontext** inside the **src** folder. Inside the **mycontext** folder, we created a file named **theme.js** to implement both the Context and the Context Provider in a single file.

---

## S3. Creating the Theme Context

We created `ThemeContext` using the `createContext()` function. Inside it, we passed an object that contains the default theme and two empty custom functions for future operations.

```javascript
export const ThemeContext = createContext({
    thememode: 'light',
    darktheme: () => {},
    lighttheme: () => {}
});
```

---

## S4. Creating the Provider

Next, we created a variable called `ThemeProvider`, which stores the Provider of `ThemeContext`. This allows us to wrap the application and provide the context values.

```javascript
export const ThemeProvider = ThemeContext.Provider;
```

---

## S5. Creating a Custom Hook

We created a custom hook called `useTheme()`.

Instead of passing theme data through props to every component, we store it inside the Context and access it anywhere using `useTheme()`.

This hook simply returns `useContext(ThemeContext)` to make the Context easier to use throughout the application.

This is also implemented inside **theme.js**.

---

## S6. Wrapping the Application with ThemeProvider

We wrapped our UI inside `ThemeProvider`.

Inside the `value` prop, we passed:

* `thememode`
* `lighttheme`
* `darktheme`

In `App.jsx`, we created a `useState()` hook to store the current theme.

```javascript
const [thememode, setthememode] = useState("light");
```

Then we created two functions to update the theme.

```javascript
const lighttheme = () => {
    setthememode("light");
}

const darktheme = () => {
    setthememode("dark");
}
```

These functions update the background color by changing the current theme.

---

## S7. Using `useEffect()`

Next, we used the `useEffect()` hook to manipulate the original HTML element.

Using `document.querySelector()` and `classList`, we remove the previous background classes and add the new theme class depending on the current theme.

Instead of changing the entire `class` attribute manually, `classList` allows us to easily add and remove classes.

The dependency array contains `thememode`, so whenever the theme changes, `useEffect()` runs again and updates the UI.

This logic is implemented inside **App.jsx**.

---

## S8. Using the Custom Hook in ThemeBtn

Inside `ThemeBtn.jsx`, we first imported and used our custom hook.

```javascript
const { thememode, lighttheme, darktheme } = useTheme();
```

This gives us access to the current theme and both theme-changing functions.

---

## S9. Creating the Toggle Switch

Inside the return statement of `ThemeBtn.jsx`, we created an input of type `checkbox`.

The checkbox uses the `onChange` event.

```javascript
checked={thememode === "dark"}
```

This keeps the checkbox synchronized with the current theme.

The `onChange` event returns:

```javascript
const darkmodestatus = e.target.checked;
```

Here:

* `e` is the event object.
* `target` refers to the checkbox.
* `checked` returns either `true` or `false` depending on whether the checkbox is checked.

---

## S10. Theme Switching Logic

Finally, we created the event function that switches between Light Mode and Dark Mode.

```javascript
const onChangeBtn = (e) => {
    const darkmodestatus = e.target.checked;

    if (darkmodestatus) {
        darktheme();
    } else {
        lighttheme();
    }
}
```

If the checkbox is checked, the application switches to **Dark Mode**.

Otherwise, it switches back to **Light Mode**.

---

# 🎉 Project Completed!

This project demonstrates how to use the **React Context API**, **Custom Hooks**, **useState**, **useEffect**, and **useContext** together to implement a global Light/Dark Theme Switcher without prop drilling.
