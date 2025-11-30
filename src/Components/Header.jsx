import React from "react";
import "./header.css";
import { LuAtom } from "react-icons/lu";
import { LuHeart } from "react-icons/lu";
import { LuSearch } from "react-icons/lu";
import { LuUser } from "react-icons/lu";

import { LuShoppingBag } from "react-icons/lu";
import { BsJustify } from "react-icons/bs";
import { LuLayoutPanelTop } from "react-icons/lu";

const Header = () => {
  return (
    <section className="header-wrapper">
      {/* Top Small Header */}
      <section className="header-section">
        <ul>
          <li>
            <span className="icon-text">
              <LuLayoutPanelTop /> LoremIpsum Dollar
            </span>
          </li>
          <li>
            <span className="icon-text">
              <LuLayoutPanelTop /> LoremIpsum Dollar
            </span>
          </li>
          <li>
            <span className="icon-text">
              <LuLayoutPanelTop /> LoremIpsum Dollar
            </span>
          </li>
        </ul>
      </section>

      {/* Logo Section */}
      <section className="logo-section">
        <ul>
          <li className="logo-icon">
            <LuAtom />
          </li>

          <li className="logo-text">
            <h2>Logo</h2>
          </li>

          <li className="icons-group">
            <LuSearch />
            <LuHeart />
            <LuShoppingBag />
            <LuUser />
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Header;
