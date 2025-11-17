# Student_Registration_Form_React_SQL

Installation requirements:

frontend:

npm create-react-app frontend

replace the src file

backend:

npm init -y
npm install express mysql2 cors

Schema:

Database:

create database studentregdb;

Table:

create table students(
    regno int not null unique,
    name varchar(100) not null,
    email varchar(100) not null,
    department varchar(50) not null
);