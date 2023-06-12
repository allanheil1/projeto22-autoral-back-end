import { prisma } from '@/config';
import { NewRestaurantBody } from '@/protocols';
import { Restaurants } from '@prisma/client';

async function create(newRestaurant: NewRestaurantBody): Promise<Restaurants>{
    console.log(newRestaurant);
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

async function findRestaurantByCode(code: string): Promise<Restaurants>{
    return prisma.restaurants.findFirst({
        where: {
            code
        }
    })
}

const restaurantRepository = {
    create,
    findRestaurantByName,
    findRestaurantByCode,
}

export default restaurantRepository;