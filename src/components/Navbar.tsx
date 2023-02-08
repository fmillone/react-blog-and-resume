import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function classNames(params: (string | false)[]) {
  return params.filter(it => !!it).join(' ');
}

export const Navbar = ({ navigationData }: any) => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navItems}>
        {navigationData.map(({ name, path }: any, index: any) => (
          <NavLink to={path} key={index} end>
            { ({isActive}) =>
              <li className={classNames([ styles.navItem, isActive && styles.selectedNavItem ])} >
                {name}
              </li>
            }
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};