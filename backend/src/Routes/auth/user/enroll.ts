import { Request, Response } from "express";
import UserModel from "../../../DB/Models/userModel";


export default async function EnrollInVideo(req: any, res: Response) {
    const userName: string = req.userName;
    const courseId = req.params.courseId;
    
    try {
        const user = UserModel.findOneAndUpdate({userName}, { $pull: { courseIds: courseId } })
       
    } catch (error: any) {
        res.status(500).send({
            ok: false,
            message: 'Server error',
        })
    }
}
