export interface IPersonalDetails{
    name:string,
    Team:string,
    joinedAt:Date,
    avatar:string
}
export interface IUser{
    token:string,
    personalDetails:IPersonalDetails
}
export interface ILoginDetails{
    email:string,
    password:string
}
export interface IProjectDetails{
    id:string,
    name:string,
    score:number,
    durationInDays:number,
    bugsCount:number,
    madeDadeline:boolean
}
export enum TableType{
    "usurDetails",
    "projctsDetails"
}
