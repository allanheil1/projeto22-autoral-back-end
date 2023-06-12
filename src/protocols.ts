export type ApplicationError = {
    name: string;
    message: string;
};

export type SignUpBody = {
  login: string,
  name: string,
  password: string,
  code?: string,
  isAdm: boolean,
}

export type SignInBody = {
  login: string,
  password: string,
}

export type NewRestaurantBody = {
  name: string,
  tables: number,
}