import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUser } from "../../reducks/users/selectors";
import ProfileHeader from "./ProfileHeader";
import Dropdown from '../../assets/images/dropdown.png';

const Header = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const user = getUser(selector);
  const token = user ? user.token : null;
  const [openModalMenu, setOpenModalMenu] = useState(false);

  return (
    <header className="header">
      
      <div>
        {token ? (
          <button
            onClick={() => setOpenModalMenu(true)}
            className="sign-out-btn"
          >
            {user.name}
            <img src={Dropdown} alt="dots" width={25} height={25}/>
          </button>
        ) : (
          <Link to="/sign-up">Sign Up</Link>
        )}
        <ProfileHeader
          user={user}
          openModalMenu={openModalMenu}
          setOpenModalMenu={setOpenModalMenu}
        />
      </div>
    </header>
  );
};

export default Header;
