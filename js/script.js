function selectedPlayer(PlayerName, btnId) {
    const playerOlList = document.getElementById('player-list');
    const newPlayerLi = document.createElement('li');
    newPlayerLi.innerHTML = `<span class="text-base font-semibold leading-tight text-gray-500 dark:text-gray-400">${PlayerName}</span>`
    playerOlList.appendChild(newPlayerLi);
    newPlayerLi.classList.add('text-lg', 'font-bold', 'leading-tight', 'text-gray-500', 'dark:text-gray-600');
    const selectedBtn = document.getElementById(btnId);
    selectedBtn.classList.add('cursor-not-allowed', 'bg-slate-500');
    selectedBtn.classList.remove('bg-blue-600', 'hover:bg-blue-700')
    selectedBtn.disabled = true;
};