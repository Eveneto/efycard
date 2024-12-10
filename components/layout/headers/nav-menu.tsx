import Link from "next/link";
import React from "react"; 
import menu_data from "./menu-data";

const NavMenu = () => {
  return (
    <>
      <ul>
        {menu_data.map((item, index) => (
          <li 
            key={item.id} 
            className={`has-dropdown ${item.id >= 6 ? "special-item" : ""}`}
          >
            <Link href={item.link}>
              <span className={item.id >= 6 ? "special-link" : ""}>{item.title}</span>
            </Link>
            {item.has_dropdown && 
              <ul className="submenu">
                {item.sub_menus?.map((sub, i) => (
                  <li key={i}>
                    <Link href={sub.link}>{sub.title}</Link>
                  </li>
                ))}
              </ul>            
            }
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavMenu;
