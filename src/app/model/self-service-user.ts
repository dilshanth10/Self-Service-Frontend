export class SelfServiceUser {
    id:number
    selfServiceType: {
        id: number;
        selfServiceTypeName: string;
        }
        user : {
            id: number;
            fullName: string;
        }
        createdAt:Date;
        status:string;
        description:string;
}
