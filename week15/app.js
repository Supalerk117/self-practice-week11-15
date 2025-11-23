const planSelect = document.querySelector('.ecors-dropdown-plan');

if (planSelect) {
        planSelect.addEventListener('change', () => {
            const selectedValue = planSelect.value;
            
            if (currentDeclaredPlanId) {
                if (!selectedValue || parseInt(selectedValue) === currentDeclaredPlanId) {
                    changeBtn.disabled = true;
                } else {
                    changeBtn.disabled = false;
                }
            } 
            else {

                if (selectedValue) {
                    declareBtn.disabled = false;
                } else {
                    declareBtn.disabled = true;
                }
            }
        });
    }