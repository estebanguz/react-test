import { NewReservationSchema } from "site-schemas/newReservation";
import { GuestDataSchema } from "site-schemas/guesData";
import { PaymentMethodSchema } from "site-schemas/paymentMethod";
import { ContactInfoSchema } from "site-schemas/contactInfo";

const validationHandler = ({ data, validateSchema }) => {
  const validate = validateSchema.validate(data);

  if (!validate.error) {
    return true;
  } else {
    return validate;
  }
};

export const validateComponent = ({
  step,
  getValidateData,
  getValidateGuestData,
  getValidationPaymentData,
  getValidationContactData,
}) => {
  let response = false;
  switch (step) {
    case 0:
      const validate = validationHandler({
        data: getValidateData(),
        validateSchema: NewReservationSchema,
      });

      if (validate !== true) {
        response = false;
      } else {
        response = validate;
      }
      break;

    case 1:
      const validateG = validationHandler({
        data: getValidateGuestData(),
        validateSchema: GuestDataSchema,
      });

      if (validateG !== true) {
        response = false;
      } else {
        response = validateG;
      }
      break;
    case 3:
      const validatePM = validationHandler({
        data: getValidationPaymentData(),
        validateSchema: PaymentMethodSchema,
      });

      if (validatePM !== true) {
        response = false;
      } else {
        response = validatePM;
      }
      break;
    case 4:
      console.log("Contact Info");
      const validateCI = validationHandler({
        data: getValidationContactData(),
        validateSchema: ContactInfoSchema,
      });
      if (validateCI !== true) {
        console.log(validateCI);
        response = false;
      } else {
        response = validateCI;
      }
      break;
    default:
      response = true;
      break;
  }

  console.log(response);

  return response;
};
