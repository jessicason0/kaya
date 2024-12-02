import React from "react";
import "./about.css";

export default function About() {
  return (
    <div className="wrapper">
      <main className="about" id="about">
        <section className="about__title">
          <h2>ABOUT</h2>
          <div></div>
        </section>

        <section className="about__main">
          <div className="image-container">
            <img
              src="https://sp-kayagarden.netlify.app/static/media/about_bbq.d77c085b37585ca771cf.jpg"
              alt="about image"
            />
          </div>

          <div className="about__desc">
            <h2>Kaya Garden</h2>
            <p>
              Our restaurant has maintained the taste of traditional{" "}
              <span>Korean food</span> for over 20 years. The reason we were
              able to maintain good quality for a long time is because there was
              a lot of interest and love from customers to Kaya Garden
              restaurant. We will continute to repay your love with the{" "}
              <span>best quality and service</span>.
            </p>
          </div>
        </section>

        <section className="about__service">
          <div className="about__desc">
            <h2>Service</h2>
            <p>
              In order to preserve the <span>pride</span> of traditional food,
              we make our own ingredients and cook them every morning. To
              provide a variety of services, Japanese menus are also offered as
              a side. Seafood is freshly ordered every morning, so you can feel
              fresh foods at Kaya Garden. We strive to provide the best{" "}
              <span>service</span> to our customers.
            </p>
          </div>

          <div className="image-container">
            <img
              src="https://sp-kayagarden.netlify.app/static/media/about_sushi.956d11b4fb1cb9412ba4.jpg"
              alt="service image"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
