export const ROLES = {
    ADMIN: "admin",
    USER: "user",
};

export const HTTP_STATUS = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    INTERNAL_SERVER_ERROR: 500,
};

export const MESSAGES = {
    SERVER_ERROR: "Internal Server Error",
    ROUTE_NOT_FOUND: "Route Not Found",
    LOGIN_SUCCESS: "Login Successful",
    LOGOUT_SUCCESS: "Logged Out Successfully",
    INVALID_CREDENTIALS: "Invalid Email or Password",
    UNAUTHORIZED: "Unauthorized",
    ACCESS_DENIED: "Access Denied",
};

export const DEFAULTS = {
    PAGE: 1,
    LIMIT: 10,
};