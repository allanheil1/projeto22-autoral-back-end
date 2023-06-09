import { prisma } from '@/config';

async function create(userid: number, usertoken: string){
    return prisma.session.create({
        data: {
            userid,
            usertoken,
        },
    })
}

const sessionRepository = {
    create,
}

export default sessionRepository;

