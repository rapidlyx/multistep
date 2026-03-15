export const isEmpty = (value) => !value.trim();

export const isMail = (mail) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
export const isPhoneNum = (number) => /^\+?\d{8}$/.test(number);
