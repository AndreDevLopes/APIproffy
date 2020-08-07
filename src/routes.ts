import express from 'express';
import db from './database/connection';

const router = express.Router();

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
    await db('users').insert({
        name,
        avatar,
        whatsapp,
        bio,
    });
    return response.send();
});

export default router;