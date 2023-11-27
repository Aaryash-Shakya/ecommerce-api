# Food Delivery API

Welcome to the my E-commerce API, a complete backend service for an e-commerce system. This API provides a robust platform for handling users, products, categories, orders, tokens and payment. Whether you're a restaurant owner or a developer looking to integrate food delivery functionality into your application, this API is a great starting point.

## [click me to check out the FRONTEND_PROJECT](https://github.com/Aaryash-Shakya/ecommerce-website-react) **

## <img src="https://cdn.iconscout.com/icon/free/png-256/free-layers-94-675757.png?f=webp" height=32 width=32> Tech Stack

- <img src="https://img.shields.io/badge/-JavaScript-555?logo=typescript" height=30> 
- <img src="https://img.shields.io/badge/-Node.js-555?logo=node.js" height=30> 
- <img src="https://img.shields.io/badge/-Express-555?logo=express" height=30> 
- <img src="https://img.shields.io/badge/-MongoDB-555?logo=mongodb" height=30> 

## 💡Features

- **User Authentication:** Secure user registration and login with JWT (JSON Web Tokens) for authentication.
- **Email Verification:** Verify user email with nodemailer and mailtrap.
- **Category Management:** Add, update, fetch and delete category information.
- **Product Management:** Add, update, fetch and delete product information.
- **Order Management:** Add, update, fetch and delete order information.
- **Payment Integration:** Make payments via using the stripe API.

## 🧑‍💻 Installation
Follow these steps to set up the Food Delivery API on your local development environment:

1. Clone the repository:
    ```sh
    git clone https://github.com/Aaryash-Shakya/ecommerce-api.git
    cd ecommerce-api
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables:
    
    **Create .env folder with following data**
    ```
    PORT = "localhost port for api"
    FRONTEND_URL = "localhost port for frontend"

    SMTP_HOST = "your mailtrap SMTP server host"
    SMTP_PORT = "your mailtrap SMTP server port"
    SMTP_USER = "your mailtrap SMTP server username"
    SMTP_PASS = "your mailtrap SMTP server password"

    JWT_SECRET = "any secret string to encode with JWT"

    STRIPE_API_KEY = "your stripe account api key"
    STRIPE_SECRET_KEY = "your stripe account secret key"
    ```

4. Start the API server:
    ```sh
    npm start
    ```

The API should now be running locally on http://localhost:(your PORT).

## <img src="https://cdn.iconscout.com/icon/free/png-256/free-social-285-116319.png?f=webp" height=32 width=32> Contributing
We welcome contributions from the open-source community to enhance my api's features, functionality, and documentation. Feel free to fork this repository, create your own branch, and submit pull requests.

### Make sure to follow the instruction below:

1. **Fork this repository.**
    
    Click on the fork button on the repository

2. **Clone the repository:**

    Go to your forked repository, Click on the code button and copy your repository's `(.git)` link.
  
    Then, clone the repository in ur machine using the command below

    ```sh
    git clone https://github.com/<your-username>/ecommerce-api.git
    cd ecommerce-api
    ```

3. **Make a branch and add your changes:**

    In your local machine create a new branch

    ```sh
    git checkout -b <branch_name>
    ```

    Add your changes to the branch

4. **Check the changed files**
 
    ```sh
    git status
    ```

5. **If everything's good, then Commit Your Changes**

    ```sh
    git add .
    git commit -m "<EXPLAIN-YOUR_CHANGES>"
    ```

6. **Push to Your Forked Repository**

    ```sh
    git push -u origin <branch_name>
    ```

7. **Create a Pull Request**

    Go to your forked repository on GitHub, and you should see a "Compare & pull request" button. Click on it to create a pull request (PR).
    
    Create a pull request with a clear description of your changes.
      
    Your contribution will be reviewed, and upon approval, it will be merged into the main repository.

