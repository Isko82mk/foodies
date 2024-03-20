import Link from "next/link";
import logo from "@/assets/logo.png";
import style from "./main-header.module.css";
import Image from "next/image";
import HeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <HeaderBackground />
      <header className={style.header}>
        <Link className={style.logo} href="/">
          <Image priority src={logo} alt="logoImg" />
          Next Level Food
        </Link>
        <nav className={style.nav}>
          <ul>
            <li>
              <NavLink href={"/meals"}>Browse Meals</NavLink>
              {/* <Link
                href="meals"
                className={path.startsWith("/meals") ? style.active : null}
              >
                Brows Meals
              </Link> */}
            </li>
            <li>
              <NavLink href={"/community"}> Community</NavLink>
              {/* <Link
                href="community"
                className={path.startsWith("/community") ? style.active : null}
              >
                Community
              </Link> */}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
