let body={
    "data": {
      "name": "James Holden",
      "crew": "Rocinante",
      "age": 34,
      "position": "Captain",
      "missions": 45
    }
  }
let response={
    "message": "rule is required.",
    "status": "error",
    "data": null
  }
  let status=400;

module.exports.body=body;
module.exports.response=response;
module.exports.status=status;