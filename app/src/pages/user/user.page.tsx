import { Component } from 'react';

import { UserList } from 'src/components/userList/userList.component';
import { User } from 'src/model/user';
import { UserService } from 'src/services/user.service';

export class UserPage extends Component {
    userService = new UserService();
    users: User[] = this.userService.getUsers();
    usersFiltered: User[] = this.users;

    render = () => {
        return (
            <div>
                <input
                    onInput={(e: any) => {
                        if (e.target.value && e.target.value !== '') {
                            console.log('misy');
                            this.usersFiltered = this.users.filter((user) => {
                                return user.getName().indexOf(e.target.value) !== -1 || user.getFirstname().indexOf(e.target.value) !== -1 || user.getEmail().indexOf(e.target.value) !== -1
                                    ? user
                                    : null;
                            });
                        } else {
                            this.usersFiltered = this.users;
                        }
                        console.log(this.usersFiltered);
                    }}
                    type='text'
                    placeholder='recherche..'
                />
                <UserList users={this.usersFiltered}></UserList>
            </div>
        );
    };
}
