// validate that input called 'positionTitle' has the following pattern [A-Za-z\s\-]{7,}
function validatePositionTitle(positionTitle) {
    const pattern = /^[A-Za-z\s\-]{7,}$/;
  return pattern.test(positionTitle);
}