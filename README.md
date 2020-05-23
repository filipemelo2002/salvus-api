<p align="center">
  <img src="https://salvus.me/img/logo-salvus.png" alt="Salvus" />
</p>

<h3 align="center">
 :herb: Salvus Technical Assessment
</h3>
<br>
<div align="center">

[![release](https://img.shields.io/github/v/release/filipemelo2002/salvus-api)](https://github.com/filipemelo2002/salvus-api/releases)<space><space>

</div>

## Overview

API coded due to the Software Development Internship vacancy at Salvus. The following documentation explains how to set it up and use this software.

## Summary

- [Getting started](#getting-started)
- [Endpoints](#endpoints)
  - [Create Patient](#post-apipatients)
  - [List Patients](#get-apipatients)
  - [Show Patient](#get-apipatientsid)
  - [Update Patient](#put-apipatientsid)
  - [Remove Patient](#delete-apipatientsid)

## Getting started

Firstly, you need to download and install [NodeJS](https://nodejs.org/en/) <br/><br/>
After it, You can easily get started by pasting the following commands in the terminal

```shell
  git clone https://github.com/filipemelo2002/salvus-api.git salvus-api
  cd salvus-api
```

Install the dependencies by typing `npm install` <br/>
Lastly, you need to run the database migrations, and in this project we are using Knex, you need to run `npx knex migrate:up` <br/>

Now, you can start the project by running `npm run dev`, which will start the server at `port 3000` by default so you can access the greeting message at `http://localhost:3000`

## Endpoints

### Request and Response format

In general, this API uses HTTP protocol to communicate and the Request and Response body are in JSON format.
<br/><br/>

### POST `/api/patients`

This route creates a new Patient<br>
**Request**
| parameter | type | description |
|-------------|--------|-------------------------------|
| name | string | patient's name |
| rg | string | patient's RG document number |
| cpf | string | Patient's CPF document number |
| mother_name | string | Patient's mother's name |
| phone | string | Contact number |
| address | string | Patient's address |

<br/>

**Response**
| parameter | type | description |
|-------------|--------|-------------------------------|
| id | int | Patient's ID |
| name | string | patient's name |
| rg | string | patient's RG document number |
| cpf | string | Patient's CPF document number |
| mother_name | string | Patient's mother's name |
| phone | string | Contact number |
| address | string | Patient's address |

### GET `/api/patients`

Returns an array with all Patients

### GET `/api/patients/:id`

Return the specified Patient's informations <br/>
**Request** URL params
| parameter | type | description |
|-----------|------|--------------|
| id | int | Patient's ID |

**Response**

| parameter   | type   | description                   |
| ----------- | ------ | ----------------------------- |
| id          | int    | Patient's ID                  |
| name        | string | patient's name                |
| rg          | string | patient's RG document number  |
| cpf         | string | Patient's CPF document number |
| mother_name | string | Patient's mother's name       |
| phone       | string | Contact number                |
| address     | string | Patient's address             |

### PUT `/api/patients/:id`

Updates the specified Patient's informations <br/>
**Request:** all parameters are optional and you can add as many as you want per request
| parameter | type | description |
|-------------|--------|-------------------------------|
| name | string | patient's name |
| rg | string | patient's RG document number |
| cpf | string | Patient's CPF document number |
| mother_name | string | Patient's mother's name |
| phone | string | Contact number |
| address | string | Patient's address |

**Response**

| parameter   | type   | description                   |
| ----------- | ------ | ----------------------------- |
| id          | int    | Patient's ID                  |
| name        | string | patient's name                |
| rg          | string | patient's RG document number  |
| cpf         | string | Patient's CPF document number |
| mother_name | string | Patient's mother's name       |
| phone       | string | Contact number                |
| address     | string | Patient's address             |

### DELETE `/api/patients/:id`

Removes the specified Patient from the database<br/>
**Request** <br/> URL params
| parameter | type | description |
|-----------|------|--------------|
| id | int | Patient's ID |

**Response:** returns `status code 201`
