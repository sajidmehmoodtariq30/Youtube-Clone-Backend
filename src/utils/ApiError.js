class ApiError extends Error{
    constructor(
        statusCode,
        message= "Something went wrong",
        errors= [],
        stack= ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors
    }
}

export default ApiError;

// Extending an inbiult nodejs error class so that the codebase becomes more standardized and everytime an error is sent to the server it is sent in the same format.