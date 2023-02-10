export const clearInputs = () => {
  setTimeout(() => {
    document.getElementById("position").value = ''
    document.getElementById("numcontracts").value = ''
    document.getElementById("strategy").value = ''
    document.getElementById("datebtosto").value = ''
    document.getElementById("datebtcstc").value = ''
  }, 0);
};

export const validateInputs = () => {
  return document.getElementById("position").value && document.getElementById("numcontracts").value && document.getElementById("strategy").value && document.getElementById("datebtosto").value && document.getElementById("datebtcstc").value;
};