import { createContext, useContext, Dispatch, SetStateAction } from "react";

type ThemeContextValue = {
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
};

export const ThemeContext = createContext<ThemeContextValue>({
  dark: false,
  setDark: () => {},
});

export const useTheme = () => {
  const { dark, setDark } = useContext(ThemeContext);
  return { dark, setDark };
};
