export function conflictError(message: string[]) {
return {
    name: "ConflictError",
    message,
};
}


export function unauthorizedError() {
return {
    name: "UnauthorizedError",
    message: "You must be signed in to continue",
};
}

export function notFoundError() {
return {
    name: "NotFoundError",
    message: "No result for this search!",
};
}


export function notAllowed() {
return {
    name: "NotAllowed",
    message: "You are not allowed to access this!",
};
}

export function invalidCredentialsError() {
return {
    name: "InvalidCredentialsError",
    message: "Incorrect email or password",
};
}
