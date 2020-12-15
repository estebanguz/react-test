export const validationHandler = ({ data, validateSchema }) => {
  const validate = validateSchema.validate(data);

  if (!validate.error) {
    return true;
  } else {
    return validate;
  }
};
