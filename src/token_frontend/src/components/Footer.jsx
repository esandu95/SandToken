import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright Zero2FullStackⓒ {year}</p>
    </footer>
  );
}

export default Footer;
