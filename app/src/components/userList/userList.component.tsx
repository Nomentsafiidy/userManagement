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
            {JSON.stringify(props.users)}
            {props.users.map((user: User, i: number) => (
                <UserItem user={user} key={i} />
            ))}
        </tbody>
    </table>
);
