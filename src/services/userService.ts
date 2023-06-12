import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import errors from '@/errors/errors';
import { SignInBody, SignUpBody } from '@/protocols';
import userRepository from '@/repositories/userRepository';
import sessionRepository from '@/repositories/sessionRepository';
import restaurantRepository from '@/repositories/restaurantRepository';

async function create(newUser: SignUpBody) {

  await validateUniqueLogin(newUser.login);
  const hashedPassword = await bcrypt.hash(newUser.password, 10);

  if(newUser.code){
    const restaurant = await restaurantRepository.findRestaurantByCode(newUser.code);
    if(!restaurant) throw errors.notFoundError();
    await userRepository.create({
      ...newUser,
      password: hashedPassword,
      restaurantId: restaurant.id,
    });
  }else{
    await userRepository.create({
      ...newUser,
      password: hashedPassword,
    });
  }
}

async function signIn(userToLog: SignInBody) {
  const user = await userRepository.findUserByLogin(userToLog.login);
  if(!user) throw errors.invalidCredentialsError();

  const isPasswordCorrect = await bcrypt.compare(userToLog.password, user.password);
  if(!isPasswordCorrect) throw errors.invalidCredentialsError();

  const usertoken = createSession(user.id);
  const response = {
    userName: user.name,
    usertoken: usertoken,
  }
  return{
    response
  }
}

async function createSession(userId: number){
  const usertoken = jwt.sign({userId}, process.env.JWT_SECRET);
  await sessionRepository.create(userId, usertoken);
  return usertoken;
}

async function validateUniqueLogin(login: string) {
  const userWithSameLogin = await userRepository.findUserByLogin(login);
  if (userWithSameLogin) throw errors.duplicatedLoginError();
}

const userService = {
    create,
    signIn,
}

export default userService;
