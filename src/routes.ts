import express from 'express';
import db from './database/connection';
import convertHourToMinutes from './utils/converteHourToMinutes';

const router = express.Router();
interface ScheduleItem{
    week_day: number;
    from: string;
    to:string;
}

router.post("/classes", async(request, response)=>{
    const {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost,
        schedule
    } = request.body;
   const inserteUserIds = await db('users').insert({
        name,
        avatar,
        whatsapp,
        bio,
    });
    const user_id = inserteUserIds[0];

    const inserteClassesIds = await db('classes').insert({
        subject,
        cost,
        user_id,

    });
    const class_id = inserteClassesIds[0];
    const   classSchedule = schedule.map((scheduleItem:ScheduleItem)=>{
        return{
            class_id,
            week_day: scheduleItem.week_day,
            from:convertHourToMinutes(scheduleItem.from),
            to:convertHourToMinutes(scheduleItem.to),

        };

    });
    await db('class_schedule').insert(classSchedule);
    return response.send();
});

export default router;