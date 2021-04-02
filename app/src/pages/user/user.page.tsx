import { UserList } from 'src/components/userList/userList.component';
import { User } from 'src/model/user';

export const UserPage = () => {
    let users: User[] = [new User('maizina', 'test', 'test@test.com'), new User('maizina', 'test', 'test@test.com')];
    return (
        <div>
            <input type='text' placeholder='recherche..' />
            <UserList users={users}></UserList>
        </div>
    );
};
