# Terrific To do list app

This is a demo application for a to do list. 

---

## Table of Contents 

1. [Installation](#installation)
2. [Usage](#usage)

---

## Installation

### Prerequisites

- This project requires docker in order to run

### Installation Steps

1. Clone the repository:  
   `git clone https://github.com/yourusername/project-name.git`

2. Add the .env file in the frontend and copy it's content:

   VITE_API_DEV_URL=http://localhost:3000
  
4. Add the .env file in the backend and copy it's content:

  CONNECTION_STRING=mongodb://mongo:27017/terrific
  CORS_URL=http://localhost:5173
  PORT=3000
   
5. Run the command `docker-compose up --build`

---

## Usage

![image](https://github.com/user-attachments/assets/5dbe49ef-9f76-4726-88a9-db9c24fa588c)

This to-do list has elementally 4 operations:

- Adding: To create a to do we just have to type a name and click the "add" button.

![image](https://github.com/user-attachments/assets/43e7cc8a-ca8b-4eb5-be5f-e5e00392e30b)

- Updating: To update a to do we need to click on the "update button" change the text, and then click to the "add" button will change to "update", we click it, and then the to do is changed.

![image](https://github.com/user-attachments/assets/37a91cd4-d20d-4ee3-b00c-6fa0644859ae)

- Deleting: To delete an object we just click the delete button, and the to do will be deleted.

- Done: We only need to check the checkbox of one single task and it will be automatically saved.
