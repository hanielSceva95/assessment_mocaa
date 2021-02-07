# Name: Haniel Sceva Manda
Email: hmanda1@binghamton.edu
I have used MEAN stack to finish this project. 
Tools and frameworks used in this project are : MongoDB, AngularJS, ExpressJS, NodeJS, Material design, Mongoose, HTML5, CSS3, Nodemon, Bootstrap.

The Commands to run the project
----------------------------------------------------------------------------------------------------------------------------------------
Starting the MongoDB server:
1.Head to the C:\Program Files\MongoDB\Server\4.2\bin or the folder where the Mongo files are kept and run the Cmd
2.start the mongo server using the command:	mongo
3.Create the Database employeeDatabase using :   use employeeDatabase 
4.create collection with data in it by using:

db.employees.insertMany([{ first_name: "john", age: 25, job_title: "full stack developer", salary:23456 },{ first_name: "ray", age: 85, job_title: "data analyst", salary:555555  },{ first_name: "evans", age: 35, job_title: "networks engineer", salary:23445 },{ first_name: "sam", age: 87, job_title: "data analyst", salary:5343455 },{ first_name: "haniel", age: 35, job_title: "full stack developer", salary:2242  },{ first_name: "sceva", age: 73, job_title: "networks engineer", salary:50000 },{ first_name: "daniel", age: 86, job_title: "networks engineer", salary:30000 },{ first_name: "john", age: 77, job_title: "data analyst", salary:234556  },{ first_name: "evans", age: 53, job_title: "full stack developer", salary:12345 },{ first_name: "ray", age: 22, job_title: "full stack developer", salary:1234 },{ first_name: "ray", age: 66, job_title: "data analyst", salary:123  },{ first_name: "evans", age: 55, job_title: "networks engineer", salary:234453 }])
------------------------------------------------------------------------------------------------------------------------------------------
Starting Backend server:
1.	command promt in the backend folder of the project and run : npm install
2.	 To start the server using:  nodemon app.js
------------------------------------------------------------------------------------------------------------------------------------------
Starting the Frontend server:
1.	command prompt in the frontend folder of the project and run: npm install
2.	To start the server using: ng serve
------------------------------------------------------------------------------------------------------------------------------------------
P.s: There’s an issue with angular bootstrap materials. The material design icons are not compatible with all the browsers. The search symbol adjacent to text field isn’t getting displayed in some browsers due to versioning but works just fine when clicked on it.
