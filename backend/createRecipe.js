// backend/createRecipe.js
const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB.DocumentClient();
const s3 = new AWS.S3();

exports.handler = async (event) => {
  try {
    const { title, ingredients, instructions, image, userId } = JSON.parse(
      event.body
    );

    // Generate unique ID for the recipe
    const recipeId = `recipe_${Date.now()}`;

    // Store recipe data in DynamoDB
    const recipe = {
      id: recipeId,
      userId,
      title,
      ingredients,
      instructions,
      createdAt: new Date().toISOString(),
    };

    await dynamodb
      .put({
        TableName: process.env.RECIPES_TABLE,
        Item: recipe,
      })
      .promise();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify(recipe),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({ error: error.message }),
    };
  }
};
