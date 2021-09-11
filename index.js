'use strict';

const PeopleModel = require('./people.schema.js');

exports.handler = async (event) => {

  console.log('__EVENT__:', event);
  
  let data = await PeopleModel.scan().exec();

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}

