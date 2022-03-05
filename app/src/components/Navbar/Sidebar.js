import React from "react";
import { slide as Menu } from "react-burger-menu";
import AnchorLink from "react-anchor-link-smooth-scroll";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    return (
        // Pass on our props
        <Menu {...props}>
            <nav className="nav">
                <ul className="nav-ul">
                    <AnchorLink href="#tracks">
                        <li>tracks</li>
                    </AnchorLink>
                    <AnchorLink href="#faq">
                        <li>faq</li>
                    </AnchorLink>

                    <AnchorLink href="#sponsors">
                        <li>sponsors</li>
                    </AnchorLink>
                </ul>
            </nav>
        </Menu>
    );
};
