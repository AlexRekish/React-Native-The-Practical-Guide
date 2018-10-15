const validate = (val, rules, connectedVal) => {
  let isValid = true;
  /* eslint-disable */
  for (const rule in rules) {
    switch (rule) {
      case 'isEmail':
        isValid = isValid && emailValidator(val);
        break;
      case 'minLength':
        isValid = isValid && minLengthValidator(val, rules[rule]);
        break;
      case 'equalTo':
        isValid = isValid && equalToValidator(val, connectedVal);
        break;
      default:
        isValid = true;
    }
  }
  return isValid;
};
/* eslint-enable */

const emailValidator = val => {
  const template = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return template.test(val);
};

const minLengthValidator = (val, minLength) => val.length >= minLength;

const equalToValidator = (val, checkValue) => val === checkValue;

export default validate;
