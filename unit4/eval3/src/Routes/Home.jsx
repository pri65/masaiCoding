import { Link } from "react-router-dom";
import { initialState } from "../Context/AppContext";

function Home() {
  return (
    <div>
      {initialState.isAuth ? (
        <>
          <Link to="/dashboard">
            <h3 data-testid="dashboard-link">Dashboard</h3>
          </Link>
          <Link to="/logout">
            <h3 data-testid="logout-link">Logout Page</h3>
          </Link>
        </>
      ) : (
        <Link to="/login">
          <h3 data-testid="login-link">Login Page</h3>
        </Link>
      )}
    </div>
  );
}
export default Home;
