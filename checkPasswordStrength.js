function passwordStrength(password) {
  const hasDigit = /\d/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasSpecial = /[^a-zA-Z0-9]/.test(password);

  if (
    password.length >= 8 &&
    hasDigit &&
    hasLower &&
    hasUpper &&
    hasSpecial
  ) {
    return "Strong";
  }

  if (
    password.length >= 6 &&
    hasDigit &&
    (hasLower || hasUpper)
  ) {
    return "Medium";
  }

  return "Weak";
}
console.log(passwordStrength("75+hjFt6"))
console.log(passwordStrength("75+hFt6"))
console.log(passwordStrength("aashu"))
