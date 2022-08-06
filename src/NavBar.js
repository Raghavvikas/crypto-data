import React from "react";

const NavBar = ({ filteredMenu, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <h3>Categaories</h3>
        <div className="btn-group">
          {menuList.map((curElement) => {
            return (
              <>
                <button
                  className="btn-group__item"
                  onClick={() => filteredMenu(curElement)}
                >
                  {curElement}
                </button>
              </>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
