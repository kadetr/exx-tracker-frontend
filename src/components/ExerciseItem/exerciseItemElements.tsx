import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardWrapper = styled.div`
    overflow: hidden;
    padding: 8px;
    margin: 24px auto 0;
    width: 400px;
    font-family: Quicksand, arial, sans-serif;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
    border-radius: 5px;
`;

export const CardHeader = styled.header`
    width: 100%;
    padding: 16px 8px 8px 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const CardHeading = styled.div`
    font-size: 24px;
    font-weight: bold;
`;

export const CardDate = styled.div`
    font-size: 12px;
    padding-right: 16px;
`;

export const CardBody = styled.header`
    width: 100%;
    padding: 8px 0 8px;
    margin: 24px auto 8px;
    display: flex;
    flex-direction: row;
    background-color: #f8d948;
    color: #010101;
    justify-content: space-between;
`;

export const CardDuration = styled.div`
    font-size: 12px;
    padding-right: 8px;
`;

export const CardDistance = styled.div`
    font-size: 12px;
`;

export const CardCalories = styled.div`
    font-size: 12px;
    padding-left: 8px;
`;

export const ModalButton = styled.button`
   background: #f8d948;
   margin: 16px;
   padding: 8px 0;
   border: none;
   width: 98%;
   border-radius: 4px;
   color: #010101;
   font-size: 20px;
   font-weight: 500;
   cursor: pointer;
   outline: none;
   box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;