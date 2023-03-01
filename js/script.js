function getById(elementId) {
    return document.getElementById(elementId)
}

function getQuerySelectedAllLength(elementsClass) {
    return document.querySelectorAll(elementsClass).length;
}


function selectedPlayer(PlayerName, btnId) {
    const selectedLi = getQuerySelectedAllLength('.selected');

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
    const selectedLi = getQuerySelectedAllLength('.selected');
    const perPlayerExpenseField = getById('per-player-expense-field');
    const expenseFieldValue =  parseFloat(perPlayerExpenseField.value);

    if (expenseFieldValue <= 0 || isNaN(expenseFieldValue)) {
        alert('Invalid Input')
    } else if (selectedLi <= 0) {
        alert('You have not select any player')
    }else {
        getById('players-expenses').innerText =  selectedLi * expenseFieldValue;
        perPlayerExpenseField.value = '';
    };
}

function calculateTotal() {
    const managerExpenseField = getById('manager-expense-field');
    const coachExpenseField = getById('coach-expense-field');

    const floatManagerFieldValue = parseFloat(managerExpenseField.value);
    const floatCoachFieldValue = parseFloat(coachExpenseField.value);


    const playerExpense = parseFloat(getById('players-expenses').innerText);
    const total = getById('total');

    if (floatManagerFieldValue <= 0 || isNaN(floatCoachFieldValue) || floatCoachFieldValue <= 0 || isNaN(floatCoachFieldValue)) {
        alert('Invalid input, Please feel up your input with valid number')
    } else if (playerExpense <= 0) {
        alert('you have not calculate the per player expense')
    } else {
        const totalExpense = playerExpense + floatCoachFieldValue + floatCoachFieldValue;
        managerExpenseField.value = '';
        coachExpenseField.value = '';
        total.innerText = totalExpense;
    };
}