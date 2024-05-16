const addOne = () => {
    console.log('clicked');
    let num = Number(document.getElementById("results").textContent);
    num++;
    document.getElementById("results").textContent = num;
}

const main = () => {
    document.getElementById("add-one").addEventListener("click", addOne);
}

main();