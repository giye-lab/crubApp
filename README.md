# crubApp
Learning Nodejs in the Zuri program
The crudApp implements the CRUD operation which are Create, Read, Update and Delete.

Hosted link --
## [https://zuri-crud-app-3.herokuapp.com/](https://zuri-crud-app-3.herokuapp.com/)

### API End Points

### HTTP Verb: GET
### End point: "/users"
### Operation: GET Method
### Resource: User model
    To retrieves a list of JSONPlaceholder users data on the database with a successful message.

### HTTP Verb: POST
### End point: "/users"
### Operation: POST Method
### Resource: user data

    ```
    {
        "user":{
            "name":"@name",
            "email":"@email",
            "country":"@country"
        }
    }
    ```
    To route creates a new  JSONPlaceholder user data on the database with the parameters given


### HTTP Verb: PUT
### End point: "/users/:id"
### Operation: PUT Method
### Resource:  user id
    ```
    {
            "name":"@name",
            "email":"@email",
            "country":"@country"
        }
    ```
    To updates a user data corresponding to the user id parameter. 
    
### HTTP Verb: DELETE
### End point: "/users/:id"
### Operation: Delete Method
### Resource:  user id
    This route deletes the user with the corresponding user id on the database.

