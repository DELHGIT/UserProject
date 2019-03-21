interface User {
    id: number;
    name: string;
    aliases: string[];
    occupation: string;
    gender: string;
    height: {ft: number; in: number;}
    hair: string;
    eyes: string;
    powers: string[]
}
//...
const Users = <User[]>require('../data');