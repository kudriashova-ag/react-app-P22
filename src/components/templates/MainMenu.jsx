import { NavLink } from 'react-router';

const MainMenu = () => {
    return (
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="users">Users</NavLink>
      </nav>
    );
}

export default MainMenu;



