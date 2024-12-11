const express = require('express');
const router = express.Router();
const itemCtrl = require('../controllers/itemController');

router.get('/', itemCtrl.index);
router.get('/new', itemCtrl.new);
router.post('/', itemCtrl.create);
router.get('/:id', itemCtrl.show);
router.get('/:id/edit', itemCtrl.edit);
router.put('/:id', itemCtrl.update);
router.delete('/:id', itemCtrl.destroy);

module.exports = router;