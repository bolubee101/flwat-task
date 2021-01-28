const rules = require('./rules');
const ResponseObject = require('./responseObject');

let validator = (reqPayload) => {
  // Invalid json handler independent of express.
  if (typeof reqPayload !== 'object') {
    let message = 'Invalid JSON payload passed.';
    return new ResponseObject(400, message, 'error', null);
  }
  let rule = reqPayload.rule;
  let data = reqPayload.data;
  // Missing rule or data field or invalid data types
  if (!rule && !data) {
    let message = 'rule and data are required.';
    return new ResponseObject(400, message, 'error', null);
  } else if (!rule) {
    let message = 'rule is required.';
    return new ResponseObject(400, message, 'error', null);
  } else if (!data) {
    let message = 'data is required.';
    return new ResponseObject(400, message, 'error', null);
  } else if (typeof rule !== 'object') {
    let message = 'rule should be an object.';
    return new ResponseObject(400, message, 'error', null);
  } else if (typeof data !== 'object' && typeof data !== 'string') {
    let message = 'data should be an object an array or a string.';
    return new ResponseObject(400, message, 'error', null);
  }
  // field missing from rule object
  let missing = 'The following fields are missing from the rule object:';
  let marr = [];
  if (!rule['field']) {
    missing += " 'field'";
    marr.push('field');
  }
  if (!rule['condition']) {
    missing += " 'condition'";
  }
  if (!rule['condition_value']) {
    missing += " 'condition_value'";
  }
if(marr.length!==0){
  return new ResponseObject(400, missing+".", 'error', null);
}
  // field missing from data object
  else if (!data[rule.field]) {
    let message = `field ${rule.field} is missing from data.`;
    return new ResponseObject(400, message, 'error', null);
  } else {
    // Returns the response object after applying rules to data
    return rules(reqPayload);
  }
};

module.exports = validator;
