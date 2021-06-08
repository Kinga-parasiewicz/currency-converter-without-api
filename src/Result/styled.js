
import styled from "styled-components";

export const TextBox = styled.div`
    padding: 10px;
    background-color:white;
    border: 1px solid black;
    border-radius: 4px;
    box-shadow: 1px 1px black;
    text-align: center;
    max-width:500px;
    margin:0 auto;
`;

export const ResultText = styled.span`
    display: block;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 1px;
`;

export const SourceAmount = styled.span`
    color: green;
    font-weight: 600;
    font-size: 24px;
    letter-spacing: 1px;
`;

export const TargetAmount = styled.span`
    color:green;
    font-weight: 800;
    font-size: 24px;
    letter-spacing: 1px;
`;