
const chart = document.querySelector('#myChart');
const dropdownContainer = document.querySelector("#dropdownMenuButton");
const btnBook1 = document.querySelector("#book1");
const btnBook2 = document.querySelector("#book2");
const btnBook3 = document.querySelector("#book3");
const btnBook4 = document.querySelector("#book4");
const btnBook5 = document.querySelector("#book5");
const test = document.querySelector('#dropdownMenuButton');

// test.addEventListener("click",(e)=> {
//     test.textContent = "test";
// });

let myChart;

function showChart1(bookNumber){
    const obj = { book: bookNumber };
    const init = {
        method: 'post',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    };

    fetch('/feature_graphbar/show', init).then(onSuccess).then(showResult1);

    function onSuccess(response) {
        return response.json();
    }

    function showResult1(data) {
        const arrLabel = data.Labels;
        const arrData = data.Data;
        myChart = new Chart(chart, {
            type: 'bar',
            data: {
                labels: arrLabel,
                datasets: [{
                    label: 'number of Interactions',
                    data: arrData,
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'x',
                scales: {
                    x: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}

    function showChart2(bookNumber){
        const obj = { book: bookNumber };
        const init = {
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        };
    
        fetch('/feature_graphbar/show2', init).then(onSuccess).then(showResult2);
        console.log(obj)
        function onSuccess(response) {
            return response.json();
        }
    
        function showResult2(data) {
            const arrLabel = data.Labels;
            const arrData = data.Data;
            myChart = new Chart(chart, {
                type: 'bar',
                data: {
                    labels: arrLabel,
                    datasets: [{
                        label: 'number of Interactions',
                        data: arrData,
                        borderWidth: 1
                    }]
                },
                options: {
                    indexAxis: 'x',
                    scales: {
                        x: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    };

    function showChart3(bookNumber){
        const obj = { book: bookNumber };
        const init = {
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        };
    
        fetch('/feature_graphbar/show3', init).then(onSuccess).then(showResult3);
    
        function onSuccess(response) {
            return response.json();
        }
    
        function showResult3(data) {
            const arrLabel = data.Labels;
            console.log(arrLabel);
            const arrData = data.Data;
            myChart = new Chart(chart, {
                type: 'bar',
                data: {
                    labels: arrLabel,
                    datasets: [{
                        label: 'number of Interactions',
                        data: arrData,
                        borderWidth: 1
                    }]
                },
                options: {
                    indexAxis: 'x',
                    scales: {
                        x: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    };

    function showChart4(bookNumber){
        const obj = { book: bookNumber };
        const init = {
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        };
    
        fetch('/feature_graphbar/show4', init).then(onSuccess).then(showResult4);
    
        function onSuccess(response) {
            return response.json();
        }
    
        function showResult4(data) {
            const arrLabel = data.Labels;
            const arrData = data.Data;
            myChart = new Chart(chart, {
                type: 'bar',
                data: {
                    labels: arrLabel,
                    datasets: [{
                        label: 'number of Interactions',
                        data: arrData,
                        borderWidth: 1
                    }]
                },
                options: {
                    indexAxis: 'x',
                    scales: {
                        x: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    };

    function showChart5(bookNumber){
        const obj = { book: bookNumber };
        const init = {
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        };
    
        fetch('/feature_graphbar/show5', init).then(onSuccess).then(showResult5);
    
        function onSuccess(response) {
            return response.json();
        }
    
        function showResult5(data) {
            const arrLabel = data.Labels;
            const arrData = data.Data;
            myChart = new Chart(chart, {
                type: 'bar',
                data: {
                    labels: arrLabel,
                    datasets: [{
                        label: 'number of Interactions',
                        data: arrData,
                        borderWidth: 1
                    }]
                },
                options: {
                    indexAxis: 'x',
                    scales: {
                        x: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    };


btnBook1.addEventListener("click", (e) => {
    if (myChart!=undefined){
        myChart.destroy();
    }
    test.textContent = "Book 1";
    showChart1(1);
});

btnBook2.addEventListener("click", (e) => {
    if (myChart!=undefined){
        myChart.destroy();
    }
    test.textContent = "Book 2";
    showChart2(2);
});

btnBook3.addEventListener("click", (e) => {
    if (myChart!=undefined){
        myChart.destroy();
    }
    test.textContent = "Book 3";
    showChart3(3);
});

btnBook4.addEventListener("click", (e) => {
    if (myChart!=undefined){
        myChart.destroy();
    }
    test.textContent = "Book 4";
    showChart4(4);
});

btnBook5.addEventListener("click", (e) => {
    if (myChart!=undefined){
        myChart.destroy();
    }
    test.textContent = "Book 5";
    showChart5(5);
});
