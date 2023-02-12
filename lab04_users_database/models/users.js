import mongoose from "mongoose";


const geoSchema = new mongoose.Schema({
    lat: {
        type: String,
        required: true 
    },
    lng: {
        type: String,
        required: true 
    },
});

const addressSchema = new mongoose.Schema({
    street: { 
        type: String, 
        required: true 
    },
    suite: { 
        type: String, 
        required: true 
    },
    city: {
        type: String,
        validate: [/^[a-zA-Z\s]+$/, "Invalid characters for city"],
        required: true
    },
    zipcode: {
        type: String,
        validate: [/\d{5}-\d{4}/, "Please enter a valid zip code (#####-####)"],
        required: true
    },
    geo: geoSchema,
});

const companySchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    catchPhrase: { 
        type: String, 
        required: true 
    },
    bs: { 
        type: String, 
        required: true 
    },
});


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: [true, "Username already exists"],
        required: [true, "Username cannot be empty"],
        min: [4, "Username must be greater than 4 characters"],
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: [true, "Email already registered"],
        lower: true,
        validate: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Enter a valid email address"]
    },
    address: {
        type: addressSchema,
        required: true,
    },
    phone: {
        type: String,
        validate: [/^\d-\d{3}-\d{3}-\d{4}$/, "Please enter a valid phone number (#-###-###-####)"],
        required: true,
    },
    website: {
        type: String,
        validate: [/^https?:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please enter a valid website, http or https is accepted"],
        required: true,
    },
    company: {
        type: companySchema,
        required: true,
    },

});

export default mongoose.model("user", userSchema);