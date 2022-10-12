import React, { useState } from "react";
import {
   Container,
   FormButton,
   FormContent,
   FormH1,
   Form,
   FormInput,
   FormWrap
} from "./registerWindowElements";

export interface RegisterWindowProps {
    submitHandler: (e: React.SyntheticEvent, name: string, email: string, password: string, confirmPassword: string) => void;
}

const RegisterWindow: React.FC<RegisterWindowProps> = ({ submitHandler }: RegisterWindowProps) => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
   const [error, setError] = useState(false);

   const validateForm = React.useCallback((event: React.SyntheticEvent) => {
      event.preventDefault();
      if (!(event.target as HTMLInputElement).checkValidity()) {
         setError(true);
         return;
      }
      setError(false);
      submitHandler(
         event,
         name,
         email,
         password,
         confirmPassword
      );
    }, [setError, name, email, password, confirmPassword, submitHandler])

   return (
      <>
         <Container>
            <FormWrap>
               <FormContent>
                  <Form noValidate 
                     error = {error}
                     onSubmit={(event) =>validateForm(event)}
                  >
                     <FormH1>Sign up!</FormH1>
                     <FormInput
                        type="name"
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => {
                           setName(e.target.value);
                        }}
                        required
                     />
                     <FormInput
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => {
                           setEmail(e.target.value);
                        }}
                        required
                     />
                     <FormInput
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => {
                           setPassword(e.target.value);
                        }}
                        required
                     />
                     <FormInput
                        type="password"
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChange={(e) => {
                           setConfirmPassword(e.target.value);
                        }}
                        required
                     />
                     <FormButton
                        type="submit"
                     >
                        Register
                     </FormButton>
                  </Form>
               </FormContent>
            </FormWrap>
         </Container>
      </>
   );
};

export default RegisterWindow;
