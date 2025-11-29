import { Outlet } from "react-router";
import MainMenu from "./components/templates/MainMenu";
import ThemeButton from "./components/themeButton/ThemeButton";
import { useContext } from "react";
import I18nContext from "./contexts/I18nContext";

function App() {
  const { currentLang, changeLang } = useContext(I18nContext);
  return (
    <>
      <header>
        <MainMenu />
        <button onClick={() => changeLang("ua")}>{currentLang}</button>
        <ThemeButton />
      </header>
      <Outlet />
    </>
  );
}

export default App;


