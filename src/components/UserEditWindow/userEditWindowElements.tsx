import Modal, { BaseModalBackground } from "styled-react-modal";
import styled from "styled-components";
import { IForm } from "../../types/custom";

export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 4px 0 ;
  margin: 0 auto;
  width: 360px;
  font-family: Quicksand, arial, sans-serif;
  // box-shadow: 0 0 10px rgba(0, 0, 0, 0.05), 0 0px 20px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

export const CardHeader = styled.header`
  display: flex;
  padding-top: 0;
  justify-content: space-between;
`;

export const CardHeading = styled.h1`
  margin: 4px 0;
  font-size: 24px;
  font-weight: bold;
  padding-left: 16px;
  
`;

export const CardDate = styled.div`
  margin: 12px 8px 8px;
   justify-content: flex-end;
    align-items: end;
   font-size:12px;
   text-align: center;
`;

export const CardBody = styled.div`
  padding-right: 24px;
  padding-left: 24px;
  display: flex;
`;

export const CardBodyLeft = styled.div `
    width:50%;
    padding: 0;
    margin: 0;
`;

export const CardBodyRight = styled.div `
    width:50%;
    padding: 0;
    margin: 0;
`;
export const CardBodyRightToo = styled.div `
    display: flex;
    flex-direction: column;
    padding:0;
    margin: 0;
    
`;

export const CardBodyLeftP = styled.div`
    display: flex;
    font-size: 12px;
    margin: 6px 0;
    padding: 0;
`;

export const CardBodyLeftLabel = styled.div`
    min-width: 72px;
    font-size: 12px;
    margin: 4px 0;
    padding: 0;
    font-weight: bold;
`;

export const CardBodyLeftItem = styled.div`
    font-size: 12px;
    margin: 4px 0;
    padding: 0;
`;


export const CardFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 24px;
  }

  &:nth-last-of-type(2) {
    margin-top: 32px;
  }

  &:last-of-type {
    text-align: center;
  }
`;

export const CardInput = styled.input`
  padding: 7px 0;
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color 0.25s ease-in;

  &:focus {
    border-bottom-color: #e5195f;
    outline: 0;
  }
`;

export const CardIcon = styled.span`
  color: #888;
  cursor: pointer;
  opacity: .25;
  transition: opacity .25s ease-in;
  &:hover {
    opacity: .95;
  }
`;

export const CardOptionsNote = styled.small`
  padding-top: 8px;
  display: block;
  width: 100%;
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
`;

export const CardOptions = styled.ul`
  padding: 0;
  margin: 0 0 16px 16px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  list-style-type: none;
`;

export const CardOptionsItem = styled.li`
  
  padding: 8px;
  margin: 0;
`;

export const CardButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #e5195f;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

export const CardLink = styled.a`
  display: inline-block;
  font-size: 12px;
  text-decoration: none;
  color: #aaa;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  transition: color 0.25s ease-in;

  &:hover {
    color: #777;
  }
`;

export const IconButton = styled.button`
   background: transparent;
   border: none;
   width: 30px;
   font-weight: 500;
   cursor: pointer;
   outline: none;
`;

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

export const FormContent = styled.div`
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
`;

export const FormInput = styled.input`
   width: 240px;
   margin: 0 16px 32px 24px;
   padding: 8px;
//    border: none;
   border-radius: 4px;
   outline: none;
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
  //  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

   @media screen and (max-width: 400px) {
      padding: 32px 32px;
   }

   & ${FormInput}:invalid  {
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

export const FormGroup = styled.label`
   display: flex;
`;

export const FormLabel = styled.label`
   width: 60px;
   margin-top: 8px;
   font-size: 16px;
   color: #010101;
`;

export const Buttons = styled.div`
    display: flex;
`;

export const FormButton = styled.button`
   background: #000000;

   margin: 16px;
   padding: 8px 0;
   border: none;
   width: 46%;
   border-radius: 4px;
   color: #ffffff;
   font-size: 20px;
   font-weight: 500;
   cursor: pointer;
   outline: none;
   box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;

export const CheckboxContainer = styled.div`
   width: 100%;
   height: 12px;
   margin: 0 0 16px 0px;
`

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
   position: relative;
   cursor: pointer;
   margin: 0;


   &:before{
      content: "";
      display: block;
      position: absolute;
      width: 16px;
      height: 16px;
      top: 0;
      left: 0;
      border: 2px solid #555555;
      border-radius: 3px;
      background-color: white;
   }

   &:checked:after{
      content: "";
      display: block;
      width: 5px;
      height: 10px;
      border: solid black;
      border-width: 0 2px 2px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
      position: absolute;
      top: 2px;
      left: 6px;
   }
`

export const CheckboxLabel = styled.span`
   margin-left: 12px;
   font-size: 16px;
   display: "flex";
`