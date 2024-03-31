import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "Pichaga123";
const yourPassword = "123";
const yourAPIKey = "34809105-3d71-41d6-a2c4-289a8e8e8977";
const yourBearerToken = "07e6c4ab-e29a-4fd3-9574-d1f8e81b5735";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  const response = await axios.get(`${API_URL}random`);
  const content = JSON.stringify(response.data);
  res.render("index.ejs", { content })
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
});

app.get("/basicAuth", async (req, res) => {
  const response = await axios.get(`${API_URL}all?page=2`, {
    auth: {
      username: yourUsername,
      password: yourPassword
    },
  });
  const content = JSON.stringify(response.data)

  res.render("index.ejs", { content });


  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
});

app.get("/apiKey", async (req, res) => {
  const response = await axios.get(`${API_URL}filter?score=5&apiKey=${yourAPIKey}`);
  const content = JSON.stringify(response.data);

  res.render("index.ejs", { content });
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
});

app.get("/bearerToken", async (req, res) => {
  const response = await axios.get(`${API_URL}secrets/42`, {
    headers: {
      Authorization: `Bearer ${yourBearerToken}`
    },
  });

  const content = JSON.stringify(response.data);
  res.render("index.ejs", { content });
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
