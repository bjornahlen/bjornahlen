import { Workexperiences } from "./workexperience";
import { Education } from "./education";

export interface User {
    
firstName: string;
lastName: string;
dateOfBirth: Date;
isMarried: Boolean,
gender: number, //0 = male, 1= female, 2 = other
role: number // 0 = user, 1 = admin

educations?: Education[];
workexperioences?: Workexperiences[];

    
};
    


    

    
