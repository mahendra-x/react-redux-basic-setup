const sql = require("../config/database");
const { parse, stringify, toJSON, fromJSON } = require("flatted");

// exports.getProducts = async (req, res, next) => {
//   try {
//     const circularReplacer = () => {
//       // Creating new WeakSet to keep
//       // track of previously seen objects
//       const seen = new WeakSet();

//       return (key, value) => {
//         // If type of value is an
//         // object or value is null
//         if (typeof value === "object" && value !== null) {
//           // If it has been seen before
//           if (seen.has(value)) {
//             return "Object";
//           }

//           // Add current value to the set
//           seen.add(value);
//         }

//         // return the value
//         return value;
//       };
//     };

//     let final = []
//     let result = sql.query("SELECT * FROM users", (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//          res.status(200).json({
//            success: true,
//            result: result
//          })

//       }
//     });

//   } catch (error) {
//     console.log("Error ocuured", error);
//   }
// };

exports.getProducts = async (req, res, next) => {
  let tableName = ["boiler", "cutomer", "users"];
  let records = [];

  const dbQuery = (tableName) => {
    return new Promise((resolve, reject) => {
      sql.query(`SELECT * FROM ${tableName}`, (err, result) => {
        if (err) {
          console.log(err);
          reject();
        } else {
          records.push(result);
          resolve();
        }
      });
    });
  };

  for (let a = 0; a < tableName.length; a++) {
    await dbQuery(tableName[a]);
  }
  console.log("records", records);
  // console.log(mysql.query(SELECT * FROM INFORMATION_SCHEMA.TABLES ))

  res.status(200).json({
    success: true,
    message: "This is records coming from backend",
    result: records,
  });
};

exports.postProducts = async (req, res, next) => {
  const id= req.body.id;
  const color = req.body.color;
  const type = req.body.type;
  const registration = req.body.registration;
  const capacity = req.body.capacity;

  console.log(color, type, registration, capacity);

  const dbQuery = (tableName) => {
    return new Promise((resolve, reject) => {
      sql.query(
        "INSERT INTO testing VALUES(?,?,?,?,?)",
        [id,color, type, registration, capacity],
        (err, result) => {
          if (err) {
            res.send(err.message).json({
              success: false,message: err.message
            })
            reject();
          } else {
            resolve();
            res.status(200).json({
              success: true,
              message: "successfully inserted into database",
              // result:records
            });
          }
        }
      );
    });
  };
  dbQuery();

  // await sql.query(
  //   "INSERT INTO testing VALUES(?,?,?,?,?)",
  //   [id,color, type, registration, capacity],
  //   (err, result) => {
  //     if (err) return err;
  //     else {
  //       res.status(200).json({
  //         success: true,
  //         message: "successfully inserted into database",
  //         // result:records
  //       });
  //     }
  //   }
  // );
};
