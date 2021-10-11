This product is a web example of what Aureax can provide to clients.

## Check out the Deployment Site

This project is readily available at http://13.59.141.130/

## Deployment Process

The deployment process is currently handled manually done through AWS E3, this will be changed to an automatic process at a later date

## Requirements

1. A terminal with working ssh
2. A unique private key (should look like aureax-web.pem)

If you do not have a unique private key, ask an admin to see if you have the qualifications to receive a private key.

## Step 1: SSH into the AWS instance

```sh
ssh -i "aureax-web.pem" ubuntu@ec2-13-59-141-130.us-east-2.compute.amazonaws.com
```

## Step 2: Update the current repo

```sh
cd aureax-web/
git pull origin master
```

## Step 3: Run a new build and move it to var/www

```sh
npm run build
cp -r /build/* /var/www/aureax-web
```

## Step 4: Restart nginx to update the website

```sh
sudo systemctl restart nginx
```

At this point, you have updated the website at http://13.59.141.130/

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
