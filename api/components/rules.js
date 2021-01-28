const { validated, invalid } = require('./isValidated');

let rules = (reqPayload) => {
  let rule = reqPayload.rule;
  let data = reqPayload.data;
  if (rule.condition === 'eq') {
    if (rule.condition_value === data[rule.field]) {
      return validated(reqPayload);
    } else {
      return invalid(reqPayload);
    }
  }
  if (rule.condition === 'neq') {
    if (rule.condition_value !== data[rule.field]) {
      return validated(reqPayload);
    } else {
      return invalid(reqPayload);
    }
  }
  if (rule.condition === 'gte') {
    if (data[rule.field] >= rule.condition_value) {
      return validated(reqPayload);
    } else {
      return invalid(reqPayload);
    }
  }
  if (rule.condition === 'contains') {
    if (data[rule.field].includes(rule.condition_value)) {
      return validated(reqPayload);
    } else {
      return invalid(reqPayload);
    }
  }
};
module.exports = rules;
