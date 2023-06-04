import { prisma } from '@/config';
import { SignUpBody } from '@/protocols';
import { Users } from '@prisma/client';

async function create(newUser: SignUpBody){
    return prisma.users.create({
        data: newUser,
    })
}


async function findById(){

}

async function findByLogin(login: string): Promise<Users>{
    return prisma.users.findFirst({
        where: {
            login,
        }
    });
}

const userRepository = {
    create,
    findById,
    findByLogin,
}

export default userRepository;

