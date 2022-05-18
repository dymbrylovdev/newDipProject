const Router = require("express").Router;
const UserController = require("./controllers/user-controller");
const {check} = require("express-validator")
const router = new Router();

router.post('/registration',[
    // check('login', "Логин не может быть пустым").notEmpty(),
    // check('password', "Пароль должен быть больше 4 и меньше 10 символов").isLength({min:4, max:10})
] ,UserController.registration);
router.post('/login', UserController.login);
router.post('/logout', UserController.logout);
router.get('/test', UserController.test);


module.exports = router;