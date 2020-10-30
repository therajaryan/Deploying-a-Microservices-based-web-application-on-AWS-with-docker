# Deploying-a-Microservices-based-web-application-on-AWS-with-docker
Initially we'll create a Microservices based web application using NodeJS. It would be a basic Train Ticket Booking System, with four main separate services. 
Customer Web UI: It will be the homepage of the system and would require authentication or registration to go any further. 
Tickets Catalog: After logging in the users can go to the catalog of tickets available to be bought. 
Payment Service: After selecting the ticket/s to be bought, the user will be tranferred to the payment service. 
Admin Web UI: Admin's UI would be accesible through a selectcredential only. The admin would be able to edit the total number of tickets, add more tickets, delete them and view the User Information. After developing the Web Application, we will move on to the deployment stage. Initially, we will put the Microservices into a Docker container and run unit tests using Jenkins. After successful building and testing of code, it will be pushed to the cloud environment server (AWS EC2).
