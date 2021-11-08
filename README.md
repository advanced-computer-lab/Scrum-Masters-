# Scrum-Masters-

## Getting Started

The project has 3 **`package.json`** files in the following Tree (note: it's just a high level explanation for the main directories, the words between barckets are not real directorires/files)

```
+-- backend
|   +-- (different files and directories including the main file "app.js") 
|   +-- package.json
+-- _frontend
|   +-- (different files and directories including the main file "App.js")
|   +-- package.json
+-- package.json

```

In each directory (root,frontend,backend) containing the **`package.json`** you should write `npm i` to install all the dependencies in each file  

**`Scrum-masters-`** 

The package.json in the root directory allows running both serevrs (backend and frontend) in one terminal using the script `npm run dev` 

### Alternative 

if the previous command didn't run both servers you can do the following:
**`Scrum-masters-/backend`** 

`npm run dev`

or

`nodemon app`

Open another terminal in the following directory and write: 

**`Scrum-masters-/frontend`**

`npm start`



