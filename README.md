# Instruction Manual for E-commerce API Project

Welcome to the E-commerce API project! This project is designed to help you learn how to develop and deploy a Node.js application with AWS services and Docker.

## Prerequisites

Before you begin, you will need to have the following:

-   Node.js installed on your local machine
-   An AWS account with access to the following services:
    -   IAM
    -   EC2
    -   S3
-   Basic knowledge of JavaScript and Node.js

## Software Requirements Specification

The following are the requirements for this project:

1. GET `/products` - Fetch all products

The API should return a list of all products available in the store. The product list file is stored in an S3 bucket of your choice named `products.json`. An example of the product list file is provided in the project files.

2. POST `/checkout` - Place an order

The API should accept a request body with the following properties:

-   `name` - The name of the customer
-   `email` - The email address of the customer
-   `address` - The address of the customer
-   `products` - An array of an object with the following properties:
    -   `id` - The ID of the product
    -   `quantity` - The quantity of the product

The API should return a 400 Bad Request response code if any of the required properties are missing.

This API should fetch the product list from the S3 bucket and calculate the total price of the order. The response format is provided in the API documentation.

## Project Setup

1. Download the project files from this drive folder.
2. Install the project dependencies by running `npm install` in the project root directory.
3. Set up the AWS SDK and configure it with your AWS credentials.
4. Set up an EC2 instance to deploy the application.
5. Launch the instance and SSH into it. Copy the project files to the instance using SCP or any other file transfer mechanism.
6. Build the Docker image with Docker Compose.
7. Run the Docker compose file to start the application.

## API Documentation

API documentation for this project can be found in the `API.md` file in the project root directory.

## Conclusion

Congratulations! You have now successfully set up and deployed the E-commerce API project using Node.js, Docker and AWS services. I hope you enjoyed this project and learned some valuable skills along the way.
