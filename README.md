# Holiday Wishlist App!

## Description:

Focus on what matters when it comes to the holidays! What presents will I get????? Take the guessing game out of the holidays and let your friends know what you want. You will be able to see your friends wishlists as well. Now you will never need to worry about a pile up of tchotchke gifts!


- [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Table of Contents
1. [ Description. ](#description)
2. [ Installation. ](#installation)
3. [ Usage. ](#usage)
4. [ License. ](#license)
6. [ Tests. ](#tests)
7. [ Questions. ](#questions)
8. [ Screenshots. ](#screenshots)
9. [ Contributors. ](#contributors)
10. [ Resources. ](#resources)
11. [ Links. ](#links)

## Installation
* Clone the repository using:
```
git clone git@github.com:Darin1027/Holiday-Wishlist-App.git
```
* Ensure you are in the current working directory
* Ensure all dependencies are installed as shown below installation instructions are below:
```
  "dependencies": {
    "bcrypt": "^5.0.0",
    "connect-session-sequelize": "^7.0.4",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "express-handlebars": "^5.2.0",
    "express-session": "^1.17.1",
    "handlebars": "^4.7.6",
    "mysql2": "^2.2.5",
    "sequelize": "^6.3.5"
  }

```
```
npm install bcrypt
```
```
npm install connect-session-sequelize
```
```
npm install dotenv
```
```
npm install express
```
```
npm install express-handlebars
```
```
npm install express-session
```
```
npm install handlebars
```
```
npm install mysql2
```
```
npm install sequelize
```
```
npm install sequelize
```

Run the the best Holiday application by typing the following in the terminal:
```
node index.js
```

## Usage:

* Ensure all depencies and above steps are fulfilled 
* Navigate to the working directory and open a terminal and run the below command
```
mysql -u root -p
```
```
DROP DATABASE IF EXISTS secert_santa_db;
CREATE DATABASE secert_santa_db;
```

* After enter password run the below command to initiliaze the database
```
SOURCE schema.sql || SOURCE seeds.sql
```
* create a .env file in the root directly and add youi mysql connection information
```
DB_NAME='secert_santa_db'
DB_USER=''
DB_PASSWORD=''
```
## License

MIT License

Copyright (c) 2022 Holiday-Wishlist-App

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

- https://opensource.org/licenses/MIT

## Tests

N/A

## Screenshots

The following animations shows the application's functionality


![Gif of Holiday wishlist”.](./public/img/login.gif)
![Gif of Holiday wishlist”.](./public/img/singup.gif)
![Gif of Holiday wishlist”.](./public/img/add_delete.gif)


## Contributors:

* Erich Ebbinghaus [eebbinghaus@gmail.com] 
* Siddharth Desai  [shdesai327@gmail.com] 
* Nicolette Boggs  [nrb1628@gmail.com] 
* Kevin Tran       [kevinTran@gmail.com] 
* Darin Palombo    [dplb1027@gmail.com] 

# Questions:

Want to see more of my work? 
* [shd327](https://github.com/SHD327)
* [Darin1027](https://github.com/eebbinghaus)
* [Github Link](https://github.com/Darin1027)
* [NicoletteBoggs](https://github.com/NicoletteBoggs)
<br/>
Want to learn more please contact me at weDontWantYourEmails@notAnEmailAccount.com

## Contact Us:

weDontWantYourEmails@notAnEmailAccount.com

## Links

* [Github Link](https://github.com/Darin1027/Holiday-Wishlist-App)
* [Deployed Link](https://mighty-escarpment-72007.herokuapp.com/)


## Resources
* https://www.npmjs.com/package/mysql2
* https://www.npmjs.com/package/sequelize
* https://www.npmjs.com/package/dotenv
* https://www.npmjs.com/package/bcrypt
* https://www.npmjs.com/package/connect-session-sequelize
* https://www.npmjs.com/package/express
* https://www.npmjs.com/package/express-handlebars
* https://www.npmjs.com/package/express-session
* https://www.npmjs.com/package/handlebars
* https://particles.js.org/
