import styled from "styled-components";
import Modal, { BaseModalBackground } from "styled-react-modal";
import { Link } from "react-router-dom";
import { IForm } from "../../types/custom";

export const Container = styled.div`
max-width: 360px;
margin: auto;
`;

export const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: ${(props: any) => props.opacity};
  transition : all 0.3s ease-in-out;`;

export const FadingBackground = styled(BaseModalBackground)`
  opacity: ${(props: any) => props.opacity};
  transition: all 0.3s ease-in-out;
`;

export const FormContainer = styled.div`
background-color: white;
   position: fixed;
   bottom: 0;
   left: 0;
   right: 0;
   top: 0;
   z-index: 0;
   overflow: hidden;
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

export const Icon = styled(Link)`
   margin-left: 32px;
   margin-top: 32px;
   text-decoration: none;
   color: #926aa6;
   font-weight: 700;
   font-size: 32px;

   @media screen and (max-width: 480px) {
      margin-left: 16px;
      margin-top: 8px;
   }
`;

export const FormContent = styled.div`
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
`;



export const FormH1 = styled.h1`
   margin-bottom: 40px;
   color: #010101;
   font-size: 20px;
   font-weight: 400;
   text-align: center;
`;

export const FormLabel = styled.label`
   margin-bottom: 8px;
   font-size: 14px;
   color: #010101;
`;

export const FormInput = styled.input`
   width: 300px;
   margin: 0 16px 32px 24px;
   padding: 8px 8px;
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

export const Buttons = styled.div`
    display: flex;
`;

export const FormButton = styled.button`
   // background: #f8d948;
   background: #000000;
   margin: 16px;
   padding: 8px 0;
   border: none;
   border-radius: 4px;
   color: #ffffff;
   width: 46%;
   font-size: 20px;
   font-weight: 500;
   cursor: pointer;
   outline: none;
   box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;

export const ModalButton = styled.button`
   background: #000000;
   color: #ffffff;
   margin-top: 16px;
   padding: 8px 0;
   border: none;
   width: 98%;
   border-radius: 4px;
   font-size: 20px;
   font-weight: 500;
   cursor: pointer;
   outline: none;
   box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;

export const Text = styled.span`
   text-align: center;
   margin-top: 24px;
   color: #010101;
   font-size: 14px;
   text-decoration: underline;
`;