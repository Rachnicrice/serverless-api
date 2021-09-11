'use strict';

//  READ

const PeopleModel = require('./people.schema.js');
const dynamoose = require('dynamoose');

exports.handler = async (event) => {

  console.log('__EVENT__:', event);
  
  let data = await PeopleModel.scan().exec();

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}

