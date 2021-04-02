import { UserList } from 'src/components/userList/userList.component';
import { User } from 'src/model/user';
import { UserService } from 'src/services/user.service';

export const UserPage = () => {
    let userService = new UserService();
    let users: User[] = userService.getUsers();
    let usersFiltered: User[] = users;
    return (
        <div>
            <input
                onInput={(e: any) => {
                    if (e.target.value && e.target.value !== '') {
                        console.log('misy');
                        usersFiltered = users.filter((user) => {
                            return user.getName().indexOf(e.target.value) !== -1 || user.getFirstname().indexOf(e.target.value) !== -1 || user.getEmail().indexOf(e.target.value) !== -1 ? user : null;
                        });
                    } else {
                        usersFiltered = users;
                    }
                    console.log(usersFiltered);
                }}
                type='text'
                placeholder='recherche..'
            />
            <UserList users={usersFiltered}></UserList>
        </div>
    );
};
