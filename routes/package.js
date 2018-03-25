const express = require('express');
const router = express.Router();
const packageCtrl = require('../controller/package.controller');

/* GET home page. */
router.get('/', function(req, res) { 
  packageCtrl.list()
    .then(res.json.bind(res))
    .catch(next);
});

router.post('/', function(req, res, next) {
    packageCtrl.create(req.body)
        .then(res.json.bind(res))
        .catch(next);
})

router.get('/:name', function(req, res, next) {
    packageCtrl.get(req.params.name)
        .then(res.json.bind(res))
        .catch(next);
})

module.exports = router;