
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
