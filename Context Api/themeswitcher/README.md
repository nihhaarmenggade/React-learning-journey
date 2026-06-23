we are creating a card who can swith its background theme to dark and light by using useContext 

S1. createContext() in React is used to create a Context object that allows you to share data between components without passing props manually through every level (called "prop drilling").

S2. We have created a custom folder called mycontext in the src file and in the context folder we have created a file called theme.js
for using context and context provider in one file 

S3. we have created Themecontext to hold the useContext function in which we passed the object and i that object we have passed default value for theme and custom functions which holds nothing for further operations 
export const ThemeContext = createContext({
    thememode: 'light',
    darktheme: ()=>{},
    lighttheme: ()=>{}
});

S4. further we have passed Themeprovider variable which holds the provider function in one single file 
export const ThemeProvider = ThemeContext.Provider;

S5. We have created a custom hook. Instead of passing theme data through props to every component, you can store it in Context and access it anywhere using useTheme().
This hook returns useContext and holds the ThemeContext for simple passing operation
it is done in single file theme.js

S6: we have wrap the ui div section with provider (ThemeProvider) and in values we haved passed the Createcontext data which is lighttheme darktheme and thememode also in the App.jsx file given the operation by firing the functions of those thememodes and we also fired a usestate hook with the thememode and setthememode the funtions use the setthememode to change the bgcolor and upadete the thememode.
{
setthememode("light");
    }
    const darktheme = ()=> {
setthememode("dark");
    }
 
S7: Further we have fiered a UseEffect hook to manipulate the originla html which is done in js so by using document.queryselctor.classlist we removed the default bg colors and added thememode function in it as it holds the operation 
:Instead of changing the entire class attribute manually, classList lets you work with classes easily.
and in the dependenci it holds the thememode if changes are made it will fier the thememode