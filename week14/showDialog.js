const dialog = document.querySelector('.ecors-dialog');
const dialogMessage = document.querySelector('.ecors-dialog-message');
const dialogButtonContainer = document.querySelector('.ecors-button');

function showDialog(message, dismissible = true, actions = []) {
    if (!dialog) return;
    if (dialogMessage) dialogMessage.textContent = message;
    dialogButtonContainer.innerHTML = '';

    if (actions.length > 0) {
      actions.forEach(action => {
        const btn = document.createElement('button');
        btn.textContent = action.text;
        btn.classList.add(action.class);
        btn.onclick = action.onClick;
        dialogButtonContainer.appendChild(btn);
      });
      if (!dismissible) {
        dialogMessage.style.color = "rgb(251, 72, 72)"
        dialog.addEventListener('cancel', (e) => e.preventDefault(), { once: true });
      }
    } else if (dismissible) {
        dialogMessage.style.color = "rgb(82, 172, 255)"
        const okBtn = document.createElement('button');
        okBtn.textContent = 'OK';
        okBtn.classList.add('ecors-button-dialog');
        okBtn.onclick = () => dialog.close();
        dialogButtonContainer.appendChild(okBtn);
        dialog.addEventListener('cancel', (e) => { }, { once: true });
    } else {
        dialog.addEventListener('cancel', (e) => e.preventDefault(), { once: true });
    }
    dialog.showModal();
}

export {showDialog}