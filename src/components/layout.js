/**
 * Layout of the main website.
 */

import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import "normalize.css/normalize.css";
import "./layout.scss";
import "fork-awesome/css/fork-awesome.min.css"

const Layout = ({ children }) => {
    return (
        <>
            <div
                style={{
                    backgroundColor: "#262626",
                    display: "flex",
                    justifyContent: "space-between",
                    borderBottom: "1px #1c1c1c solid",
                }}
            >
                <ul className="nav">
                    <li>
                        <Link
                            to="/"
                            className="nav-link"
                            style={{ padding: "0.7rem 1.5rem" }}
                        >
                            <img
                                src="/LogoSponsorBlockSimple256px.png"
                                alt="Home"
                                style={{
                                    height: "2.1rem",
                                    verticalAlign: "middle",
                                }}
                            />
                        </Link>
                    </li>

                    <li>
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>

                </ul>

                <ul className="nav">
                    <li>
                        <a
                            href="https://github.com/ajayyy/2021AprilFools"
                            className="nav-link"
                        >
                            <i className="fa fa-github"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <main>{children}</main>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
