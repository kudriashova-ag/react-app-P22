import { Link, Outlet } from "react-router";
import MainMenu from "./components/templates/MainMenu";
import ThemeButton from "./components/themeButton/ThemeButton";
import { useContext } from "react";
import I18nContext from "./contexts/I18nContext";
import { UserOutlined } from "@ant-design/icons";

function App() {
  const { currentLang, changeLang } = useContext(I18nContext);
  return (
    <>
      <header>
        <MainMenu />

        <div style={{display: 'flex', gap: '10px'}}>
          <button onClick={() => changeLang("ua")}>{currentLang}</button>
          <ThemeButton />
          <Link to="register" className="btn-icon">
            <UserOutlined />
          </Link>
        </div>

      </header>
      <Outlet />
    </>
  );
}

export default App;
