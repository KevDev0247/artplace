const User = require("../models/UserModel");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncError = require("../middleware/catchAsyncErrors");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// register user
exports.createUser = catchAsyncError(async (req, res, next) => {
    const {name, email, password} = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: "http://test.com",
            url: "http://test.com"
        }
    });
    const token = user.getJwtToken();

    res.status(201).json({
        success: true,
        token
    });
});

// login user
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const {email, password} = req.body
    if (!email || !password) {
        return next(new ErrorHandler("Please enter your email and password"), 400);
    }
    const user = await User.findOne({email}).select("+password");

    if (!user) {
        return next(new ErrorHandler("User is not found with this email & password", 401));
    }

    const isPasswordMatched = await user.comparePassword(password);
    if (!isPasswordMatched) {
        return next(new ErrorHandler("User is not found with this email & password", 401));
    }
    const token = user.getJwtToken();

    res.status(201).json({
        success: true,
        token
    });
})