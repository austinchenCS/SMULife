import { Event } from './event';
import { Ra } from './ra';
export class Student {
    name?: string;
    phoneNum?: number;
    studentId?: number;
    roomNumber?: number;
    email?: string;
    dorm?: string;
    emergencyContactName?: string;
    emergencyContactNumber?: number;
    emergencyContactRelation?: string;
    events?: Event[];
    ra?: Ra;
}
