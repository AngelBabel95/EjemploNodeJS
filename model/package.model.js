
const mongoose = require('mongoose');
const Package = mongoose.model('Package', {
    name: String,
    description: String,
    version: String,
    license: String,
}); /*Declara el paquete que se va a consultar */

function list() { /*Recibe objeto que tiene un atributo license*/
    return Package.find({});
}
 
function create(pkg) {
    const packageModel = new Package(pkg);
    return packageModel.save();
}

function get(name) {
    return Package.findOne({ name })
}

module.exports = {
    list,
    create,
    get,
};