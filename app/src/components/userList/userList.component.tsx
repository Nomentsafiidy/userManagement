import { User } from 'src/model/user';
import { UserItem } from 'src/components/userItem/UserItem.Component';
type Props = {
    users: User[];
};

export const UserList = (props: Props) => (
    <table>
        <thead>
            <tr>
                <th>nom</th>
                <th>prénom</th>
                <th>email</th>
                <th colSpan={2}>action</th>
            </tr>
        </thead>
        <tbody>
            {props.users.map((user: User) => (
                <UserItem user={user} />
            ))}
        </tbody>
    </table>
);
