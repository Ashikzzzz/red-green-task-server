# red-green-task-server

## For server using NodeJS, expressJs, typescript,Jsonwebtoken,eslint,mongoose,prettier,zod,husky

# Local-url: http://localhost:5000

# Base url: https://red-green-task-server.vercel.app

# Auth:

# Registration: http://localhost:5000/api/v1/users/create-user

# Sample-json:

{
"email": "ex4@gmail.com",
"password": "123456"
}

# Login: http://localhost:5000/api/v1/auth/login

# Sample-json:

{
"email": "ex4@gmail.com",
"password": "123456"
}

# Refresh-token:http://localhost:5000/api/v1/auth/refresh-token

# List 👍

# Create -list : http://localhost:5000/api/v1/list/create-list

# Sample-json:

{
"title": "example56"
}

# Get all list: With pagination,filter and search , search by title :http://localhost:5000/api/v1/list/

# Get single list and delete : http://localhost:5000/api/v1/list/`id`

# Update list :http://localhost:5000/api/v1/list/update-list/`id`

# Sample-json:

{
"title":"example5000"
}

# Task 👍

# Create task :http://localhost:5000/api/v1/task/create-task

# Sample-json:

{
"title":"bye1",
"status":"done",
"list":"6548e4be745767ff980b8172"
}

# Get all list: With pagination,filter and search , search by title and filter by status: http://localhost:5000/api/v1/task/

# Get single list and delete: http://localhost:5000/api/v1/task/`id`

# Update task: http://localhost:5000/api/v1/list/update-task/`id`
