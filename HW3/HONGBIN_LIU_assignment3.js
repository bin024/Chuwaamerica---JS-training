window.onload = () => {
  loadTableData(tableInfo);
  loadLists(list);
  dropDown(dropDownList);
};

const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
  ],
};

function loadTableData(tableInfo) {
  const Question_1 = document.createElement("div");
  const tbody = document.createElement("tbody");
  const table = document.createElement("table");
  //   const tbody = document.getElementById("tableData");
  let tr = document.createElement("tr");
  let row = "";

  for (var i = 0; i < tableInfo.tableHeader.length; i++) {
    tr.innerHTML += "<th>" + tableInfo.tableHeader[i] + "</th>";
  }

  for (var i = 0; i < tableInfo.tableContent.length; i++) {
    row +=
      "<tr>" +
      "<td>" +
      tableInfo.tableContent[i]["Student Name"] +
      "</td>" +
      "<td>" +
      tableInfo.tableContent[i].Age +
      "</td>" +
      "<td>" +
      tableInfo.tableContent[i].Phone +
      "</td>" +
      "<td>" +
      tableInfo.tableContent[i].Address +
      "</td>" +
      "</tr>";
  }
  tbody.appendChild(tr);
  tbody.innerHTML += row;
  table.append(tbody);
  Question_1.append(table);
  document.body.appendChild(Question_1);
}

// _____________________________________________________________________________________

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

function loadLists(list) {
  const Question_2 = document.createElement("div");
  const ol = document.createElement("ol");
  const ul = document.createElement("ul");

  list.forEach((e) => {
    let li = document.createElement("li");
    li.innerText += e;
    ol.appendChild(li);
  });

  list.forEach((e) => {
    let li = document.createElement("li");
    li.innerText += e;
    ul.appendChild(li);
  });

  Question_2.appendChild(ol);
  Question_2.appendChild(ul);

  document.body.appendChild(Question_2);
}

// _____________________________________________________________________________________
const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

function dropDown(dropDownList) {
  const Question_3 = document.createElement("div");
  const select = document.createElement("select");
  let option = document.createElement("option");

  var dropDowns = dropDownList.map(({ content }) => {
    return content;
  });

  dropDowns.forEach((e) => {
    let option = document.createElement("option");
    option.innerText += e;
    select.appendChild(option);
  });

  Question_3.appendChild(select);
  document.body.appendChild(Question_3);
}
