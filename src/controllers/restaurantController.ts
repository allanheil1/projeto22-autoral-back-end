import { NewRestaurantBody } from "@/protocols";
import restaurantService from "@/services/restaurantService";
import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";

async function create(req: Request, res: Response, next: NextFunction){
    const newRestaurant = req.body as NewRestaurantBody;

    try{
        const createdRestaurant = await restaurantService.create(newRestaurant);
        return res.status(httpStatus.CREATED).send(createdRestaurant);
    } catch (err) {
        next (err);
    }
}

async function getAll(req: Request, res:Response, next:NextFunction){
    
    try{
        
    } catch (err){

    }
}

const restaurantController = {
    create, 
    getAll,
}

export default restaurantController;