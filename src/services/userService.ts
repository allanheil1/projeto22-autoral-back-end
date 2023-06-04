import bcrypt from 'bcrypt';
import userRepository from '@/repositories/userRepository';
import errors from '@/errors/errors';
import { SignUpBody } from '@/protocols';

async function create(newUser: SignUpBody) {
  await validateUniqueLogin(newUser.login);
  const hashedPassword = await bcrypt.hash(newUser.password, 10);
  await userRepository.create({
      ...newUser,
      password: hashedPassword,
  });
}

async function validateUniqueLogin(login: string) {
  const userWithSameLogin = await userRepository.findByLogin(login);
  if (userWithSameLogin) {
    throw errors.duplicatedLoginError();
  }
}

async function signin() {

}

const userService = {
    create,
    signin
}

export default userService;
