import React, { useEffect, useState } from "react";
import { IUser } from "../../types/custom";
import {
  Container,
  FormButton,
  FormContent,
  FormH1,
  Form,
  FormInput,
  FormWrap,
  Checkbox,
  CheckboxLabel,
  CheckboxContainer,
  Buttons,
  FormGroup,
  FormLabel,
} from "./userEditWindowElements";
import { useNavigate } from "react-router-dom";

export interface UserEditWindowProps {
    submitHandler: (e: React.SyntheticEvent, name: string, email: string, isAdmin: boolean) => void;
    user: IUser;
}

const UserEditWindow: React.FC<UserEditWindowProps> = ({ submitHandler, user }: UserEditWindowProps) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  

  useEffect(() => {
    if (user.name && user.email) {
      setName(user.name);
      setEmail(user.email);
      setIsAdmin(user.isAdmin);
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
       isAdmin
    );
  }, [setError, name, email, isAdmin, submitHandler]);

  function cancelHandler(e: React.SyntheticEvent){
    e.preventDefault();
    setName(user.name);
    setEmail(user.email);
    setIsAdmin(user.isAdmin);
    navigate('/admin/userlist')
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
              <FormH1>update user profile!</FormH1>
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
              <CheckboxContainer>
                {/* <FormInput
                  type="checkbox"
                  checked={isAdmin}
                  style={{background: isAdmin ? "#00ff00" : 'transparent'}} 
                  onChange={() => {
                    setIsAdmin(!isAdmin);
                  }}
                  required
                /> */}
                <Checkbox checked = {(isAdmin)} onChange={() => {setIsAdmin(!isAdmin);}}/>
                <CheckboxLabel>Admin</CheckboxLabel>
              </CheckboxContainer>
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

export default UserEditWindow;