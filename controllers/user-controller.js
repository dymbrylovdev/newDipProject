const userService = require("../services/user-service")
const db = require("../db");
const bcrypt = require("bcrypt");


class UserController {
    async registration(req, res, next) {
        try {
            const employee = new EmployeeDto(req.body);
            const user = await db.query(`SELECT * FROM employee WHERE  login = $1`, [employee.login])
            if (user) {
               return res.status(400).json(`Сотрудник с логином ${login} уже существует`);
            }
            const hashPass = await  bcrypt.hash(pass, 3);
            const role = await  db.query(`SELECT * FROM employee_type WHERE  code = $1`, [employee.code])
            console.log(role)
            employee.password = hashPass;
            employee.employee_type = role.id;
            const newUser = await  db.query(`INSERT INTO employee(name, surname, patronymic, id_employee_type, birthdate, address, phone, snils, login, password) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`,[Object.values(employee)])
            return res.json(result);

        } catch (e) {

        }
    }

    async login(req, res, next) {
        try {
            console.log(req.body)
        } catch (e) {

        }
    }

    async logout(req, res, next) {
        try {

        } catch (e) {

        }
    }

    async test(req, res, next) {
        try {
            res.json(['1','2'])
        } catch (e) {

        }
    }
}

module.exports = new UserController();