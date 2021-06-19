# Buutti Books task app

This is a singe-page app where user can add, delete, edit and create books .
The application is based on react(frontend) and express js(backend). The database is mysql

To start the application on the `localhost` you need to have running `mysql` server on port `3306` that has `root` user with `root` password and `books` database. If you want to specify your own server and database you can set .env files with the following parameters:

Frontend: `REACT_APP_API_URL`(the url of the API)
Backend: `PORT` `HOST` `USER` `PASSWORD` `DATABASE` (database credentials) 

You can also try online version of the application here: https://buuttitask.netlify.app/

The commands to start the `localhost` application version: 
```sh
git clone https://github.com/kisl55a/buutti_task_fullstack.git
cd /buutti_task_fullstack
npm i
npm run dev
```