import React from "react";
import {
   Table,
   Th,
   Thead,
   Tr,
   Td,
   H1,
   Tbody,
   EditUserLink,
   DeleteUserBtn,
} from "./userListTableElements";


export interface UserListTableProps {
    users: any;
    adminId: any;
    deleteHandler: any;
}

const UserListTable: React.FC<UserListTableProps> = ({ users = [], adminId, deleteHandler }: UserListTableProps) => {

   return (
      <>
         <H1>Users</H1>
         <Table>
            <Thead>
               <Tr>
                  <Th>NAME</Th>
                  <Th>EMAIL</Th>
                  <Th>USER TYPE</Th>
               </Tr>
            </Thead>
            <Tbody>
               {users.map((user: any) => (
                  <Tr key={user._id}>
                     <Td>{user.name}</Td>
                     <Td>{user.email}</Td>
                     <Td>{user.isAdmin ? "admin" : "user"}</Td>
                     <Td>
                        <EditUserLink
                           to={
                              user._id === adminId
                                 ? "/profile"
                                 : `/admin/users/${user._id}/edit`
                           }
                        >
                           edit icon
                        </EditUserLink>
                     </Td>
                     <Td>
                        <DeleteUserBtn onClick={() => deleteHandler(user._id)}>
                           delete icon
                        </DeleteUserBtn>
                     </Td>
                  </Tr>
               ))}
            </Tbody>
         </Table>
      </>
   );
};

export default UserListTable;
