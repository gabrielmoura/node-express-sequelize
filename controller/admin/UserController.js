const bcrypt = require('bcryptjs');
User = require('../../model/User');
module.exports = {
    store(req, res) {
        var pass = req.body.password;
        var email = req.body.email;
        User.findOne({
            where: {email: email}
        }).then(user => {
            if (user == undefined) {
                var salt = bcrypt.genSaltSync(10);
                var hash = bcrypt.hashSync(pass, salt);

                User.create({
                    password: hash,
                    email: email
                }).then(() => {
                    res.redirect('/');
                });
            }
        });
    }
}