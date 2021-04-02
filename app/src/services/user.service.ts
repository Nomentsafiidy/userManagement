import { User } from 'src/model/user';

export class UserService {
    private users: User[];

    constructor() {
        this.users = [new User('maizina', 'test', 'test@test.com'), new User('maizina', 'test', 'test@test.com')];
    }

    getUsers(): User[] {
        return this.users;
    }
}
