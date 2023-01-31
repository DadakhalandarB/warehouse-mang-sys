const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create student schema & model
const warehouseSchema = new Schema({
    Products: {
        type: String,
    },
    Orders: {
        type: String,
        required: [true, 'Orders required']
    },
    ProductStock: {
        type: Boolean,
        deafult: true
    }
});


const warehouse = mongoose.model('warehouse',warehouseSchema);

module.exports = warehouse;
