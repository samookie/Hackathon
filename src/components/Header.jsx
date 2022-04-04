import React from "react";

export default function Header() {
  return (
    <nav className="top-nav">
      <ul className="left">
        <li className="logo">
          <a href="/">
            <img
              src="https://leavy.co/dist/0c0c31c009dcee826e4695b852a68092.svg"
              alt="Leavy"
            />
          </a>
        </li>
      </ul>
      <ul className="center">
        <li>
          <a href="happy-leaver">Share my home</a>
        </li>
        <li>
          <a href="host-on-demand">Share my time</a>
        </li>
        <li>
          <a href="host-on-demand">Be a Partner</a>
        </li>
      </ul>
      <ul className="right">
        <li>
          <a
            href="https://onboarding.leavy.co/register/hl"
            className="lv-button primary hollow solid rounded"
          >
            Sign up now
          </a>
        </li>
        <li>
          <a
            href="https://onboarding.leavy.co/app/happy-leaver"
            className="lv-button primary solid rounded"
          >
            Log in
          </a>
        </li>
      </ul>

      {/* <img
          src="https://leavy.co/dist/0c0c31c009dcee826e4695b852a68092.svg"
          alt="Leavy"
          height="60px"
          width="180px"
        />
        <div className="menu">
          <p> Share my Home </p>
          <p> Share my Time </p>
        </div> */}
    </nav>
  );
}
