const Item = require('../models/item');


// router.get('/', itemCtrl.index);
exports.index = async (req, res) => {
    try {
        const items = await Item.find({});
        res.render('items/index', { title: 'Items', items });
    } catch (err) {
        res.redirect('404', { message: 'No items found' });
    }
}

// router.get('/new', itemCtrl.new);
exports.new = (req, res) => {
    try {
        res.render('items/new', { title: 'Add Item' });
    }
    catch (err) {
        res.redirect('404', { message: 'Cannot add new item' });
    }
}

// router.post('/', itemCtrl.create);
exports.create = async (req, res) => {
    try {
        const { name, quantity, dietaryAccommodations, category, person } = req.body;
        const item = new Item({ name, quantity, dietaryAccommodations, category, person });
        await item.save();
        res.redirect('/items');
    }
    catch (err) {
        res.redirect('404', { message: 'Cannot create item in database' });
    }
}

// router.get('/:id', itemCtrl.show);
exports.show = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        res.render('items/show', { item, title: 'Item Details' });
    }
    catch (err) {
        res.redirect('404', { message: 'Cannot find item' });
    }
}

// router.get('/:id/edit', itemCtrl.edit);
exports.edit = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        res.render('items/edit', { item, title: 'Edit Item' });
    }
    catch (err) {
        res.redirect('404', { message: 'Cannot edit item' });
    }
}

// router.put('/:id', itemCtrl.update);
exports.update = async (req, res) => {
    try {
        await Item.findByIdAndUpdate(req.params.id, req.body);
        res.redirect(`/items/${req.params.id}`);
    }
    catch (err) {
        res.redirect('404', { message: 'Cannot update item' });
    }
}

// router.delete('/:id', itemCtrl.destroy);
exports.destroy = async (req, res) => {
    try { 
        await Item.findByIdAndDelete(req.params.id);
        res.redirect('/items');
    }
    catch (err) {
        res.redirect('404', { message: 'Cannot delete item' });
    }
}
