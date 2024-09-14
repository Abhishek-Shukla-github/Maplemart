# Maplemart
### The app features following functionlity

# Maplemart

**Maplemart** is a fully functional eCommerce platform built using the React,TypeScript, MongoDB, Express, Node.js with Redux Toolkit for state management.
## [API Documentation](https://documenter.getpostman.com/view/38012941/2sAXqne4F8#63a4bd98-6fa5-4255-8f8c-f555a5e0e7d5)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Learning Outcomes](#learning-outcomes)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)

## Features

- ### Full-featured shopping cart with quantity adjustments
  ![image](https://github.com/user-attachments/assets/5db749ff-8d0c-473f-9028-58483ee61650)
- Product reviews and ratings
![image](https://github.com/user-attachments/assets/1747b526-79a1-416a-9679-1272d26f59f7)

- ### Top products carousel
![image](https://github.com/user-attachments/assets/b8e4736c-f2a6-4405-8644-62394d62e9da)
- ### Product pagination
![image](https://github.com/user-attachments/assets/60711a59-1b88-49e0-bd45-0953ec6c06fe)

- ### Product search functionality
![image](https://github.com/user-attachments/assets/11bd0cb7-1dd4-4620-8c26-3025052086a2)

- ### User profile with order history
![image](https://github.com/user-attachments/assets/e4f7649d-2b03-48ae-af16-2ae01999e4e2)
![image](https://github.com/user-attachments/assets/117ad5ab-5ee0-4a1d-be75-4edd0f74b1dd)

- ### Admin panel for managing products, users, and orders
![image](https://github.com/user-attachments/assets/09c702f9-1e10-4a6b-aa0c-a592d1eb8158)
![image](https://github.com/user-attachments/assets/53b1c297-f76e-4677-aebb-bea7d207a58d)
![image](https://github.com/user-attachments/assets/6fbd576a-215f-4cda-8084-ec1a72212d33)
 
- ### Checkout process including shipping and payment methods
![image](https://github.com/user-attachments/assets/247a55d9-0224-4a52-af22-cb8161d7cbb1)
![image](https://github.com/user-attachments/assets/a550b7c1-03db-4ebe-a6ba-f5b4eb4ed151)
![image](https://github.com/user-attachments/assets/d6ddd225-1c82-46e5-bbfa-fd2f43c6188f)

- ### Integration with PayPal and credit card payments
![image](https://github.com/user-attachments/assets/573cfcce-e76b-4449-b102-5c4ef3d2b99a)
![image](https://github.com/user-attachments/assets/757f7634-278c-4e00-b194-ef6daa4751fe)
- ### Mark orders as delivered option
![image](https://github.com/user-attachments/assets/3ead7164-f21f-4df6-b01f-455f132c58fe)

## Technologies Used

- **Frontend:**
  - React with functional components & hooks
  - React Router
  - React-Bootstrap UI library
  - Redux Toolkit for state management

- **Backend:**
  - Node.js and Express.js
  - MongoDB with Mongoose ODM
  - JWT authentication (stored in HTTP-Only cookies)
  - Custom authentication middleware
  - Custom error handler

- **Integration:**
  - PayPal payments API
  - Environment variables management

- **Deployment:**
  - Currently deployed on Render
  
## Setup Instructions

1. **Clone the repository:**
   ```bash
   [git clone https://github.com/your-username/maplemart.git](https://github.com/Abhishek-Shukla-github/Maplemart.git)
   cd maplemart
2. **Install backend dependencies**
   ```bash
   npm install
3. **Install backend dependencies**
   ```bash
   cd frontend
   npm install
4. Setup the Env Variables by creating the `.env` file in the route documentary
  ```bash
    NODE_ENV=development
    PORT=5000
    MONGO_URI=
    WT_SECRET=
    PAYPAL_CLIENT_ID=
    PAGINATION_LIMIT=10
