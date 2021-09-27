import Link from "next/link";
import css from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div>
      <div className={css.links}>
        <Link href="/">
          <a className={css.link}>/</a>
        </Link>
        <Link href="/stat">
          <a className={css.link}>/stat</a>
        </Link>
        <Link href="/about">
          <a className={css.link}>/about</a>
        </Link>
      </div>
      {props.children}
    </div>
  );
};

export default Layout;
