export const saveFormValues = (formValues, step) => {
  if (typeof window === "undefined") return;

  localStorage.setItem("formValue", JSON.stringify({ ...formValues, step }));
};

export const retrieveFormValues = () => {
  if (typeof window === "undefined") return null;

  const value = localStorage.getItem("formValue");
  return value ? JSON.parse(value) : null;
};

export const deleteFormValues = () => {
  localStorage.removeItem("formValue");
};
