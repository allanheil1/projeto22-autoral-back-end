import { NewRestaurantBody } from "@/protocols";
import errors from '@/errors/errors';
import restaurantRepository from "@/repositories/restaurantRepository";
import userRepository from "@/repositories/userRepository";

async function create(newRestaurant: NewRestaurantBody, userId: number){
    await validateUniqueName(newRestaurant.name);
    const createdRestaurant = await restaurantRepository.create(newRestaurant);
    await userRepository.updateRestaurantId(userId, createdRestaurant.id);
    return createdRestaurant;
}

async function validateUniqueName(name: string){
    const restaurantWithSameName = await restaurantRepository.findRestaurantByName(name);
    if(restaurantWithSameName) throw errors.duplicatedNameError();
}

const restaurantService = {
    create,
}

export default restaurantService;