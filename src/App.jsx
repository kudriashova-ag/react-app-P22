import { Link, Outlet } from "react-router";
import MainMenu from "./components/templates/MainMenu";
import ThemeButton from "./components/themeButton/ThemeButton";
import { useContext, useEffect } from "react";
import I18nContext from "./contexts/I18nContext";
import { UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./slices/counterSlice";
import { getPosts } from "./slices/postsSlice";
import  Search  from "./components/search/Search";


function App() {
  const { currentLang, changeLang } = useContext(I18nContext);
  const counter = useSelector((state) => state.counter.value);
  const { data } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <>
      <header>
        <MainMenu />
        <div style={{ color: "#fff" }}>
           <Search />
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={() => changeLang("ua")}>UA</button>
          <button onClick={() => changeLang("en")}>EN</button>

          <ThemeButton />
          <Link to="register" className="btn-icon">
            <UserOutlined />
          </Link>
        </div>
      </header>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}

export default App;
