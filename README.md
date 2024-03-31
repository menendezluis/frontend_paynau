# Frontend Paynau

Simple post list with filters, redux and redux-toolkit
<img width="1675" alt="Screenshot 2024-03-31 at 7 43 58 AM" src="https://github.com/menendezluis/frontend_paynau/assets/76136932/63d6a66e-1c0a-4dd3-8932-68db4404df32">


## Installation

Make sure you have Docker installed on your system before proceeding || or clone the repo.

## Building the Docker Image

To build the Docker image locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the root directory of the project.
3. Run the following command to build the Docker image:

   ```bash
   docker build -t frontend_paynau .
   ```

   Replace "frontend_paynau" with the desired name for your Docker image.

## Usage

**If you want the docker image, you can find it on Docker Hub.**
[frontend_paynau](https://hub.docker.com/repository/docker/luismenendezdev/frontend_paynau/general)

To run a container based on the built Docker image, you can use the following command:

````bash
docker run -p 8080:80 frontend_paynau
This will run a Docker container that will execute your application on port 8080 of the local host. You can change the port number if desired.

Finding the Image on Docker Hub
The Docker image of this project is available on Docker Hub. You can find it at the following link:

Your_frontend_paynau_on_Docker_Hub

Contribution
If you want to contribute to this project, please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature/new-feature).
Make your changes and commit them (git commit -am 'Add a new feature').
Push the branch (git push origin feature/new-feature).
Open a Pull Request.
# Project Name

Brief description or introduction of your project here.

## Installation

Make sure you have Docker installed on your system before proceeding.

## Building the Docker Image

To build the Docker image locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the root directory of the project.
3. Run the following command to build the Docker image:

    ```bash
    docker build -t frontend_paynau .
    ```

    Replace "frontend_paynau" with the desired name for your Docker image.

## Usage

To run a container based on the built Docker image, you can use the following command:

```bash
docker run -p 8080:80 frontend_paynau
This will run a Docker container that will execute your application on port 8080 of the local host. You can change the port number if desired.

Finding the Image on Docker Hub
The Docker image of this project is available on Docker Hub. You can find it at the following link:

Your_frontend_paynau_on_Docker_Hub

Contribution
If you want to contribute to this project, please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature/new-feature).
Make your changes and commit them (git commit -am 'Add a new feature').
Push the branch (git push origin feature/new-feature).
Open a Pull Request.
````
