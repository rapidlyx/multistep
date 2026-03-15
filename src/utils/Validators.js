import { isEmpty } from "./validationUtils";
import { isMail } from "./validationUtils";
import { isPhoneNum } from "./validationUtils";

export const validatorStepOne = (formValues) => {
  const errors = {};

  if (isEmpty(formValues.firstName)) {
    errors.firstName = "Please enter your first name.";
  }

  if (isEmpty(formValues.lastName)) {
    errors.lastName = "Please enter your last name.";
  }

  if (isEmpty(formValues.userName)) {
    errors.userName = "Please enter a username.";
  }

  const isValid = Object.keys(errors).length === 0;

  return { errors, isValid };
};

export const validatorStepTwo = (formValues) => {
  const secondError = {};
  const checkSpecial = "!@#$%^&*()_+-=[]{}|;:',.<>/?";

  if (!isEmpty(formValues.email)) {
    if (!isMail(formValues.email)) {
      secondError.email = "Please enter a valid email address.";
    }
  } else {
    if (isEmpty(formValues.email)) {
      secondError.email = "Email address cannot be empty.";
    }
  }
  if (isEmpty(formValues.phoneNumber)) {
    secondError.phoneNumber = "Phone number cannot be empty.";
  } else if (formValues.phoneNumber.length < 8) {
    secondError.phoneNumber = "Phone number must be at least 8 digits long.";
  } else if (!isPhoneNum(formValues.phoneNumber)) {
    secondError.phoneNumber = "Please enter a valid phone number.";
  }

  if (isEmpty(formValues.password) || isEmpty(formValues.comfirmPassword)) {
    secondError.password = "Password fields cannot be empty.";
  } else if (formValues.password.length < 8) {
    secondError.password = "Password must be at least 8 characters long.";
  } else if (
    !checkSpecial.split("").some((char) => formValues.password.includes(char))
  ) {
    secondError.password =
      "Password must contain at least one special character.";
  } else if (formValues.password !== formValues.comfirmPassword) {
    secondError.comfirmPassword = "Passwords do not match.";
  }

  const secondIsValid = Object.keys(secondError).length === 0;

  return { secondError, secondIsValid };
};

export const validatorStepThree = (formValues) => {
  const thirdError = {};

  if (isEmpty(formValues.date)) {
    thirdError.date = "Please select your date of birth.";
  } else {
    const currentDate = new Date();
    const birthDate = new Date(formValues.date);

    if (currentDate < birthDate) {
      thirdError.date = "Bro you cant birth future LOL";
    } else {
      let ageCheck = currentDate.getFullYear() - birthDate.getFullYear();

      if (ageCheck < 18) {
        thirdError.date = "You must be at least 18 years old.";
      }
    }
  }

  if (isEmpty(formValues.profileImage)) {
    thirdError.profileImage = "Please upload a profile picture.";
  }

  const thirdIsValid = Object.keys(thirdError).length === 0;

  return { thirdError, thirdIsValid };
};
