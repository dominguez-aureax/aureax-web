This product is a web example of what Aureax can provide to clients.

## Check out the Deployment Site

This project is readily available at http://13.59.141.130/

## Deployment Process

The deployment process is currently handled manually done through AWS E3, this will be changed to an automatic process at a later date.

# Run the Web Application Locally

## Requirements

1. Node.js
2. npm
3. Nginx

## Step 1: Clone the project

```sh
git clone https://github.com/dominguez-aureax/aureax-web
cd aureax-web/
```

## Step 2: Install NPM dependencies

```sh
npm i
```

### Step 3: Build and run dev

```
npm run build
npm start
```

This starts up the local website on http://localhost:3000. As you make changes, the site will automatically refresh as long as the dev is still running.
