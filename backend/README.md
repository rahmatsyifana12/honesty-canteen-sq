### Technologies
* JavaScript
* Node.js
* Express.js
* Sequelize
* PostgreSQL
* JWT
* bcrypt

### Getting Started

#### Install dependencies
```
npm install
```

#### Install sequelize-cli globally
```
npm install -g sequelize-cli
```

#### Initialize your env
```
cp .env.example .env
```

#### Generate token secret
```
npm run jwt:generate
```

### Fill your database configuration in `.env` file
example by default :
```
PORT=5000
ACCESS_TOKEN_SECRET=
DB_USERNAME=postgres
DB_PASSWORD=password
DB_DATABASE=honesty_canteen
DB_HOST=127.0.0.1
```

#### Create the database locally (if you haven't created it yet)
```
sequelize db:create
```

#### Migrate the required tables into database
```
npm run migrate
```


#### Seed data into database
```
npm run seed
```

#### Run the application
```
npm run start
```
