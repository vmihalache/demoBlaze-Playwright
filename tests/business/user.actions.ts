interface Iuser {
    userName: string,
    password: string
}
export class BusinessCreateUser {
    protected userName: Iuser["userName"]
    protected passWord: Iuser["password"]
    constructor(
        userName: Iuser["userName"],
        passWord: Iuser["password"]
    ) {
        this.userName = userName
        this.passWord = passWord
    }
    
    createUser() {
        return [this.userName,this.passWord]
      }
}