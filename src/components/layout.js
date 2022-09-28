import * as React from "react";
import { Link } from "gatsby";

const Layout = ({ location, title, children }) => {
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;

    header = (
        <h1 className="main-heading">
            <Link to="/">{title}</Link>
        </h1>
    );

    return (
        <div className="global-wrapper">
            <header className="global-header">{header}</header>
            <main>{children}</main>
            <footer>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.com">Gatsby</a>,{" "}
                <a href="https://www.neovim.io">Neovim</a>,{" "}
                <a href="https://www.github.com">Github</a> and ❤️ .
            </footer>
        </div>
    );
};

export default Layout;
