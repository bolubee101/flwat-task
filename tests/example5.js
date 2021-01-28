let body={
    "rule": {
      "condition": "gte",
      "condition_value": 30
    },
    "data": {
      "name": "James Holden",
      "crew": "Rocinante",
      "age": 34,
      "position": "Captain",
      "missions": 45
    }
  }
let response={
    "message": "The following fields are missing from the rule object: 'field'.",
    "status": "error",
    "data": null
}
  let status=400;

module.exports.body=body;
module.exports.response=response;
module.exports.status=status;