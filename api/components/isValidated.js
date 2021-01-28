let ResponseObject = require('./responseObject');
let validation = require('./validationObject');

let validated = (reqPayload) => {
  let rule = reqPayload.rule;
  let data = reqPayload.data;
  let message = `field ${rule.field} successfully validated.`;
  let responseData = {};
  responseData['validation'] = new validation(
    false,
    rule.field,
    data[rule.field],
    rule.condition,
    rule.condition_value
  );
  return new ResponseObject(200, message, 'success', responseData);
};

let invalid = (reqPayload) => {
  let rule = reqPayload.rule;
  let data = reqPayload.data;
  let message = `field ${rule.field} failed validation.`;
  let responseData = {};
  responseData['validation'] = new validation(
    true,
    rule.field,
    data[rule.field],
    rule.condition,
    rule.condition_value
  );
  return new ResponseObject(400, message, 'error', responseData);
};
module.exports.validated = validated;
module.exports.invalid = invalid;
