const packageModel = require('../model/package.model');

function list() { 
  return packageModel.list();
}

function create (pkg) {
    return packageModel.create(pkg);
}

function get (name) {
    return packageModel.get(name);
}

module.exports = {
    list,
    create,
    get,
}