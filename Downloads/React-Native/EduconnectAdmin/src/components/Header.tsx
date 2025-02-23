import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      {/* Left: Brand/Logo */}
      <div style={styles.logo}>
        <span style={styles.icon}>🎓</span> {/* Funky icon */}
        <span style={styles.brand}>
          <NavLink
            to="/"
            style={styles.logoLink} // Add specific style for logo
          >
            Educonnect
          </NavLink>
        </span>
      </div>

      {/* Right: Nav */}
      <nav>
        <ul style={styles.navList}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
              style={({ isActive }) =>
                isActive ? styles.activeNavItem : styles.navItem
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
              style={({ isActive }) =>
                isActive ? styles.activeNavItem : styles.navItem
              }
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
              style={({ isActive }) =>
                isActive ? styles.activeNavItem : styles.navItem
              }
            >
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    position: "fixed", // Make it fixed at the top
    top: 0, // Stick to the top
    left: 0,
    right: 0,
    zIndex: 1000, // Make sure it's above other content
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: "12px 20px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    height: "60px",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    fontSize: "24px",
    fontWeight: "800", // Little bold
    color: "#f97316", // Orange color
    letterSpacing: "1px",
  },
  icon: {
    fontSize: "30px",
    marginRight: "8px",
  },
  brand: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  logoLink: {
    textDecoration: "none", // Ensure there's no underline
    color: "#f97316", // Keep the logo orange
  },
  navList: {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
    gap: "24px",
  },
  navItem: {
    fontSize: "18px",
    color: "#333",
    textDecoration: "none",
    transition: "color 0.3s ease",
  },
  activeNavItem: {
    textDecoration: "none",
    color: "FFF", // Blue when active
    fontWeight: "600", // Font weight on active
  },
};

export default Header;
