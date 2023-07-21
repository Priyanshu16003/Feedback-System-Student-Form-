const express = require("express")
const Response = require("../models/Response")
const Lecture = require("../models/LectureSchema")
const bodyParser = require("body-parser")
const routes = express.Router()

routes.get("/",(req,res)=>{
    console.log("showing index.hbs")
    Lecture.find({})
  .then(data => {
    console.log(data)
    res.render("index",{details : data})
  })
  .catch(error => {
    // Handle the error
  })
    
})

routes.get("/complete",(req,res)=>{
    res.render("complete")
})

routes.post("/submit_response",async (req,res)=>{

    const response = new Response({
        department: req.body.department,
        lecture_title: req.body.lecture_title,
        faculty_name: req.body.faculty_name,
        semester: parseInt(req.body.semester),
        sub_date: req.body.sub_date,
        overall_organization: req.body.radio1,
        relevent_content: req.body.radio2,
        satisfied_time_venue: req.body.radio3,
        intresting_session: req.body.radio4,
        lecture_topic_cover: req.body.radio5,
        opinion_on_speaker: req.body.radio6,
        useful_session: req.body.radio7,
        overall_effectiveness: req.body.radio8,
        additional_comments: req.body.additional_cmnt
      });
      
      const data =await response.save()

    console.log(data)
    res.redirect("/complete")
})

module.exports=routes