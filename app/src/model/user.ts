export class User {
    private name: string;
    private firstname: string;
    private email: string;
    private created_at?: number;
    private updated_at?: number;

    constructor(name: string, firstname: string, email: string) {
        this.name = name;
        this.firstname = firstname;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getFirstname() {
        return this.firstname;
    }

    getEmail() {
        return this.email;
    }

    getCreatedAt() {
        return this.created_at;
    }

    getUpdateAt() {
        return this.updated_at;
    }

    setName(val: string) {
        this.name = val;
    }

    setFirstname(val: string) {
        this.firstname = val;
    }

    setEmail(val: string) {
        this.email = val;
    }

    setCreatedAt(val: number) {
        this.created_at = val;
    }

    setUpdateAt(val: number) {
        this.updated_at = val;
    }
}
