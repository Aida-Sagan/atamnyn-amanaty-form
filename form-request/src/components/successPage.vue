<template>
    <div>
        <h2>Успешно отправлено:</h2>
        <p><strong>Выбран вариант:</strong> {{ selectedOption }}</p>
        <p><strong>Текст:</strong> {{ text }}</p>
        <!-- Добавьте другие поля формы, которые вы хотите отобразить -->
        <!-- Пример: <p><strong>Дата:</strong> {{ date }}</p> -->
        <!-- Пример: <p><strong>Файл:</strong> {{ uploadedFile ? uploadedFile.name : 'Нет файла' }}</p> -->
    </div>
</template>

<script>
export default {
    name: "successPage",
    data() {
        return {
            selectedOption: 'option1',
            text: '',
            date: '',
            uploadedFile: null,
        };
    },
}
</script>

<style scoped>

</style>