const clickCounterHandler = (clickEvent) => {
  console.log();
  // if (clickEvent.detail > 0) {
    let num = Number(clickEvent.target.dataset.clicks);
    num += 1;
    clickEvent.target.dataset.clicks = num;
    num === 1 ? clickEvent.target.textContent = "I've been clicked 1 time." : clickEvent.target.textContent = `I've been clicked ${num} times!`;
  // }
};

const keyP = document.getElementById("keydown-tracker");
const handleKeydown = (keyEvent) => {
  if (keyEvent.key === " ") keyP.textContent = `You pressed Space`
  else if (keyEvent.key === "Enter") keyP.textContent = `You pressed Enter`;
  else keyP.textContent = `You pressed ${keyEvent.code}`;
};

const handleDelegation = (event) => {
  const resultSpan = document.querySelector('#delegation-result');
  if (event.target.tagName === "BUTTON") resultSpan.textContent = event.target.textContent;
};

const addNewRandomNumber = () => {
  const li = document.createElement("li");
  li.textContent = Math.floor(Math.random() * (999 - 1) + 1);
  document.getElementById("random-numbers").append(li);
};

const main = () => {
  const delegationContainer = document.querySelector('#delegation');

  delegationContainer.addEventListener('click', handleDelegation);
  // Events
  document.getElementById("click-button").addEventListener("click", clickCounterHandler);
  document.body.addEventListener("keydown", handleKeydown);
  document.getElementById("inline-example").addEventListener("click", clickCounterHandler);
  document.getElementById("add-random-num").addEventListener("click", addNewRandomNumber);
  document.getElementById("remove").addEventListener("click", () => {
    document.getElementById("delegation").removeEventListener("click", handleDelegation);
  });
};

main();
