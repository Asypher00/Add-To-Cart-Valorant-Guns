import { createContext, useContext, useState } from "react";
const localContext = createContext({
  language: "english",
  setLanguage: () => {}
});
const LocalProvider = ({ children }) => {
  const [language, setLanguage] = useState("English");
  return (
    <localContext.Provider value={{ language, setLanguage }}>
      {children}
    </localContext.Provider>
  );
};
const useLanguage = () => useContext(localContext);
export { localContext, LocalProvider, useLanguage };
