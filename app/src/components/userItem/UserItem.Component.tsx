import { User } from 'src/model/user';

type Props = {
    user: User;
};

export const UserItem = (props: Props) => {
    return (
        <tr>
            <td>{props.user.getName()}</td>
            <td>{props.user.getFirstname()}</td>
            <td>{props.user.getEmail()}</td>
            <td>
                <button
                    onClick={() => {
                        onUpdateUser(props.user.getEmail());
                    }}
                >
                    modifier
                </button>
            </td>
            <td>
                <button
                    onClick={() => {
                        onDeleteUser(props.user.getEmail());
                    }}
                >
                    supprimer
                </button>
            </td>
        </tr>
    );
};

let onUpdateUser = (email: string) => {
    console.log(' email ', email);
};

let onDeleteUser = (email: string) => {
    console.log(' email ', email);
};
