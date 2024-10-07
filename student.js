document.getElementById("form1").addEventListener("submit", submitFun1);

let studentDataArr = JSON.parse(localStorage.getItem("studentData")) || [];

function submitFun1(e) {
    e.preventDefault();
    const name = document.querySelector("#name").value;
    const number = document.querySelector("#number").value;
    const city = document.querySelector("#city").value;
    const rollNo = document.querySelector("#rollNo").value;

    const studentObj = {
        name,
        number,
        city,
        rollNo
    };

    studentDataArr.push(studentObj);
    localStorage.setItem("studentData", JSON.stringify(studentDataArr));
    document.querySelector("#form1").reset();
    alert("Student Added Successfully");

    displayFun(studentDataArr);
}

function displayFun(studentDataArr) {
    document.querySelector("#tbody").innerHTML = "";
    let count = 1;
    studentDataArr.forEach(item => {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        td1.innerHTML = count++;
        const td2 = document.createElement("td");
        td2.innerHTML = item.name;
        const td3 = document.createElement("td");
        td3.innerHTML = item.number;
        const td4 = document.createElement("td");
        td4.innerHTML = item.city;
        const td5 = document.createElement("td");
        td5.innerHTML = item.rollNo;
        const td6 = document.createElement("td");
        
        const btn1 = document.createElement("button");
        btn1.innerHTML = "P";
        btn1.addEventListener("click", function () {
            td6.innerHTML = "<button>Present</button>";
        });

        const btn2 = document.createElement("button");
        btn2.innerHTML = "A";
        btn2.addEventListener("click", function () {
            td6.innerHTML = "<button id='absent'>Absent</button>";
        });

        td6.classList.add("td6");
        td6.append(btn1, btn2);

        tr.append(td1, td2, td3, td4, td5, td6);
        document.querySelector("#tbody").append(tr);
    });
}

displayFun(studentDataArr);

// Reset Button Functionality
document.getElementById("resetBtn").addEventListener("click", function () {
    if (confirm("Are you sure you want to delete all attendance records?")) {
        localStorage.removeItem("studentData");
        studentDataArr = [];
        document.querySelector("#tbody").innerHTML = "";
        alert("All attendance records have been reset.");
    }
});
