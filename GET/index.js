'use strict';

//  READ

const PeopleModel = require('./people.schema.js');
const dynamoose = require('dynamoose');

exports.handler = async (event) => {

  console.log('__EVENT__:', event);
  
  let data;

  if (event.pathParameters) {
     let list = await PeopleModel.query('id').eq(event.pathParameters.id).exec();
     data = list[0];
  } else {
    data = await PeopleModel.scan().exec();
  }

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}

