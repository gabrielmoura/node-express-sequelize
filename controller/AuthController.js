const bcrypt = require('bcryptjs');
User = require('../model/User');
module.exports = {
    login(req, res) {
        res.render('auth/login');
    },
    authenticate(req, res) {
        var email = req.body.email;
        var password = req.body.password;
        User.findOne({
            where: {email: email}
        }).then(user => {
            if (user != undefined) {
                var correct = bcrypt.compareSync(password, user.password);
                if (correct) {
                    req.session.user = {
                        id: user.id,
                        email: user.email,
                        role: user.role
                    }
                    res.redirect('/admin/article');
                } else {
                    res.redirect("/login");
                }
            } else {
                res.redirect("/login");
            }
        })
    },
    logout(req, res) {
    },
    register(req, res) {
    },
    registerStore(req, res) {
    },
}