# 🍔 Food truck

## Pre-requesites and Dependencies
1. NodeJS and NPM
2. python3+ & PIP

## Instructions on How to run

- Download or Clone this repo
- Move into the downloaded directory
  ```
  cd <your-dir>
  ```

1. ### Frontend app
    Follow these instruction to run app
  - Move into the `frontend` directory
    ```
    cd frontend
    ```
  - Run following commands
    ```
    npm install
    npm start
    ```
  - Frontend app should be accessible at `http://localhost:3000/`

2. ### Backend app
    Follow these instructions to successfully run app
  - Move into `backend` dir
    ```
    cd ../backend
    ```
  - Initialize virtualenv
    > If you donot already have `virtualenv` package, install it
    > ```
    > pip install virtualenv
    > ``` 
    >

    ```
    virtualenv <your-venv-name>
    ```
    Instantiate your virtualenv
    - For MacOS, Linux OS
      ```
      source ./<your-venv-name>/bin/activate
      ```
    - For Windows 10+ OS
      ```
      .\<your-venv-name>\Scripts\activate
      ```
    If above throws error, please refer [Here](https://virtualenv.pypa.io/en/latest/user_guide.html).

  - Now, install the dependencies
    ```
    pip install -r requirements.txt
    ```
  - Move to `app` dir
    ```
    cd app
    ```
  - Run Migrations and Seed data
    > **Note :**
    > I've setup a system that will use migration script to populate seed data into `FoodTruck` model
    ```
    python3 manage.py migrate
    ```
  - Create an admin user
    > Add password and email if asked
    ```
    python3 manage.py createsuperuser --username <your-username>
    ```
    This is a superuser, you can access the Web-API interface to alter data
  - Run django application using below commands
    ```
    python3 manage.py runserver
    ```
  - Access the app at `http://localhost:8000/`

## use the Frontend App to fetch 5 food carts near you

----

# Connect with Me
- Portfolio: [https://itsyeshu.me](https://itsyeshu.me)
- LinkedIn: [linkedin@itsyeshu](https://linkedin.com/in/itsyeshu)
- Leetcode: [leetcode@itsyeshu](https://leetcode.com/itsyeshu)
Feel free to explore my repositories and get in touch!