# Project Name

Adopta2.

## Description

Web Application (administration panel) to manage the members, documentation and different issues necessaries about a Adoption Association.
 

## User Stories

-  **404:** As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault. 
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault.
- **login** - As a user I want to be able to log in on the admin panel control with different roles and different access to the data.
- **logout** - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account.
- **member list** - As a user I want to see all the members available so that I can choose which ones I want to access.
- **search member** As a user I want to search members using some fields.
- **create member** As a user I want to create new members and save their data.
- **read member** As a user i want to read member information.
- **edit member** As a user I want to edit members information, so i can modify them.
- **delete/disable member** As a user I want to delete/disable a member.  
-  **user list** As a Adminitrator User I want to see all the users available so that I can choose which ones I want to access.
- **search user** As a Adminitrator User I want to search users using some fields.
- **create user** As a Adminitrator User I want to create new users and save their data.
- **read user** As a Adminitrator User I want to read user information.
- **edit user** As a Adminitrator User I want to edit users information, so i can modify them.
- **delete/disable user** As a Adminitrator User I want to delete/disable a user.
- **create certificate** - As a user I want create a member  certificate (document) with a specific date and downloaded.
- **upload member documents** - As a user I want to upload member documents.
- **modify member documents** - As a user I want to modify uploaded member documents.
- **delete member documents** - As a user I want to delete uploaded member documents.
- **report member list** As a user I want to see all the members available, create an report (document) and download it.
- **profile** - As a user I want to check my profile and edit it.

## Backlog

- Create a certificate with the current charges with today's date.
- Create documentation for Assemblies (with members):
  - Minutes (actas)
  - Announcements (documents)
  - Other documentation.
  - Ordinary/Extraordinary assemblies
- Create documentation for Meetings-Boards (Juntas) (without members):
  - Minutes (actas)
  - Announcements (documents)
  - Other documentation.
  - Ordinary/Extraordinary assemblies
- Create a final documentation for Assemblies/Meetings-Boards.
- Event management:
  - CRUD Events (report members sending an email, assistance report )
  - Create a new kind of user only for control the events.

  
# Client

## Routes

- / - Homepage   - Login form. 
- /auth/login - Login form. 

- /members - show members list.
- /members/new  - create new member.
- /members/:id - show member detail. 
- /members/:id/edit - edit member detail. Here we can use a checkbox to mark it as "deleted".
- /members/deleted - show members marked as "deleted"

- /users - show users list.
- /users/new  - create new user.
- /users/:id - show user detail. 
- /users/:id/edit - edit user detail. Here we can use a checkbox to mark it as "deleted".
- /users/deleted - show users marked as "deleted"

- /profile  -  Shows user profile. 
- /profile/edit  -  Edit profile.<> 
- 404

## Pages

- Home Page  (Shows Sign In / Log In options)
- Log in Page 

- Show Main Page with different options

- Show List members Page
- Detail member Page (edit and delete options)
- Create member Page

- Main Administrator page
- Show list Users page
- Detail User Page (edit and delete options)
- Create user page
- 

- My Profile User Page (with Edit Options)

- 404 Page 
- 500 Page

## Components

- ...........
  - Props:
  - State:
- Search component
  - Props:
  - State:

## IO


## Services

- Auth Service
  - auth.login(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous
- members Service
  - members.list()
  - members.create(data)
  - members.detail(id)
- Users Service
  - users.list()
  - users.create(data)
  - users.detail(id)
- Profile Service

# Server

## Models

User model

```
username - String // required & unique
email - String // required & unique
password - String // required
level - Number
favorites - [ObjectID<Speeches>]
```

member model

```

owner - ObjectID<User> // required
membershipId - String // required & unique
isMember - Boolean
vinculaliaDateUse - Date
lopd - Boolean
paymentMethod - String
lastPaymentDate - Date
lastPayment - Date

monoparental - Boolean
nif1 - String
name1 - String
lastName1 - String
knowsWUpGroup1 - Boolean
isInWUoGroup1 - Boolean
userArea1 - String
telephone1 - Number
managementPosition1 - String
email1 - String

nif2 - String
name2 - String
lastName2 - String
knowsWUpGroup2 - Boolean
isInWUoGroup2 - Boolean
userArea2 - String
telephone2 - Number
managementPosition2 - String
email2 - String


iban - String
address - String
city - String
county - String
zip - string
event - String
sepaSignDate - Date
others- String

```
Events Model
```
name - String
date - Date
assistants - Array of members
other - String

```

Actas/asambleas
```

```


## API Endpoints/Backend Routes

**Auth**
- GET /auth/me
- POST /auth/login
  - body:
    - username
    - password
- POST /auth/logout
  - body: (empty)

**members**
Depending of the user access level, it will show more or less options.
- GET /members                     Show a list of members 
- POST /members                    Create a member.
- GET /members/:id                 Show member detail.  
- PUT /members/:id                 Edit a member information. 
- DELETE /members/:id              Delete a member information.

**users**
Only Administrator can access this section.
- GET /users                     Show users.  
- POST /users                    Create users. 
- GET /users/:id                 Detail user. 
- PUT /users/:id                 Edit a user. 
- DELETE /users/:id              Delete user.

**events**
Only Some users can access this section.
- GET /events                     Show events.  
- POST /events                    Create events. 
- GET /events/:id                 Detail event. 
- PUT /events/:id                 Edit a event. 
- DELETE /events/:id              Delete event.


### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/esaujc/adopta2fe)
[Server repository Link](https://github.com/esaujc/adopta2be)

[Deploy Link]()
