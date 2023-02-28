function getById(elementId) {
    return document.getElementById(elementId)
}


function selectedPlayer(PlayerName, btnId) {
    const selectedLi = document.querySelectorAll('.selected').length;

    if (selectedLi >= 5) {
        alert('You can not select more then 5 players')
        return
    }

    const playerOl = getById('player-list');
    const newPlayerLi = document.createElement('li');

    newPlayerLi.innerHTML = `<span class="text-base font-semibold leading-tight text-gray-500 dark:text-gray-400">${PlayerName}</span>`
    newPlayerLi.classList.add('text-lg', 'font-bold', 'leading-tight', 'text-gray-500', 'dark:text-gray-600', 'selected');
    playerOl.appendChild(newPlayerLi);

    const selectedBtn = getById(btnId);
    selectedBtn.classList.add('cursor-not-allowed', 'bg-slate-500');
    selectedBtn.classList.remove('bg-blue-600', 'hover:bg-blue-700')
    selectedBtn.disabled = true;
};


function calculatePerPlayer() {
    const selectedLi = document.querySelectorAll('.selected').length;
    const perPlayerExpenseField = parseFloat(getById('per-player-expense').value);

    if (perPlayerExpenseField <= 0 || isNaN(perPlayerExpenseField)) {
        alert('Invalid Input')
    } else if (selectedLi <= 0) {
        alert('You have not select any player')
    }

    const totalPlayerExpense = selectedLi * perPlayerExpenseField
    console.log(totalPlayerExpense);
}