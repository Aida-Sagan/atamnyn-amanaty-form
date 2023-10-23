<template>

    <div class="wallpaper">
        <div class="container container-text">
            <div class="row justify-content-center">
                <div class="col-6">
                    <img src="../assets/portrait.png" alt="family-icon">
                </div>
                <div class="col-6 hello-text">
                    <img src="../assets/atamnyn-logo.webp" alt="atamnyn-amanaty-logo" class="logo-atamnyn">
                    <p class="ru-text">
                        Мы рады приветствовать Вас на сайте ОО "ATAMNYN AMANATY",
                        посвященному поиску родственников и солдат, пропавших без вести в годы Великой Отечественной войны.
                        Мы готовы помочь Вам в поиске своего деда и восстановлении истории вашей семьи.
                        Заполните нашу форму поиска, и давайте вместе вернем память о наших героях.
                    </p>
                    <br>
                    <p class="ru-text">
                        Сіздерді Ұлы Отан соғысы кезінде хабарсыз кеткен туыстары мен жауынгерлерді
                        іздеуге арналған «АТАМНЫН АМАНАТЫ» ҚБ сайтына қош келдіңіздер.
                        Біз сізге атаңызды табуға және отбасы тарихын қалпына келтіруге көмектесуге дайынбыз.
                        Іздеу парағын толтырыңыз және кейіпкерлерімізді бірге еске түсірейік.
                    </p>
                </div>
            </div>


        </div>



        <div id="stats">
            <div class="stat-box">
                <div class="stat-label">Поданных заявок</div>
                <div class="stat-value" id="applicationsCount">0</div>
            </div>
            <div class="stat-box">
                <div class="stat-label">Найдено на сегодня</div>
                <div class="stat-value" id="foundTodayCount">0</div>
            </div>
        </div>

        <div class="form-text">
            <p>Для того чтобы найти информацию о вашем дедушке, пожалуйста, ответьте, по возможности, на все вопросы.</p>
            <p>Атаңыз туралы ақпарат алу үшін мүмкіндігінше көп сұрақтарға жауап беріңіз.</p>
        </div>
        <div id="app">
            <form @submit.prevent="submitForm" class="container mt-4">
                <div class="form-group">
                    <label for="choice">Ваш дедушка вернулся с ВОВ?</label>
                    <select class="form-control" v-model="selectedOption" id="choice">
                        <option value="option1">Вернулся с ВОВ</option>
                        <option value="option2">Не вернулся с ВОВ</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="fullName">ФИО (кого ищут)</label>
                    <input class="form-control" v-model="fullName" id="fullName" type="text">
                </div>

                <div class="form-group">
                    <label for="relativeName">Если известно, укажите имя прадеда, деда, отца разыскиваемого</label>
                    <input class="form-control" v-model="relativeName" id="relativeName" type="text">
                </div>

                <div class="form-group">
                    <label for="birthYear">Год рождения</label>
                    <select class="form-control" v-model="selectedYear" id="birthYear">
                        <option value="" disabled>Выберите год</option>
                        <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="birthInterval">Если год рождения неизвестен, укажите примерный интервал (например, 1897-1905)</label>
                    <input class="form-control" v-model="birthInterval" id="birthInterval" type="text">
                </div>

                <div class="form-group">
                    <label for="birthCountry">Место рождения: страна и область</label>
                    <input class="form-control" v-model="birthCountry" id="birthCountry" type="text">
                </div>

                <div class="form-group">
                    <label for="birthPlace">Место рождения: город, район, населенный пункт</label>
                    <input class="form-control" v-model="birthPlace" id="birthPlace" type="text">
                </div>

                <div class="form-group">
                    <label for="enlistmentDate">Месяц и год призыва</label>
                    <input class="form-control" v-model="enlistmentDate" id="enlistmentDate" type="text">
                </div>


                <div class="form-group">
                    <label for="choice">Семейный статус</label>
                    <select class="form-control" v-model="selectedOption" id="choice">
                        <option value="option1">женат</option>
                        <option value="option1">холост</option>
                        <option value="option1">разведен</option>
                        <option value="option2">неизвестно</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="text">Количество детей и их имена</label>
                    <input class="form-control" v-model="text" id="quantityChild" type="text">
                </div>

                <div class="form-group">
                    <label for="message">Кого из родных мог указать Ваш дедушка в анкете призыва на фронт?
                        (например, Жанагуль - жена, Ботагоз - сестра)</label>
                    <input class="form-control" v-model="message" />
                </div>

                <div class="form-group">
                    <label for="captivityInfo">Есть ли информация, что Ваш дедушка был в плену?</label>
                    <div>
                        <input type="radio" id="captivityYes" name="captivity" value="yes" v-model="captivityInfo">
                        <label for="captivityYes">Да</label>
                    </div>
                    <div>
                        <input type="radio" id="captivityNo" name="captivity" value="no" v-model="captivityInfo">
                        <label for="captivityNo">Нет</label>
                    </div>
                    <div>
                        <input type="radio" id="captivityUnknown" name="captivity" value="no" v-model="captivityInfo">
                        <label for="captivityNo">Неизвестно</label>
                    </div>

                </div>

                <div class="form-group">
                    <label for="captivityLocationInfo">Если выше указали ответ "ДА", то известно ли, где был пленен (указать любую информацию)</label>
                    <textarea class="form-control" id="captivityLocationInfo" v-model="captivityLocationInfo"></textarea>
                </div>

                <div class="form-group">
                    <label class="form-control" for="file">Прикрепить файл:</label>
                    <input type="file" @change="handleFileUpload" id="file">
                </div>

                <button type="submit" class="btn btn-primary">Отправить</button>

            </form>

            <div v-if="formSubmitted">
                <!-- Отображение данных после отправки формы -->
                <h2>Отправлено:</h2>
                <p><strong>Выбран вариант:</strong> {{ selectedOption }}</p>
                <p><strong>Текст:</strong> {{ text }}</p>

            </div>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            selectedOption: 'option1',
            text: '',
            date: '',
            uploadedFile: null,
            formSubmitted: false,
            selectedYear: '',
            applicationsCount: 0,
            foundTodayCount: 0,
        };
    },
    computed: {
        years() {
            const currentYear = new Date().getFullYear();
            const startYear = 1800;
            const yearList = [];

            for (let year = currentYear; year >= startYear; year--) {
                yearList.push(year);
            }

            return yearList;
        },
    },
    methods: {
        submitForm() {
            // Увеличиваем счетчик заявок (тут Даурешик сам пропишет логику на стороне бэка)
            this.applicationsCount += 1;
            this.foundTodayCount += 1;

            // Помечаем форму нашу как отправленную
            this.formSubmitted = true;

            // Перенаправление на страницу успеха
            this.$router.push('/success');
        },
        handleFileUpload(event) {
            this.uploadedFile = event.target.files[0];
        },
    },
};
</script>

<style>
.container-text {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;

}

.logo-atamnyn {
    margin-bottom: 20px;
}

.hello-text {
    border: 20px solid #cbdbd1;
    border-radius: 50px;
    padding: 24px 100px 25px 100px;
    margin-bottom: 50px;
}

img {
    max-width: 100%;
    height: auto;
    margin-left: 20px;
}

.ru-text {
    color: #646591;
    font-size: 16px;
    font-weight: 600;
}

form {
    padding: 10px;
    border-radius: 5px;
}

input {
    padding: 4px 8px;
    margin: 4px;
}

span {
    font-size: 18px;
    margin: 4px;
    font-weight: 500;
}

.submit {
    font-size: 15px;
    color: #fff;
    background: #222;
    padding: 6px 12px;
    border: none;
    margin-top: 8px;
    cursor: pointer;
    border-radius: 5px;
}

#stats {
    display: flex;
    justify-content: space-around;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.stat-box {
    text-align: center;
}

.stat-label {
    font-weight: bold;
}

.stat-value {
    font-size: 24px;
    color: #333;
}

.form-text p{
    color: #d36736;
    font-weight: 700;
    font-size: 24px;
}

</style>