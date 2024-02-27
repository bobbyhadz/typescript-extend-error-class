export {};

// EXAMPLE 1 - Create a custom Class that extends from Error in TypeScript

export class CustomError extends Error {
  statusCode = 400;

  constructor(message: string) {
    super(message);

    // 👇️ because we are extending a built-in class
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  getErrorMessage() {
    return 'Something went wrong: ' + this.message;
  }
}

const err = new CustomError('Failed to fetch');

// 👇️ "Failed to fetch"
console.log(err.message);

console.log(err.statusCode); // 👉️ 400

// 👇️ "Something went wrong: Failed to fetch"
console.log(err.getErrorMessage());

// ✅ Use type guard to be able to access properties/methods
if (err instanceof CustomError) {
  console.log(err.statusCode); // 👉️ 400

  // 👇️ "Something went wrong: Failed to fetch"
  console.log(err.getErrorMessage());
}

// ---------------------------------------------------

// // EXAMPLE 2 - Checking if a variable is an instance of `CustomError`

// export class CustomError extends Error {
//   statusCode = 400;

//   constructor(message: string) {
//     super(message);

//     // 👇️ because we are extending a built-in class
//     Object.setPrototypeOf(this, CustomError.prototype);
//   }

//   getErrorMessage() {
//     return 'Something went wrong: ' + this.message;
//   }
// }

// const err = new CustomError('Failed to fetch');

// // ✅ Check if instance of CustomError
// if (err instanceof CustomError) {
//   console.log(err.statusCode);

//   console.log(err.getErrorMessage());
// }
