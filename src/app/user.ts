export interface User {
    
firstName: string;
lastName: string;
dateOfBirth: Date;
education: {
name: string,
start: Date,
end: Date
}

workExperience: {
    employer: string,
    title: string,
    start: Date,
    end: Date
    }
    
    isMarried: Boolean,
    gender: number, //0 = male, 1= female, 2 = other
    role: number // 0 = user, 1 = admin
    
}