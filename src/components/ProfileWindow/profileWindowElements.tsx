import styled from "styled-components";
import { IForm } from "../../types/custom";

export const Container = styled.div`
   position: relative;
   bottom: 0;
   left: 0;
   right: 0;
   top: 0;
   z-index: 0;
   overflow: hidden;
   background: #fff;
`;

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content; center;

    @media scree and (max-width: 400px){
        height: 80px
    }
`;

export const FormContent = styled.div`
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
`;

export const FormGroup = styled.label`
   display: flex;
`;

export const FormLabel = styled.label`
   width: 60px;
   margin-top: 8px;
   font-size: 14px;
   color: #010101;
`;

export const FormInput = styled.input`
   width: 240px;
   margin: 0 16px 32px 24px;
   padding: 8px;
   border: 2px solid;
   border-radius: 4px;
   outline: none;
`;

export const FormSelect = styled.select`
   width: 320px;
   margin: 0 16px 32px 24px;
   padding: 8px 8px;
   border: 2px solid black;
   border-radius: 4px;
`;

export const Form = styled.form<IForm>`
   max-width: 360px;
   height: auto;
   width: 100%;
   z-index: 1;
   display: grid;
   margin: 0 auto;
   padding: 40px 32px;
   border-radius: 4px;
   // box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

   @media screen and (max-width: 400px) {
      padding: 32px 32px;
   }


 & ${FormInput}:invalid  {
   border-color: ${props => {
     return props.error ? "red" : "none"
   }};
 }

  & ${FormSelect}:invalid  {
   border-color: ${props => {
     return props.error ? "red" : "none"
   }};
 }
`;

export const FormH1 = styled.h1`
   margin-bottom: 40px;
   color: #010101;
   font-size: 20px;
   font-weight: 400;
   text-align: center;
`;

export const Buttons = styled.div`
    display: flex;
`;

export const FormButton = styled.button`
   background: #000000;

   margin: 16px;
   padding: 8px 0;
   border: none;
   width: 48%;
   border-radius: 4px;
   color: #ffffff;
   font-size: 20px;
   font-weight: 500;
   cursor: pointer;
   outline: none;
   box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;
