import { NavLink } from 'react-router';

const MainMenu = () => {
    return (
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="user">User</NavLink>
      </nav>
    );
}

export default MainMenu;



