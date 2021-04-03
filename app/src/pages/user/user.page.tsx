import { Component } from "react";
//model imports
import { User } from "src/model/user";
//component imports
import { UserList } from "src/components/userList/userList.component";
import { UserItem } from "src/components/userItem/UserItem.Component";
//service imports
import { UserService } from "src/services/user.service";

type UserPageState = {
  users: User[];
};
export class UserPage extends Component<any, UserPageState> {
  userService: UserService;
  users: User[];

  constructor(props: any) {
    super(props);
    this.state = {
      users: [],
    };
    this.userService = new UserService();
    this.users = this.userService.getUsers();
  }

  componentDidMount() {
    this.userService = new UserService();
    this.users = this.userService.getUsers();
    console.log("this.users", this.users);

    this.setUserState(this.users);
  }

  setUserState(users: User[]) {
    this.setState((_state, _props) => {
      return { users: users };
    });
  }

  render = () => {
    return (
      <div>
        <button
          onClick={() => {
            console.log("new user");
          }}
        >
          New user
        </button>
        <input
          onInput={(e: any) => {
            if (e.target.value && e.target.value !== "") {
              let tmp = this.users.filter((user) => {
                return user.getName().indexOf(e.target.value) !== -1 ||
                  user.getFirstname().indexOf(e.target.value) !== -1 ||
                  user.getEmail().indexOf(e.target.value) !== -1
                  ? user
                  : null;
              });
              this.setUserState(tmp);
            } else {
              this.setUserState(this.users);
            }
          }}
          type="text"
          placeholder="recherche.."
        />
        <UserList>
          {this.state.users.map((user, i) => {
            console.log("user", user);
            return <UserItem user={user} key={i} />;
          })}
        </UserList>
      </div>
    );
  };
}
