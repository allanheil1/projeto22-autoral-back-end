function conflictError(message: string[]) {
return {
    name: "ConflictError",
    message,
};
}

function duplicatedLoginError() {
return {
    name: 'DuplicatedLoginError',
    message: 'There is already an user with given login',
};
}
  

function unauthorizedError() {
return {
    name: "UnauthorizedError",
    message: "You must be signed in to continue",
};
}

function notFoundError() {
return {
    name: "NotFoundError",
    message: "No result for this search!",
};
}


function notAllowed() {
return {
    name: "NotAllowed",
    message: "You are not allowed to access this!",
};
}

function invalidCredentialsError() {
return {
    name: "InvalidCredentialsError",
    message: "Incorrect email or password",
};
}

const errors = {
    conflictError,
    unauthorizedError,
    notFoundError,
    duplicatedLoginError,
    notAllowed,
    invalidCredentialsError,
}

export default errors;
