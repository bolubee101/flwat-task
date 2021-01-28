let body={
    "rule": {
      "field": "5",
      "condition": "contains",
      "condition_value": "rocinante"
    },
    "data": ["The Nauvoo", "The Razorback", "The Roci", "Tycho"]
  }
let response={
    "message": "field 5 is missing from data.",
    "status": "error",
    "data": null
  }
  let status=400

module.exports.body=body;
module.exports.response=response;
module.exports.status=status;