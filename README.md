# Vending Machine

## Description
This project is an implementation of Vending Machine and can be used as Virtual vending machine.<br />
There are two modules -
1. Customer Module - Customer can view the current state of vending machine and purchase a Soda by providing the correct amount and quantity. By default the quantity is 1.
2. Admin Module - Admin can view the current state of the vending machine, restock any product and change price of any product.


For this application the database is a JSON file named SodaCollection.json.<br />
Multiple vending machines can also be added and for each vending machine a new server needs to be used. However, all vending machines can connect to one single JSON file as database.<br />
<br />


A working UI is built for showing the use of APIs. The front-end is built using React, Bootstrap 4, CSS and HTML.

## Steps to get started
1. In the root folder a start-script.sh file is provided which starts both the backend on PORT 5001 and front end on PORT 3000. An alternate way to do is run the command <br />
```npm install && cd views && npm install && cd .. && npm run dev```<br />
 Default PORT is 5001, to change PORT change PORT variable in .env file. Same should be used in API endpoints. 
2. If the PORT for backend is changed then the same should be used for - 
    1. ROOT variable in {root}/.env file
    2. REACT_APP_URL variable in {root}/views/.env file
    3. "proxy" element in {root}/views/package.json file.


## UI
1. The default is the vending machine UI. Click on the amount and then make a selection of product. The product can be collected via a JSON file download. Don't forget to collect any change.
2. The lock on top right corner of the machine helps opening the machine and this can be used by admin staff to restock items, change price of items, add new items, delete items. Don't forget to close the lock.<br />
```Good keys can open many locks, but bad locks can be opened by any key.```
Taking hint from this statement further work can be to build a security mechanism for the admin.


## APIs
1. Admin
    1. Get Status of Vending Machine - GET http://localhost:5001/admin/getStatus/<br />
        BODY [optional]
        ```json
        {
            "sodaName": "Cola"
        }
        ```
    2. Change Stock - POST http://localhost:5001/admin/changeStock/<br />

        BODY
        ```json
        {
            "sodaName": "Cola",
            "qty": 6
        }
        ```
        Here qty is the restock quantity and will be added to existing quantity in vending machine.
    3. Change Price - POST http://localhost:5001/admin/changePrice/<br />

        BODY
        ```json
        {
            "sodaName": "Cola",
            "price": 2.0
        }
        ```
    4. Bulk edit inventory - POST http://localhost:5001/admin/updateInventory/<br />

        BODY
        ```json
        [
            {
                "sodaName": "Cola",
                "qty": 6,
                "price": 1
            },
            {
                "sodaName": "Cola",
                "qty": 6,
                "price": 1
            },
            {
                "sodaName": "Cola",
                "qty": 6,
                "price": 1
            }
        ]
        ```
    5. Delete Soda - POST http://localhost/admin/deleteSoda/<br />
        BODY
        ```json
        {
            "sodaName": "Cola"
        }
        ```
2. Customer
    1. Get Status of Vending Machine - GET http://localhost:5001/vending/getStatus/<br />
        BODY [optional]
        ```json
        {
            "sodaName": "Cola"
        }
        ```
    2. Purchase - POST http://localhost:5001/vending/purchased/<br />

        BODY
        ```json
        {
            "sodaName": "Cola",
            "qty": 6,
            "amountPaid": 6
        }
        ```