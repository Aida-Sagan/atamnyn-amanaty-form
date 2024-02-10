document.addEventListener('DOMContentLoaded', () => {
    const formData = JSON.parse(localStorage.getItem('formData'));

    if (formData) {
        const formDataContainer = document.getElementById('formDataContainer');

        let data = '';

        for (let value in formData){
            console.log(formData[value])
            data += `
            <div class="block-data"> 
                <ul>
                    <li>${formData[value]} </li>
                
                </ul>
            </div>`;
        }

        formDataContainer.innerHTML = data;
    }
});

/**
 * Send form to get id
 */
document.addEventListener('DOMContentLoaded', () => {
   let formDataContainer = document.querySelector('#formDataContainer');

    formDataContainer.addEventListener('submit', e => {
        e.preventDefault();

        window.location.href = 'success-page.html';
    })
});


/**
* redirectToForm
 */

function redirectToForm() {

    let redirectUrl = "form-request.html";

    // Перенаправляем на страницу с формой и передаем параметры
    window.location.href = redirectUrl;
}
