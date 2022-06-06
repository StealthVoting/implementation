const validateVoter = (setButtonLoading, setMessage) => {
  setTimeout(async () => {
    setButtonLoading(false);
    setMessage("true");
  }, 1500);
};

export { validateVoter };
