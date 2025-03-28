const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    res.status(error.code || 500).json({
        success: false,
      message: error.message || "Something went wrong",
    });
  }
};
export default asyncHandler;

// A higer order function