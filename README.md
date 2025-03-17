
# Youtube-Clone-Backend

Backend for my Youtube Clone

Steps for my project thoroughly written:-

Step 01:-  Basic Setup
    - Run npm init and type necessary information
    - Install Nodemon as developer dependency
    - Make basic folder structure and some necessaey files like server.js, app.js and an index.js file in folder database
    - Also make a public/temp folder and add a .gitkeep file in it this will be static folder in which our files will be served before sending it to cloudinary.
    - Also write type = "module" in package.json
Step 02:- Database Connection
    - Install necessary packages like dotenv for keeping the api strings, passwords secure and mongoose for mongodb also express for routing i.e. npm i mongoose dotenv express
    - create a .env file and write mongodb url in it.
    - In database/index.js write code for database connection
    - In server.js call the function written in database/index.js
Step 03:- Basic code for Server
    - npm i cookie-parser cors
    - In app.js set basic congigurations
    - Write an async handler that takes a function and applies try catch on it
    - Write code for custom APi for error and response
Step 04:-  User & Video Model
    - Make a file for userModel as well as videoModel
    - npm i mongoose-aggregate-paginate-v2 and import it in videoModel
    - npm i bcrypt, jsonwebtoken and import it in userModel
    - write code that encrypts the password before saving the data.
    - Use jwt to create tokens
Step 05:- File uploading
    - npm i cloudinary multer
    - Setup cloudinary
