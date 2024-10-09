import { NavLink } from "react-router-dom";
import styles from './SideBar.module.css'

function SideBar() {
  const listMenu: {
    title: string;
    link: string;
  }[] = [
    { title: "Главная", link: "/" },
    { title: "Финансы", link: "/finance" },
  ];

  return (
    <div className={styles['sidebar']}>
      <div className={styles['sidebar__company']}>Company</div>
      <ul className={styles['sidebar__ul']}>
        {listMenu.map((item, index) => (
          <li className={styles['sidebar__li']} key={index}>
            <NavLink className={styles['sidebar__link']} to={item.link}>{item.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default SideBar;
