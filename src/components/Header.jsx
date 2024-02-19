import { HashLink } from "react-router-hash-link";

function Header() {
  return (
    <header className="hero">
      <section className="hero__content">
        <h1 className="content__title">Harry Potter</h1>
        <p className="content__slogan">Discover the characters</p>
        <div className="content__button">
          <HashLink to="#scroll" smooth className="button__a">
            ¡Alohomora!
          </HashLink>
        </div>
      </section>
    </header>
  );
}

export default Header;
