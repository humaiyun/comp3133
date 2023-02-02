import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    building: String,
    street: String,
    zipcode: String
})

const restaurantSchema = new mongoose.Schema({
    address: {
        type: addressSchema
    },
    city: {
        type: String
    },
    cuisine: {
        type: String
    },
    name: {
        type: String
    },
    restaurant_id: {
        type: String
    },
});

export default mongoose.model("restaurant", restaurantSchema);