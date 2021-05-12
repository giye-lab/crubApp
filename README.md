# crubApp
Learning Nodejs in the Zuri program
The crudApp implements the CRUD operation which are Create, Read, Update and Delete.

### The app contains four routes

## The Get Route
#### End point path: "/users"
#### Operation: GET Method
#### Resource: User model
    This route retrieves a list of JSONPlaceholder users data on the database with a successful message.
    It can be used to populate users.

## POST Route
#### End point path: "/users"
#### Operation: POST Method
#### Resource: user data 
    {
        "user":{
            "name":"@name",
            "email":"@email",
            "country":"@country"
        }
    }
    This route creates a new  JSONPlaceholder user data on the database with the parameters given.
    
## PUT Route
#### End point path: "/users/:id"
#### Operation: PUT Method
#### Resource: user id
        {
            "name":"@name",
            "email":"@email",
            "country":"@country"
        }
    This route updates a user data corresponding to the user id parameter. 
    It can be used update data of the user.


## DELETE Route
#### End point path: "/users/:id"
#### Operation: Delete Method
#### Resource: user id
    This route deletes the user with the corresponding user id on the database.

