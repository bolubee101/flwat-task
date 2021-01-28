let body={
    "rule": {
      "field": "missions",
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
    "message": "field missions successfully validated.",
    "status": "success",
    "data": {
      "validation": {
        "error": false,
        "field": "missions",
        "field_value": 45,
        "condition": "gte",
        "condition_value": 30
      }
    }
  }
  let status=200;

module.exports.body=body;
module.exports.response=response;
module.exports.status=status;