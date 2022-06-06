const validateVoter = (setIsLoading, setMessage, setData) => {
  setTimeout(async () => {
    setIsLoading(false);
    setMessage("true");
    setData("Something useless");
  }, 1500);
};

export { validateVoter };
