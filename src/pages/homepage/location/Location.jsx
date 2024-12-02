import React from "react";
import "./location.css";

export default function Location() {
  return (
    <div className="wrapper">
      <main className="location" id="location">
        <section className="location__title">
          <h2>LOCATION</h2>
          <div></div>
        </section>

        <div className="location__content">
          <section className="location__info">
            <h2>Info</h2>
            <div className="location__info-detail">
              <div className="location__sub-title">
                <h3>Address</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="icon icon-tabler icons-tabler-filled icon-tabler-map-pin"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" />
                </svg>
              </div>
              <div className="location__info-address">
                <p>450 Broad Ave, Leonia, NJ 07605</p>
                <button>Google Map</button>
              </div>
            </div>

            <div className="location__info-detail">
              <div className="location__sub-title">
                <h3>Email</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="icon icon-tabler icons-tabler-filled icon-tabler-mail"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" />
                  <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" />
                </svg>
              </div>
              <p>kayagardeninc@gmail.com</p>
            </div>

            <div className="location__info-detail">
              <div className="location__sub-title">
                <h3>Phone</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
              </div>
              <p>(201) 461-7525</p>
            </div>
          </section>

          <div className="location__divider-line"></div>

          <section className="location__business">
            <h2>Business</h2>
            <div className="location__business-content">
              <div className="location__sub-title">
                <h3>Open Hours</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-building-store"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 21l18 0" />
                  <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />
                  <path d="M5 21l0 -10.15" />
                  <path d="M19 21l0 -10.15" />
                  <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
                </svg>
              </div>

              <div className="location__business-hours">
                <p>SAT</p>
                <p>11:15AM - 10:30PM</p>
              </div>
              <div className="location__business-hours">
                <p>SUN</p>
                <p>11:15AM - 10PM</p>
              </div>
              <div className="location__business-hours">
                <p>MON</p>
                <p>11:15AM - 10:30PM</p>
              </div>
              <div className="location__business-hours">
                <p>TUE</p>
                <p>11:15AM - 10:30PM</p>
              </div>
              <div className="location__business-hours">
                <p>WED</p>
                <p>11:15AM - 10:30PM</p>
              </div>
              <div className="location__business-hours">
                <p>THUR</p>
                <p>11:15AM - 10:30PM</p>
              </div>
              <div className="location__business-hours">
                <p>FRI</p>
                <p>11:15AM - 10:30PM</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
