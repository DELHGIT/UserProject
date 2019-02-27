export interface IUser{
    id:number;
    firstName:string;
    lastName:string;
    gender:string;
    annualSalary:number;
    dataOfBirth:string;
    email:string;
    departement?:string;

    //computeMonthlySalary(annualSalary:number):number;
}

export class User implements IUser{
    constructor(public id:number, 
                public firstName:string,
                public lastName:string,  
                public gender:string,
                public annualSalary:number,
                public dataOfBirth:string,
                public email:string)
    {
        console.log("User ctor");
    }
    /*computeMonthlySalary(annualSalary:number):number{
        return annualSalary / 12;
    }*/
}