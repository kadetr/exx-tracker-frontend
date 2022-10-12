import React from "react";
import { FaBars } from "react-icons/fa";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { RootState } from "../../store";

import {
   MobileIcon,
   Nav,
   NavbarContainer,
   NavItem,
   NavLinks,
   NavMenu,
   Icon,
   NavDropdownItem,
   NavDropdownBtn,
   NavDropdownContent,
   NavDropdownContentLink,
   Slogan,
} from "./headerElements";
import { USER_DETAILS_RESET, USER_LOGOUT } from "../../constants/userConstants";

const Header: React.FC = () => {

   const dispatch = useAppDispatch();

   const userLogin = useAppSelector((state: RootState) => state.userLogin);
    const { userInfo } = userLogin;

   const logoutHandler = () => {
     // dispatch(logout());
     localStorage.removeItem('userInfo');
     dispatch({ type: USER_LOGOUT });
     dispatch({ type: USER_DETAILS_RESET });
     document.location.href = '/login';
   };

   return (
      <Nav>
         <NavbarContainer>
            <MobileIcon>
               <FaBars />
            </MobileIcon>
            <Icon to="/">ExxTrackr.</Icon><Slogan>record outdoor exercises</Slogan>
            <NavMenu>
            
               {!userInfo ? (
                  <>
                     <NavItem>
                        <NavLinks to="/register">Register</NavLinks>
                     </NavItem>

                     <NavItem>
                        <NavLinks to="/login">Login</NavLinks>
                     </NavItem>
                  </>
               ) : (
                  <>
                  <NavItem>
                        <NavLinks to="/profile">My profile</NavLinks>
                     </NavItem>

                     <NavItem>
                        <NavLinks to="/history/1">History</NavLinks>
                     </NavItem>

                     <NavItem>
                        <NavLinks onClick={logoutHandler} to="/">Logout</NavLinks>
                     </NavItem>
                  </>
               )}
               {userInfo && userInfo["isAdmin"] && (
                  <NavDropdownItem>
                     <NavDropdownBtn>Admin</NavDropdownBtn>
                     <NavDropdownContent>
                        <NavDropdownContentLink to="/admin/userlist">
                           Users
                        </NavDropdownContentLink>
                        <NavDropdownContentLink to="/history/1">
                           Log
                        </NavDropdownContentLink>
                     </NavDropdownContent>
                  </NavDropdownItem>
               )}
                {/*userInfo && userInfo.isInstructor && (
                  <NavDropdownItem>
                     <NavDropdownBtn>Instructor</NavDropdownBtn>
                     <NavDropdownContent>
                        <NavDropdownContentLink to="/instructor/uploadpdf">
                           Upload
                        </NavDropdownContentLink>
                     </NavDropdownContent>
                  </NavDropdownItem>
               )} */}

            </NavMenu>
         </NavbarContainer>
      </Nav>
   );
};

export default Header;
