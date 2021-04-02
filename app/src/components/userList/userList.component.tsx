import { User } from 'src/model/user';

type Props = {
    users: User[];
};

export const UserList = (props: Props) => (
    <div>
        {JSON.stringify(props)}
        UserList Work
    </div>
);
