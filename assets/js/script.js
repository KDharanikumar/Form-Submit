const form = document.forms.db;

let db_body = document.getElementById("db_body");

const handleSubmit = (event) => {
	event.preventDefault();
	let fname = document.querySelector("#fname").value;
	let lname = document.querySelector("#lname").value;
	let ad1 = document.querySelector("#ad1").value;
	let ad2 = document.querySelector("#ad2").value;
	let pincode = document.querySelector("#pincode").value;
	let gender = document.querySelector('input[name="gender"]:checked').value;
	let choice = document.getElementsByName("food");
	let clist = [];
	let ccount = 0;
	for (let i = 0; i < choice.length; i++) {
		if (choice[i].checked) {
			clist.push(choice[i].value);
			ccount++;
		}
	}

	if (clist.length >= 2) {
		clist = clist.join("<br/>");
	} else {
		alert("Please Select atleast 2 Foods");
		fname = "";
		lname = "";
		ad1 = "";
		ad2 = "";
		pincode = "";
		gender = "";
		clist = "";
		state = "";
		country = "";
	}

	let state = document.querySelector("#state").value;
	let country = document.querySelector("#country").value;

	db_body.innerHTML += `<tr>
			<td>${fname} ${lname}</td>
			<td>${ad1} <br/> ${ad2} </td>
			<td>${pincode}</td>
			<td>${gender}</td>
			<td>${clist}</td>
			<td>${state}</td>
			<td>${country}</td>
		</tr>`;
};

form.addEventListener("submit", handleSubmit);
