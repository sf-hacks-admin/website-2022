import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "../App.css";

const ButtonContainer = styled.span`
    position: fixed;
    bottom: 35px;
    right: 50px;
    align-items: center;
    height: 60px;
    width: 60px;
    justify-content: center;
    z-index: 8;
    cursor: pointer;
    background: transparent;
    display: ${({ isScrollButtonVisible }) => (isScrollButtonVisible ? "flex" : "none")};

    &:hover {
    }
`;

const BackToTopButton = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const checkScrollHeight = () => {
            if (!showButton && window.pageYOffset > 400) {
                setShowButton(true);
            } else if (showButton && window.pageYOffset <= 400) {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", checkScrollHeight);
        return () => {
            window.removeEventListener("scroll", checkScrollHeight);
        };
    }, [showButton]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <ButtonContainer isScrollButtonVisible={showButton} onClick={scrollToTop}>
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
                <title>Chevron Up</title>
                <path
                    fill="none"
                    stroke="#d45341"
                    strokeLinecap="square"
                    strokeMiterlimit="10"
                    strokeWidth="50"
                    d="M112 328l144-144 144 144"
                    className="top"
                />
            </svg>
        </ButtonContainer>
    );
};

export default BackToTopButton;
