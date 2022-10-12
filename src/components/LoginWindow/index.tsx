import React, { useState } from "react";
import {
   Container,
   FormButton,
   FormContent,
   FormH1,
   Form,
   FormInput,
   FormWrap,
   Text,
} from "./loginWindowElements";

export interface LoginWindowProps {
    submitHandler: (e: React.SyntheticEvent, email: string, password: string) => void;
}

const LoginWindow: React.FC<LoginWindowProps> = ({ submitHandler }: LoginWindowProps) => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
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
         email,
         password
      );
    }, [setError, email, password, submitHandler])


   return (
      <>
         <Container>
            <FormWrap>
               <FormContent>
               <Form noValidate 
                     error = {error}
                     onSubmit={(event) =>validateForm(event)}
                  >
                     <FormH1>Sign in!</FormH1>
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
                     <FormButton
                        type="submit"
                     >
                        Login
                     </FormButton>
                     <Text>Register | Forgot Password</Text>
                  </Form>
               </FormContent>
            </FormWrap>
         </Container>
      </>
   );
};

export default LoginWindow;
