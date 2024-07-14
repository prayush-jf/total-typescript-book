const acceptsCallback = (callback: () => undefined | string) => {
  callback();
};

const returnString = () => {
  return "Hello!";
};

acceptsCallback(returnString);
