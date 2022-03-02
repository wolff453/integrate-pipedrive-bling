# Integration of Pipedrive with Bling

## Points to implement:

#### - 100% Coverage
#### - Insert credentials in AWS SSM Parameter store
#### - Create a Dockerfile
#### - Create a Jenkins CI/CD to build the application
#### - Add SonarScanner to detect all code smells inside of code
#### - Create a pagination in GET route

### This project consists to pass Pipedrive deals to Bling

## To run the project, use this environment variables:
## To make it easier, I left the connection string public along with the collection and the database, just put your credentials


```shell
PIPEDRIVE_API_TOKEN=your_pipedrive_token
PIPEDRIVE_BASE_API_URL=your_url/api/v1/deals/?api_token=
PIPEDRIVE_BASE_API_URL2=your_url/api/v1/deals/
PIPEDRIVE_BASE_API_PRODUCTS_URL=your_url/api/v1/products/
BLING_API_TOKEN=your_bling_token
BLING_BASE_API_URL=https://bling.com.br/Api/v2/pedido/json/?apikey=
MONGO_CONNECTION_STRING=mongodb+srv://linkapi:linkapi@cluster0.hzbvf.mongodb.net/test
MONGO_COLLECTION_NAME=deals
MONGO_DATABASE_NAME=linkapi
```

# To run the project, follow the steps bellow:

## Step 1:

```shell
git clone https://github.com/wolff453/integrate-pipedrive-bling.git
```

## Step 2:

```shell
cd integrate-pipedrive-bling
```

## Step 3:

```shell
npm ci
```

## Step 4:

```shell
npm start
```

# Routes 

## GET route to list all deals 

```shell
http:localhost:3000/deals
```
![result](docs/get.png)

## Post route to insert deals in Bling

```shell
http:localhost:3000/insert/deals
```

## This is the message when POST occurs ok:
![message](docs/post-message.png)
