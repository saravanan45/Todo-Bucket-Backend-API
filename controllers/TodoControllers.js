const db = require("../config/db.config");
const { v4: uuidv4 } = require("uuid");

exports.getBucketTodos = (req, res) => {
  console.log("called");
  const bucketName = req.params.bucketName;
  const sql = `select * from todos where bucket_name=? `;
  const body = [bucketName];
  db.query(sql, body, (err, data) => {
    if (err) console.log("error", err);
    console.log("Data", data);
    res.json({
      data,
    });
  });
};

exports.createTodo = function (req, res) {
  const bucket_name = req.body.bucketName;
  const message = req.body.message;
  const status = req.body.status;
  const id = uuidv4();
  const body = [id, bucket_name, message, status];
  const sql = `insert into todos values (?,?,?,?)`;
  db.query(sql, body, (err, data) => {
    if (err) console.log("error", err);
    console.log("data", data);
    res.json({
      message: "successfully created todo",
      id,
    });
  });
};

exports.editTodo = (req, res) => {
  const message = req.body.message;
  const id = req.body.id;
  const sql = "update todos set message = ? where id =?";
  const body = [message, id];
  db.query(sql, body, (err, data) => {
    if (err) console.log("error", err);
    console.log(data);
    res.json({
      message: "edit done successfully",
      data,
    });
  });
};

exports.deleteTodo = (req, res) => {
  const id = req.params.id;
  const sql = `delete from todos where id=?`;
  db.query(sql, [id], (err, data) => {
    if (err) console.log("err", err);
    res.json({
      message: "deleted successfully",
    });
  });
};

exports.changeStatus = (req, res) => {
  const id = req.body.id;
  const status = req.body.status;

  const sql = `update todos set status=? where id=?`;
  const body = [status, id];

  db.query(sql, body, (err, data) => {
    if (err) console.log("err", err);
    res.json({
      message: "updated status successfully",
    });
  });
};

exports.getBucketsList = (req, res) => {
  const sql = "select name from buckets where category=?";
  const category = req.params.category;
  db.query(sql, [category], (err, data) => {
    if (err) console.log("err", err);
    console.log("data");
    res.json({
      data,
    });
  });
};

exports.createTodoTable = (req, res) => {
  const name = req.body.name;
  const category = req.body.category;

  const sql = "insert into buckets values(?,?)";
  const body = [name, category];
  db.query(sql, body, (err, data) => {
    if (err) console.log("err", err);
    res.json({
      message: "data inserted into buckets successfully",
    });
  });
};
