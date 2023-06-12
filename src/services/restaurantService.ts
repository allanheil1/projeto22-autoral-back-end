import { NewRestaurantBody } from "@/protocols";
import errors from '@/errors/errors';
import restaurantRepository from "@/repositories/restaurantRepository";

async function create(newRestaurant: NewRestaurantBody){
    await validateUniqueName(newRestaurant.name);
    await restaurantRepository.create(newRestaurant);
}

async function validateUniqueName(name: string){
    const restaurantWithSameName = await restaurantRepository.findRestaurantByName(name);
    if(restaurantWithSameName) throw errors.duplicatedNameError();
}

const restaurantService = {
    create,
}

export default restaurantService;