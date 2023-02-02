import Restaurant from "../models/restaurant.js";

// 4. Return all restaurant details
// 6. return restaurants (id, cuisines, name, city, restaurantId) sorted by ASC or DESC query
export const getAllRestaurants = async (req, res) => {
    const { sortBy } = req.query;
    try {
        if (sortBy === "ASC") {
            const ascRestaurants = await Restaurant.find({}, "_id cuisine name city restaurant_id").sort("restaurant_id");
            return res.status(200).json({ status: "true", data: ascRestaurants });
        } 
        else if (sortBy === "DESC") {
            const descRestaurants = await Restaurant.find({}, "_id cuisine name city restaurant_id").sort("-restaurant_id");
            return res.status(200).json({ status: "true", data: descRestaurants });
        } 
        else {
            const allRestaurants = await Restaurant.find({});
            return res.status(200).json({ status: "true", data: allRestaurants });
        }
    } catch (error) {
        return res.status(500).json({ status: "false", message: "Could not retrieve restaurants", erorr: error.message });
    }
}

// 5. Return restaurants by cuisine
export const getRestaurantsByCuisine = async (req, res) => {
    const { cuisineName } = req.params;
    
    try {
        const restaurants = await Restaurant.find({ cuisine: cuisineName });
        if(restaurants.length >= 1) {
            return res.status(200).json({ status: "true", data: restaurants });
        } else {
            throw new Error(`Could not find restaurants with cuisine ${cuisineName}`)
        }
    } catch (error) {
        return res.status(500).json({ status: "false", message: "Could not retrieve restaurants", erorr: error.message });
    }
}

// 7. return restaurants where all cuisines are Delicatessen and city is NOT brooklyn
export const getByDelicatessen = async (req, res) => {
    try {
        const restaurants = await Restaurant.find().where("cuisine").equals("Delicatessen").where("city").ne("Brooklyn");
        return res.status(200).json({ status: "true", data: restaurants });
    } catch (error) {
        return res.status(500).json({ status: "false", message: "Could not retrieve restaurants", erorr: error.message });
    }
}