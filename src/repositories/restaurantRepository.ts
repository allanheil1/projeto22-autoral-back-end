import { prisma } from '@/config';
import { NewRestaurantBody } from '@/protocols';
import { Restaurants } from '@prisma/client';

async function create(newRestaurant: NewRestaurantBody): Promise<Restaurants>{
    return prisma.restaurants.create({
        data: newRestaurant
    });
}

async function findRestaurantByName(name: string): Promise<Restaurants>{
    return prisma.restaurants.findFirst({
        where: {
            name
        }
    });
}

const restaurantRepository = {
    create,
    findRestaurantByName,
}

export default restaurantRepository;