import { faker } from '@faker-js/faker';

export interface User {
    userName: string
    password: string
}
type users = {
    goodUser: User,
    badUser: User
}
export const randomUser = () : users => {
    return {
    goodUser : {
    userName: `user_${faker.string.alphanumeric(6)}${Math.floor(Math.random() * 1000)}`,
    password: faker.internet.password()
},
    badUser: {
    userName: "",
    password: ""
},
    }
}







