import React from "react";
import { StyledHeader, Title } from "./styled";

 export const Header = ({ title }) => (
    <StyledHeader>
        <Title>{title}</Title>
    </StyledHeader>
);
