// @flow
const isProduction: boolean = process.env.NODE_ENV === 'production';
const prefix: string = 'Invariant failed';

// Throw an error if the condition fails
// Strip out error messages for production
// > Not providing an inline default argument for message as the result is smaller
export default (condition: mixed, message?: string) => {
  if (condition) {
    return;
  }

  // Condition not passed

  if (isProduction) {
    // In production we strip the message but still throw
    throw new Error(prefix);
  }

  if (!isProduction) {
    // In other environments we throw with the message
    throw new Error(`${prefix}: ${message || ''}`);
  }
};
