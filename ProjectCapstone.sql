Create database ProjectCapstone;


Create table AdminLogin(
AdminId int primary key identity(1,1),
Username varchar(50) unique NOT NULL,
Password varchar(50) NOT NULL,
);

select * from AdminLogin

Delete from AdminLogin



Create table OrganizationDetails(
OrganizationId int primary key identity(1,1),
OrganizationNumber int NOT NULL,
OrganizationName varchar(50) unique NOT NULL,
OrganizationDomain varchar(50) NOT NULL,
City varchar(50) NOT NULL,
Pincode int NOT NULL,
)

select *from OrganizationDetails

Delete from OrganizationDetails



Create table EmployeeDetails(
UserId int primary key,
Username varchar(50) unique NOT NULL,
Password varchar(50) NOT NULL,
OrganizationId int foreign key references OrganizationDetails(OrganizationId) NOT NULL,
EmployeeEmail varchar(50) NOT NULL,
Gender varchar(50) NOT NULL,
DateOfBirth varchar(50) NOT NULL,
ContactNumber bigint NOT NULL,
City varchar(50) NOT NULL,
Designation varchar(50) NOT NULL,
PanNumber varchar(50) NOT NULL,
Status varchar(50) NOT NULL,
)

select * from EmployeeDetails

Delete from EmployeeDetails



Create table Questions(
QuestionId int primary key,
Question varchar(max) NOT NULL,
)

select * from Questions

Delete from Questions



Create table Answers(
AnswerId int primary key identity(1,1),
QuestionId int NOT NULL,
Answer varchar(max) NOT NULL,
)

select *from Answers

Delete from Answers



Create table EmployeeResponses(
ResponseId int primary key identity(1,1),
UserId int foreign key references EmployeeDetails(UserId) NOT NULL,
QuestionId int foreign key references Questions(QuestionId) NOT NULL,
AnswerId int foreign key references Answers(AnswerId) NOT NULL,
)

select * from EmployeeResponses

Delete from EmployeeResponses




Create table EmployeeCsv(
FileId int primary key identity(1,1), 
UploadedDate date NOT NULL,
CsvFileName text NOT NULL
)


select * from EmployeeCsv

Delete from EmployeeCsv

