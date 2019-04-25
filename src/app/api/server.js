const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');


var corsOptions = {
  exposedHeaders: ['Location']
};
app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));

  var connection = mysql.createConnection({
    host: 'desktop-r08eqpu.usla.ibm.com',
    user: 'scc',
    password: 'scc',
    database: 'scc'
  });
  connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
});

  app.listen(3000, function () {
    console.log('MySQL Connection is listening on port 3000!');
  });

  login = "SELECT * FROM Employee_Login"
  app.get('/employees/login', function (req, res) {
    get_query= connection.query(login, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'LIST EMPLOYEE' });
    });
    console.log("GET QUERY: " + get_query.sql);
});


  select = "SELECT * FROM Employee ORDER BY FIRST_NAME";
  app.get('/employees/list', function (req, res) {
    get_query= connection.query(select, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'LIST EMPLOYEE' });
    });
    console.log("GET QUERY: " + get_query.sql);
});
 

insert = "INSERT INTO Employee (FIRST_NAME,LAST_NAME,ADDRESS,CITY,STATE,ZIP,CELL_PHONE,HOME_PHONE,EMAIL) VALUES (?,?,?,?,?,?,?,?,?)";
app.post('/employees/add',function (req, res) {
  var employee = req.body;
  var add_query = connection.query(insert,[employee.FIRST_NAME,employee.LAST_NAME,employee.ADDRESS,employee.CITY,employee.STATE,employee.ZIP,employee.HOME_PHONE,employee.CELL_PHONE,employee.EMAIL],function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'ADD EMPLOYEE' });
  });
  console.log("ADD QUERY: " + add_query.sql );
});

edit = "UPDATE Employee SET FIRST_NAME=?,LAST_NAME=?,ADDRESS=?,CITY=?,STATE=?,ZIP=?,CELL_PHONE=?,HOME_PHONE=?,EMAIL=? WHERE ID=?"
app.put('/employees/edit',function (req, res) {
  var employee = req.body;
  var edit_query = connection.query(edit,[employee.FIRST_NAME,employee.LAST_NAME,employee.ADDRESS,employee.CITY,employee.STATE,employee.ZIP,employee.HOME_PHONE,employee.CELL_PHONE,employee.EMAIL,employee.ID],function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'EDIT EMPLOYEE' });
  });
  console.log("EDIT QUERY: " + edit_query.sql  );
});

  
