export default function validateUsername(username) {
  return (/^[A-Za-z]([-\w]*[A-Za-z])?$/.test(username) && !/\d{4}/.test(username));
}
