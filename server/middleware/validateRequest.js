const validateRequest = (schema) => {

    return async (req, res, next) => {
        try {
            await schema.validate(req.body, {
                abortEarly: false,
                stripUnknown: true,
            });
            next();
        } catch (error) {
            return res.status(400).json({
                success: false,
                message: "Validation Failed",
                errors: error.errors,
            });
        }
    };
};

export default validateRequest;