const SignUp = require('../model/signup');
const bcrypt = require('bcrypt');

const signup = async (req, res) => {
    try {
        const userData = await SignUp.findOne({ email: req.body.email });

        if (userData) {
            res.send({ message: "User Already Exists", status: 409 })
        } else {
            const { name, email, phone, password } = req.body;

            const hashedPassword = await bcrypt.hash(password, 10);

            const employeesignup = new SignUp({ name, email, phone, password: hashedPassword });
            await employeesignup.save();
            res.send({ message: 'Employee signUp successfully', status: 200 });
        }
    } catch (error) {
        console.error(error);
        res.send({ message: 'Internal server error while signup', status: 500 });
    }
};

module.exports = { signup };
