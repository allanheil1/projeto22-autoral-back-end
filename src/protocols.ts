export type ApplicationError = {
    name: string;
    message: string;
};

export type SignUpBody = {
  login: string,
  name: string,
  password: string,
  code: string,
  isAdm: boolean,
}