const router = require("express").Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const StudentData = require("../models/studentData.Model");




// custom storage
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '.' + file.originalname.split('.').pop())
    }
})


const upload = multer({ storage: storage })

router.get('/get-student-data', async (req, res) => {

    try {
        const { student_name } = req.query;


        const foundData = await StudentData.find({ student_name: { $regex: new RegExp(student_name, "i") } })
            .sort({
                of_courses_completed: -1,
                of_skill_badges_completed: -1,
                of_gen_ai_game_completed: -1,
            });
        const total = await StudentData.find({});

        res.status(200).json({ msg: 'ok', foundData, total: total.length });


    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'error', error, dec: error.code === 11000 ? { duplicate: error.writeErrors, inserted: error.insertedDocs } : error });
    }

})
router.post('/add-student-data', upload.single('xlsx-file'), async (req, res) => {

    try {

        // if (!req.file) {
        //     return res.status(409).json({ msg: 'Please provide a xlsx file' });
        // }
        // const filePath = req.file.path;

        const { parsedDataResult } = await req.body;


        const foundData = await StudentData.find({});
        if (foundData?.length > 0) {
            const savedData = await StudentData.deleteMany({});
        }

        const savedData = await StudentData.insertMany(parsedDataResult, { ordered: false });

        res.status(200).json({ msg: 'ok', savedData });


    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'error', error, dec: error.code === 11000 ? { duplicate: error.writeErrors, inserted: error.insertedDocs } : error });
    }

})


router.delete('/delete-all-data', async (req, res) => {


    try {

        const savedData = await StudentData.deleteMany({});

        res.status(200).json({ msg: 'ok', savedData });

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'error', error, });
    }

})


module.exports = router;