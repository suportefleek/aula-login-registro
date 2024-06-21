document.addEventListener('DOMContentLoaded', function() {
    const dropdownButtons = document.querySelectorAll('.dropdown');

    dropdownButtons.forEach(button => {
        button.addEventListener('click', function() {
            const dropdownWrapper = this.closest('.dropdown-wrapper');
            const dropdownList = dropdownWrapper.querySelector('.dropdown-list');

            if (dropdownWrapper.classList.contains('_open')) {
                dropdownWrapper.classList.remove('_open');
            } else {
                document.querySelectorAll('.dropdown-wrapper._open').forEach(openDropdown => {
                    openDropdown.classList.remove('_open');
                });
                dropdownWrapper.classList.add('_open');
            }
        });
    });
});
