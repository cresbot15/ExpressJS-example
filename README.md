# Requirements
- [Node.js](https://nodejs.org/) installed

# Installation
```bash
git clone https://github.com/cresbot15/ExpressJS-example.git
cd ExpressJS-example
npm install
```

# Running the API
Development server
```bash
npm run dev
```
Production server
```bash
npm start
```

Before using the authentication routes a JWT_SECRET variable should be added to the environent file. This can be any string but a cyrptographically secure string can be generate through:
```bash
node -e "console.log(require('crypto').randomBytes(256).toString('base64'));"
```

# Endpoints
The server will be running on 127.0.0.1:8000 by default and has a handful of endpoints so far:
- GET: /
- GET: /api/items
- POST: /api/items
    - BODY: { "item": String }
    - RESPONSE: {"data": JSON }
- POST: /api/auth/register
    - BODY: { "email": String, "username": String, "password": String }
    - RESPONSE: { "id": Int, "username": String, "email": String}
- POST: /api/auth/login
    - BODY: { "email": String, "password": String }
    - RESPONSE: { "access_token": String, "token_type": String }