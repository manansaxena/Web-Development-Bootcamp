module.exports = class AppError extends Error {
    constructor(message,status,headers){
        super();
        this.message = message;
        this.status = status;
    }
}