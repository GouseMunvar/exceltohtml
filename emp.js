// File input change event listener
const add = document.getElementById("fid");
const btn1 = document.getElementById("btn");
const table = document.getElementById("tab");

add.addEventListener("change", (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const content = e.target.result;
        const rows = content.trim().split("\n").map(row => row.split(","));
        table.innerHTML = "";

        for (let i = 0; i < rows.length; i++) {
            let tr = document.createElement("tr");
            for (let j = 0; j < rows[i].length; j++) {
                let td = document.createElement("td");
                td.innerText = rows[i][j];
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
    };

    reader.readAsText(file);
});

// Export button click event listener
document.getElementById("btn2").addEventListener("click", () => {
    const rows = document.querySelectorAll("#tab tr");
    let csvcontent = "";

    rows.forEach((row) => {
        const cols = row.querySelectorAll('td');
        let rowcontent = "";

        cols.forEach((col, index) => {
            rowcontent += col.textContent;
            if (index < cols.length - 1) {
                rowcontent += ",";
            }
        });

        csvcontent += rowcontent + "\n";
    });

    const blob = new Blob([csvcontent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'exported_data.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
});
