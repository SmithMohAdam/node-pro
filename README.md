# node-pro
Nodejs Project
##Discription 

This is project contain crud opration to create,update,return One ,return all , and delete customer object

#routes 

##/customer 
This is POST method to create new customer it takes request as folow
localhost:3000//customer
{
"name":"Mohammed",
"email":"mohammed@gmail.com"
}

##/customers
THis is GET method to return all the customer in the database
localhost:3000//customers

##/customer
This is GET method it takes email as query parameter to return the customer 
localhost:3000/customer?email=mohammed@gmail.com

##/customer
This is PUT method to search for customer by query email and make an update
localhost:3000/customer?email=mohammed
{
  "name":"Updated Name"
}

##/customer
This is delete method you can delete customer by pathing email as query parameter
localhost:3000/customer?email=mohammed@gmail.com

