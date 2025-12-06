import { Link, useLoaderData } from "react-router";
import Search from "../components/search/Search";

const Users = () => {
  const users = useLoaderData();

  return (
    <div>

      <div className="users-title">
        <h1>Users</h1>
        <Search />
      </div>

      <div className="user-list">
        {users.map((user) => (
          <div key={user.id}>
            <Link to={`/users/${user.login}`}>
              <img src={user.avatar_url} alt="" />
              {user.login}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
