import Chart from 'chart.js';

export default window.onload = () => {
    // const calc = Math.round(Math.random() * 100);
    var ctxs = document.getElementsByClassName("chartJs__canvas--pie");
    for (let i = 0; ctxs.length > i; i++) {
        let date1 = Number(ctxs[i].getAttribute("porcent"));
        let date2 = 100 - date1;
        let config = {
            type: 'pie',
            data: {
                datasets: [{
                    data: [
                        date1,
                        date2
                    ],
                    backgroundColor: [
                        "#20C997",
                        "#005a87"
                    ],
                    borderWidth: [
                        0,
                        0
                    ],
                }],
            },
            options: {
                responsive: true,
                events: [""]
            }
        };
        let ctx = ctxs[i].getContext('2d');
        window.myPie = new Chart(ctx, config);
    }

}