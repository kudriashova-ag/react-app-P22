import { Outlet } from "react-router";
import MainMenu from "./components/templates/MainMenu";
import { useContext } from "react";
import ThemeContext from "./contexts/ThemeContext";

function App() {
  const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <>
      <header>
        <MainMenu />
        {theme}
        <button onClick={toggleTheme}>change</button>
      </header>
      <Outlet />
    </>
  );
}

export default App;


