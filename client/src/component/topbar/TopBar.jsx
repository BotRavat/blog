import { Link, NavLink } from "react-router-dom";
import "./topbar.css";
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);

  const handleLogOut = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>

      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <NavLink className="link" to="/">
              HOME
            </NavLink>
          </li>
          <li className="topListItem">
            <Link className=" link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogOut}>
            {" "}
            {user && " LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src={user.profilePic}
            // src="https://source.unsplash.com/300x350"
            alt=""
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <NavLink className="link" to="/login">
                LOGIN
              </NavLink>
            </li>
            <li className="topListItem">
              <NavLink className="link" to="/register">
                REGISTER
              </NavLink>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
