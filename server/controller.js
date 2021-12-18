const Student = require('../db/Student.js');
const controller = {
  students: {
    getStudents: function (req, res) {
      // TODO: add your code here to fetch all students
      Student.find({})
        .then((allStudents) => {
          res.status(200).send(allStudents);
        })
        .catch((err) => {
          res.status(404).send(err);
        })

    },
    postStudent: function (req, res) {
      // TODO: add your code here to add a new student

    },
    updateName: function (req, res) {
      // TODO: add your code here to update a student's name
      //return console.log(req.body) //{ name: 'test', studentId: '61bd69968dbdc8644273569d' }
      let { name, studentId } = req.body;
      //return console.log(name, studentId);
      Student.findOneAndUpdate({_id : studentId}, {name : name})
        .then(() => {
          res.status(201).send("success update student name")
        })
        .catch((err) => {
          res.status(404).send("failure to update student name")
        })
    }
  }
};

module.exports = controller