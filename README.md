# Vending Machine

## Description
This project is an implementation of Vending Machine and can be used as Virtual vending machine.<br />
There are two modules -
1. Customer Module - Customer can view the current state of vending machine and purchase a Soda by providing the correct amount and quantity. By default the quantity is 1.
2. Admin Module - Admin can view the current state of the vending machine, restock any product and change price of any product.<br />
For this application the database is a JSON file named SodaCollection.json.<br />
Multiple vending machines can also be added and for each vending machine a new server needs to be used. However, all vending machines can connect to one single JSON file as database.

## Steps to get started
1. ```npm install``` Default PORT is 5001, to change PORT change PORT variable in .env file. Same should be used in API endpoints.
2. ```npm start```

## APIs
1. Admin
    1. Get Status of Vending Machine - GET http://localhost:5001/admin/getStatus/<br />
        BODY <optional> ```json
        {
            "sodaName": "Cola"
        }
        ```
    2. Restock - POST http://localhost:5001/admin/restock/
        BODY ```json
        {
            "sodaName": "Cola",
            "qty": 6
        }
        ```
        Here qty is the restock quantity and will be added to existing quantity in vending machine.
    3. Change Price - POST http://localhost:5001/admin/changePrice/
        BODY ```json
        {
            "sodaName": "Cola",
            "price": 2.0
        }
        ```
2. Customer
    1. Get Status of Vending Machine - GET http://localhost:5001/vending/getStatus/<br />
        BODY <optional> ```json
        {
            "sodaName": "Cola"
        }
        ```
    2. Purchase - POST http://localhost:5001/vending/purchased/
        BODY ```json
        {
            "sodaName": "Cola",
            "qty": 6,
            "amountPaid": 6
        }
        ```