import express, { Request, Response, NextFunction } from 'express';
const router = express.Router();
import { body, validationResult } from 'express-validator';
import {Diary} from '../models/diary'
import { authenticateJWT } from '../middlewaRE/jwt-controller';


router.post(
    'api/diary/add',authenticateJWT,
    [
        body('header')
        .isLength({ min: 4, max: 20 }).withMessage('giuvve better header faggot')
        ,
        body('description').isLength({ min: 4, max: 300 }).withMessage('tell me what were lokum doing while you are taking this')
    ],
    async (req: Request, res: Response, next:NextFunction) => {
        const {header, picUrl, description } = req.body;
        
        const diary = Diary.build({header, picUrl, description})
        await diary.save();

        res.status(200).send(diary);
    }
)
export { router as addDiaryPage };