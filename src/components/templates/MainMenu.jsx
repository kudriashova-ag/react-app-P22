import { NavLink } from 'react-router';

const MainMenu = () => {
    return (
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="users">Users</NavLink>
        <NavLink to="weather">Weather</NavLink>
        <NavLink to="reservation">Reservation</NavLink>
        <NavLink to="posts">Posts</NavLink>
      </nav>
    );
}

export default MainMenu;



