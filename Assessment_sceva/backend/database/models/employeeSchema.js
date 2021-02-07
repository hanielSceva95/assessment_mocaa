const mongoose = require('mongoose');
// import { mongoosePaginate } from 'mongoose-paginate-v2'

const employeeSchema = new mongoose.Schema({
    _listId: {
        type: mongoose.Types.ObjectId,
        require: true
    },
    first_name: {
        type: String,
        trim: true,
        minlength: 3,
        require: true
    }, age: {
        type: Number,
        trim: true,
        minlength: 18,
        required: true
    }, job_title: {
        type: String,
        trim: true,
        minlength: 3,
        require: true
    }, salary: {
        type: Number,
        trim: true,
        require: true
    }, is_still_employeed: {
        type: Boolean,
        require: true
    },
}, {
    timestamps: true,
    versionKey: false
});

employeeSchema.index({ first_name: 'text', job_title: 'text' });
// employeeSchema.plugin(mongoosePaginate)
// db.employee.insertMany([
//     { first_name: "John", age: 25, job_title: "Full stack developer", salary:24903 },
//     { first_name: "Ray", age: 85, job_title: "Data analyst", salary:234234  },
//     { first_name: "Evans", age: 25, job_title: "Networks Engineer", salary:23432423 }
//  ])
const EmployeeSchema = mongoose.model('Employee', employeeSchema);
EmployeeSchema.createIndexes();
module.exports = EmployeeSchema;