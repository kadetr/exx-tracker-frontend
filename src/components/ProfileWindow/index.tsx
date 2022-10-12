import React, { useState, useEffect } from "react";
import {
  Container,
  FormButton,
  FormContent,
  FormH1,
  Form,
  FormInput,
  FormWrap,
  FormGroup,
  FormLabel,
  Buttons,
} from "./profileWindowElements";
import { useNavigate } from "react-router-dom";

export interface ProfileWindowProps {
    submitHandler: (e: React.SyntheticEvent, name: string, email: string, password: string, confirmPassword: string) => void;
    user: any;
}

const ProfileWindow: React.FC<ProfileWindowProps> = ({ submitHandler, user }: ProfileWindowProps) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [message, setMessage] = useState(null)
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (user.name && user.email) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

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
  }, [setError, name, email, password, confirmPassword, submitHandler]);
  
  function cancelHandler(e: React.SyntheticEvent){
    e.preventDefault();
    setName(user.name);
    setEmail(user.email);
    navigate('/')
  }

  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
          <Form noValidate 
                     error = {error}
                     onSubmit={(event) =>validateForm(event)}
                  >
              <FormH1>update your profile!</FormH1>
              <FormGroup>
                <FormLabel>Fullname</FormLabel>
                <FormInput
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    required
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Email</FormLabel>
                <FormInput
                    type="text"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Password</FormLabel>
                <FormInput
                    type="text"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Confirm</FormLabel>
                <FormInput
                    type="text"
                    value={password}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                />
              </FormGroup>
              <Buttons>
                <FormButton onClick={(event) => {cancelHandler(event)}}>Cancel</FormButton>
                <FormButton
                  type="submit"
                >
                  Update
                </FormButton>
              </Buttons>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default ProfileWindow;
