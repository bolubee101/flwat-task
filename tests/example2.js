let body={
    "rule": {
      "field": "0",
      "condition": "eq",
      "condition_value": "a"
    },
    "data": "damien-marley"
  }
let response={
    "message": "field 0 failed validation.",
    "status": "error",
    "data": {
      "validation": {
        "error": true,
        "field": "0",
        "field_value": "d",
        "condition": "eq",
        "condition_value": "a"
      }
    }
  }
  let status=400

module.exports.body=body;
module.exports.response=response;
module.exports.status=status;