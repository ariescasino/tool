const bcryptjs = require('bcryptjs');

const generatePassword = (password) => {
    return bcryptjs.hashSync(password, bcryptjs.genSaltSync(12), null)
}
const validatePassword = (password, hashedPass) => {
    return bcryptjs.compareSync(password, hashedPass);
};

module.exports = {
    generatePassword,
    validatePassword
}