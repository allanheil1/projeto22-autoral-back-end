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

