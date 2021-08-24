# Medique App Server
Medique App is an app that diagnose what sickness you're having at the moment. This app has : 
* RESTful endpoint for asset's CRUD operation
* JSON formatted responses

## API Reference

### RESTful endpoints
### POST /login

```http
  POST /login
```

#### POST Login to registered User

_Request Header_
```
not needed
```

_Request Body_
```
{
  "email": "<inputted email>",
  "password": "<inputted password>"
}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`| `string` | **Required**. email to continue |
| `password`| `string` | **Required**. password to continue |

_Request Parameter_
```
not needed
```



_Response (200 - Success Read)_
```
{
    "access_token": "<given token>"
}
```

_Response (400 - Bad Request)_
```
{
    "message": "<field> cannot be null"
}

OR

{
    "message": "Invalid Username or Email or Password!"
}
```

_Response (500 - Internal server error)_
```
{
    "message": "Internal server error"
}
```


### POST /register

```http
  POST /register
```

#### POST Register to register a User

_Request Header_
```
not needed
```

_Request Body_
```
{
  "firstName": "<inputted firstName>",
  "lastName": "<inputted lastName>",
  "gender": "<inputted gender>",
  "dateOfBirth": "<inputted dateOfBirth>",
  "email": "<inputted email>",
  "password": "<inputted password>"
}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `firstName`| `string` | **Required**. firstName to continue |
| `lastName`| `string` | lastName to continue |
| `gender`| `string` | **Required**. gender to continue |
| `dateOfBirth`| `string` | **Required**. dateOfBirth to continue |
| `email`| `string` | **Required**. email to continue |
| `password`| `string` | **Required**. password to continue |

_Request Parameter_
```
not needed
```



_Response (201 - Success Created)_
```
{
    "id": <given id by system>,
    "email": "<registered email>"
}
```

_Response (400 - Bad Request)_
```
{
    "message": "<field> cannot be null"
}

OR

{
    "message": [
        "<field> cannot be empty"
    ]
}

OR

{
    "message": "That email has already taken"
}
```

_Response (500 - Internal server error)_
```
{
    "message": "Internal server error"
}
```


### POST /user/sickness

```http
  POST /user/sickness
```

#### POST Sickness to registered User

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `access_token`| `string` | **Required**. access token to continue |


_Request Body_
```
{
    "name": "<inputted name>",
    "profName": "<inputted profName>",
    "icdName": "<inputted icdName>",
    "accuracy": <inputted accuracy>,
    "ranking": <inputted ranking>,
    "specialisation": "<inputted specialisation>"
}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`| `string` | **Required**. name to continue |
| `profName`| `string` | **Required**. profName to continue |
| `icdName`| `string` | **Required**. icdName to continue |
| `accuracy`| `string` | **Required**. accuracy to continue |
| `ranking`| `string` | **Required**. ranking to continue |
| `specialisation`| `string` | **Required**. specialisation to continue |

_Request Parameter_
```
not needed
```



_Response (201 - Success Created)_
```
{
    "id": <given by system>,
    "name": "<created name>",
    "profName": "<created profName>",
    "icdName": "<created icdName>",
    "accuracy": <created accuracy>,
    "ranking": <created ranking>,
    "specialisation": "<created specialisation>",
    "UserId": <created userId>,
    "updatedAt": "<created updatedAt date>",
    "createdAt": "<created createdAt date>"
}
```

_Response (400 - Bad Request)_
```
{
    "message": "<field> cannot be null"
}

OR

{
    "message": [
        "<field> cannot be empty"
    ]
}
```

_Response (401 - Unauthorized)_
```
{
    "message": "Invalid token!"
}

OR

{
    "message": "You are unauthorized"
}
```

_Response (500 - Internal server error)_
```
{
    "message": "Internal server error"
}
```


### GET /user/sickness

```http
  GET /user/sickness
```

#### GET Sickness to registered User

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `access_token`| `string` | **Required**. access token to continue |


_Request Body_
```
not needed
```

_Request Parameter_
```
not needed
```

_Response (200 - Success Read)_
```
{
    "id": <given by system>,
    "firstName": "<user's first name>",
    "lastName": "<user's last name>",
    "gender": "<user's gender>",
    "dateOfBirth": "<user's date of birth>",
    "email": "<user's email>",
    "createdAt": "<user's createdAt>",
    "updatedAt": "<user's updatedAt>",
    "Sicknesses": [
        {
            "id": <sickness Id>,
            "name": "<sickness name>",
            "profName": "<sickness profName>",
            "icdName": "<sickness icdname>",
            "accuracy": <sickness accuracy>,
            "ranking": <sickness ranking>,
            "specialisation": "<sickness specialisation>",
            "UserId": <sickness UserId>,
            "createdAt": "<sickness createdAt>",
            "updatedAt": "<sickness updatedAt>"
        },
        ...
    ]
}
```

_Response (401 - Unauthorized)_
```
{
    "message": "Invalid token!"
}

OR

{
    "message": "You are unauthorized"
}
```

_Response (500 - Internal server error)_
```
{
    "message": "Internal server error"
}
```

