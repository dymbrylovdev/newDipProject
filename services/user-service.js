// const db = require("../db");
// const bcrypt = require("bcrypt")
//
// class UserService {
//     async registration (employee) {
//         const user = await db.query(`SELECT * FROM employee WHERE  login = $1`, [employee.login])
//         if (user) {
//             throw new Error(`Сотрудник с логином ${login} уже существует`);
//         }
//         const hashPass = await  bcrypt.hash(pass, 3);
//         const newUser = await  db.query(`INSERT INTO employee(name, surname, patronymic, id_employee_type, birthdate, address, phone, snils, login, password) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`,[Object.values(employee)])
//
//     }
// }
//
// module.exports = new UserService();