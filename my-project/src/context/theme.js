import { createContext, useContext } from "react";

// Create the context with the correct keys and placeholder objects
export const ThemeContext = createContext({
  themeMode: 'light',
  darkTheme: () => {},
  lightTheme:() =>  {},
});

export const ThemeProvider = ThemeContext.Provider;
//custom hook
export default function useTheme() {
  return useContext(ThemeContext);
}
