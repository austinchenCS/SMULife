import { Event } from './event';
import { Ra } from './ra';
export class Student {
    firstName?: string;
    lastName?: string;
    phoneNum?: number;
    studentId?: number;
    roomNumber?: number;
    email?: string;
    dorm?: string;
    emergencyContactName?: string;
    emergencyContactNumber?: number;
    emergencyContactRelation?: string;
    imageUrl?: string;
    events?: Event[];
    ra?: Ra;
}
