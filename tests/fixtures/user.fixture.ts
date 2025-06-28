interface User {
    userName: string
    password: string
}
type randomUser ={
    goodUser: User,
    badUser: User
}
export const fixtureUsers: randomUser = {
    goodUser : {
    userName: "newUser934",
    password: "newpassword"
},
    badUser  : {
    userName: "",
    password: ""
}
}







