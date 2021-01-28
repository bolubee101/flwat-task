class validation {
  constructor(error, field, field_value, condition, condition_value) {
    this.error = error;
    this.field = field;
    this.field_value = field_value;
    this.condition = condition;
    this.condition_value = condition_value;
  }
}

module.exports = validation;
