// import React from "react";
// import { Link } from "react-router-dom";
// import "./navbar.css";
// const Navbar = () => {
//   return (
//     <section className="logo-section1">
//       <ul className="center-menu1">
//         <li>
//           <Link to="/shop">Shop</Link>
//         </li>
//         <li>
//           <Link to="/skill">Skill</Link>
//         </li>
//         <li>
//           {" "}
//           <Link to="/stories">Stories</Link>
//         </li>
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//         <li>
//           <Link to="/contact">Contact</Link>
//         </li>
//       </ul>
//     </section>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { BsJustify } from "react-icons/bs"; // Hamburger icon

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Hamburger icon — visible only in mobile */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <BsJustify />
      </div>

      {/* Navigation Menu */}
      <ul className={`nav-links ${open ? "nav-open" : ""}`}>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/skill">Skill</Link>
        </li>
        <li>
          <Link to="/stories">Stories</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
