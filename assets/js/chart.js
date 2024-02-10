/**
 * Apex chart statistics
 */
document.addEventListener("DOMContentLoaded", () => {
    new ApexCharts(document.querySelector("#barChart"), {
        series: [{
            data: [
                400,
                430,
                48,
                470,
                540,
                580,
                690,
                1100,
                1200,
                1380,
                100,
                50,
                20,

            ]
        }],
        chart: {
            type: 'bar',
            height: 350
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: [
                'Абайская',
                'Акмолинская',
                'Актюбинская',
                'Алматинская',
                'Атырауская',
                'Восточно-Казахстанская',
                'Жамбылская',
                'Жетысуская',
                'Западно-Казахстанская',
                'Карагандинская',
                'Костанайская',
                'Кызылординская',
                'Мангистауская',
                'Павлодарская',
                'Северо-Казахстанская',
                'Туркестанская',
                'Улытауская',
            ],
        }
    }).render();
});
