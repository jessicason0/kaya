import { useState } from "react";
import { menuList } from "../../../utils/menuList";
import "./menu.css";

export default function Menu() {
  const [menuPage, setMenuPage] = useState(0);

  function handleMenuClick(idx) {
    setMenuPage(idx);
  }

  return (
    <div className="wrapper">
      <article className="menu">
        <div className="menu__title">
          <h2>MENU</h2>
          <div></div>
        </div>

        <div className="menu__category">
          {/* menu category */}
          {menuList.map(({ category }, idx) => {
            const isActive = menuPage === idx;
            return (
              <button
                className={`menu__category-btn ${
                  isActive && "menu__category-btn--active"
                }`}
                key={idx}
                onClick={() => handleMenuClick(idx)}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* [{ category: "string", items: [{ name, description, price }] }]; */}

        <div className="menu__list">
          {/* menu item */}
          {menuList[menuPage].items.map(({ name, description, price }, idx) => {
            return (
              <section className="menu__item" key={idx}>
                <div className="menu__item-details">
                  <h3>
                    <span>
                      {String.fromCharCode(65 + menuPage)}
                      {idx + 1}
                    </span>
                    - {name}
                  </h3>
                  <div className="dash-line"></div>
                  <div className="menu__item-price">${price}</div>
                </div>
                <p className="menu__item-desc">{description}</p>
              </section>
            );
          })}
        </div>
      </article>
    </div>
  );
}
