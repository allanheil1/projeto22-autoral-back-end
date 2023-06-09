import { prisma } from '@/config';
import { SignUpBody } from '@/protocols';
import { Users } from '@prisma/client';

async function create(newUser: SignUpBody){
    return prisma.users.create({
        data: {
            isadm: newUser.isAdm,
            name: newUser.name,
            login: newUser.login,
            password: newUser.password,
        },
    })
}


async function findById(userId: number){
    return prisma.users.findUnique({
        where: {
            id: userId,
        }
    });
}

async function findByLogin(login: string): Promise<Users>{
    return prisma.users.findFirst({
        where: {
            login,
        }
    });
}

async function findAllByRestaurantId(restaurantId: number){
    return prisma.users.findMany({
        where: {
            restaurantId
        }
    })
}

async function updateRestaurantId(userId: number, restaurantId: number){
    return prisma.users.update({
        where: {
            id: userId,
        },
        data: {
            restaurantId: restaurantId,
        }
    })
}

const userRepository = {
    create,
    updateRestaurantId,
    findById,
    findAllByRestaurantId,
    findByLogin,
}

export default userRepository;

