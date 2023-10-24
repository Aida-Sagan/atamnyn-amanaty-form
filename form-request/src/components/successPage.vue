<template>
    <header>
        <a href="/">
            <button class="go-to-main-page">Вернуться на главную</button>
        </a>
    </header>
    <div>
        <h2>Заявка {{ $route.params.id }} отправлена успешно:</h2>
        <p><strong>Выбран вариант:</strong> {{ $route.params.selectedOption }}</p>
        <p><strong>Текст:</strong> {{ $route.params.fullName }}</p>
        <!-- Отобразите другие переданные данные здесь -->
    </div>
    <div>
        <p>Отслеживать свой статус заявки можно по номеру:</p>
        <p>id</p>
        <p>на странице:</p>
        <a href="/">Проверить статус заявки</a>
    </div>
</template>


<script>
export default {
    name: "successPage",
    data() {
        return {
            text: '',
            date: '',
            uploadedFile: null,
        };
    },
}
</script>

<style scoped>
.go-to-main-page {
    height: 50px;
    width: 200px;
    border-radius: 20px;
    background: #ffffff;
    margin-bottom: 50px;

    &:hover {
        background: #3b4f5a;
        color: #fefefd;
    }
}
</style>