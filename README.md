# fast-start-js

Quickly start a JavaScript POC

# How to use it

### Clone the project

```
git clone https://github.com/agape-mou/fast-start-js.git
```

### Since all of the commits history are in the `.git` folder, we have to remove it:

```
cd fast-start-js
git rm -rf .git
```

### Now, re-initialize the repository:

```
git init
git remote add origin <YOUR_ORIGIN>
git remote -v
```

### Add all the files and commit the changes:

```
git add --all
git commit -am "Initial commit"
```

### Force push update to the master branch of our project repository:

```
git push -f origin main
```
