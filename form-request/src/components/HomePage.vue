<template>
    <div class="container container-login">
        <router-link to="/admin">
            <button class="btn-login">Вход (только для админов)</button>
        </router-link>
    </div>
    <div class="centered-container">
        <div class="container container-main">
            <div class="container-main__first-col">
                <input v-model="requestId" type="text" placeholder="Введите ID заявки" class="container-main__input-field">
                <button @click="checkStatus" class="container-main__btn">Узнать статус</button>
            </div>

            <div class="container-main__second-col">
                <router-link to="/form">
                    <button class="container-main__second-col__btn-apply">Подать заявку</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            requestId: ""
        };
    },
    methods: {
        checkStatus() {

        },

    }
};
</script>

<style scoped lang="scss">
.container-login {
    display: flex;
    justify-content: end;
}

.btn-login {
    height: 50px;
    background: #54576d;
    width: 300px;
    border-radius: 7px;
    color: #fefefd;
    font-weight: 500;
    font-size: 18px;

    &:hover {
        background: #646591;
    }
}

.centered-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
}

.container-main {
    display: inline-flex;
    justify-content: center;

    &__first-col {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &__second-col {

        &__btn-apply {
            height: 60px;
            width: 250px;
            margin-left: 30px;
            border-radius: 7px;
            background: #fae288;
            color: #54576d;
            font-weight: 700;
            font-size: 24px;
            border: 1px solid #54576d;

            &:hover {
                background: #ffde63;
            }
        }
    }

    &__input-field {
        background: white;
        height: 60px;
        color: #54576d;
        font-size: 24px;
        border: 1px solid #54576d;
        text-align: center;
        margin-bottom: 20px;
        border-radius: 7px;
    }

    &__btn {
        height: 45px;
        width: 200px;
        background: #54576d;
        color: #fefefd;
        border-radius: 8px;

        &:hover {
            background: #646591;
        }
    }
}
</style>
