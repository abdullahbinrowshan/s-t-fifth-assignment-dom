function selectedPlayer(PlayerName, btnId) {
    newPlayerLi.classList.add('text-lg', 'font-bold', 'leading-tight', 'text-gray-500', 'dark:text-gray-600');
    const selectedBtn = document.getElementById(btnId);
    selectedBtn.classList.add('cursor-not-allowed', 'bg-slate-500');
    selectedBtn.classList.remove('bg-blue-600', 'hover:bg-blue-700')
    selectedBtn.disabled = true;
};