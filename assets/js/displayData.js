document.addEventListener('DOMContentLoaded', () => {
    const formData = JSON.parse(localStorage.getItem('formData'));

    if (formData) {
        const formDataContainer = document.getElementById('formDataContainer');
        formDataContainer.innerHTML = `
            ${JSON.stringify(formData, null, 2)}
        `;
    }
});
