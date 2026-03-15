import { useEffect } from "react";
import { Header } from "./Header";
import { Button } from "./Button";
import { PrivateInput } from "./PrivateInput";
import { animation } from "../constant/animation";
import { motion } from "framer-motion";
import { validatorStepTwo } from "@/utils/Validators";
import { saveFormValues } from "@/utils/localeStorage";

export const PrivateInfo = ({
  handlePrevios,
  handleClick,
  handleChange,
  formErrors,
  formValues,
  setFormErrors,
  setStep,
  step,
}) => {
  const handleSubmitTwo = () => {
    const { secondError, secondIsValid } = validatorStepTwo(formValues);
    setFormErrors(secondError);
    if (secondIsValid) {
      handleClick();
      saveFormValues(formValues, step);
    }
  };

  return (
    <motion.div
      key="b"
      animate="active"
      exit="exit"
      initial="enter"
      variants={animation}
      className="flex flex-col gap-20.5 bg-white p-8 rounded-2xl"
    >
      <div className="flex flex-col gap-7">
        <Header />
        <PrivateInput
          handleChange={handleChange}
          formErrors={formErrors}
          formValues={formValues}
        />
      </div>

      <Button
        handlePrevios={handlePrevios}
        handleClick={handleSubmitTwo}
        step={step + 1}
        setStep={setStep}
      />
    </motion.div>
  );
};
