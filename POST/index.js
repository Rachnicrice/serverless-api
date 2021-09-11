'use strict';

// CREATE

const PeopleModel = require('./people.schema.js');
const dynamoose = require('dynamoose');
const uuid = require('uuid').v4;

exports.handler = async (event) => {

  console.log('__EVENT__:', event);
  
  const { name } = JSON.parse(event.body);
  const id = uuid();

  const record = new PeopleModel({id, name});
  const data = await record.save();

  return {
    statusCode: 201,
    body: JSON.stringify(data)
  }
}

