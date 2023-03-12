// Button
let enterBtn= document.getElementById("submit");
let restoreBtn = document.getElementById("restore");

// Event Listeners
enterBtn.addEventListener("click", (calculate));
restoreBtn.addEventListener("click", (restore));

// Enum eta
const ages = {
	minorenne : 1,
	maggiorenne: 2,
	pensionato: 3
};

function calculate(){
	// Get user data
	let name = document.querySelector('input[name="name"]');
	let distance = document.querySelector('input[name="distance"]');
	let age = document.querySelector('select[name="age"]');

	if(name.value != "" && !isNaN(distance.value) && distance.value > 0){

		document.getElementById("error").innerHTML = "";

		// Ticket creation
		let ticket = {
			name: name.value,
			type: (age.value == ages.maggiorenne) ? "Biglietto standard" : "Biglietto ridotto",
			carridge: (Math.random()*10 + 1).toFixed(0),
			codeCP: (Math.random()*99998 + 1).toFixed(0),
			amount: ((0.21 * distance.value) * ((age.value == ages.minorenne) ? (80 / 100) : ((age.value == ages.pensionato) ? (60 / 100) : 1))).toFixed(2),
			currency: "\$"
		};

		document.getElementById("ticket").innerHTML = `
		<h2>Calcola il tuo biglietto</h2>
		<section class="card my-row bg-danger-subtle">
			<h4 class="text-uppercase">dettaglio passegiero</h4>
			<table class="w-100">
				<thead>
					<tr><th class="text-capitalize p-2 bg-secondary"><h4 class="text-uppercase">Nome passeggiero</h4></th>
						<th class="text-capitalize p-2">Offerta</th>
						<th class="text-capitalize p-2">Carrozza</th>
						<th class="text-capitalize p-2">Codice CP</th>
						<th class="text-capitalize p-2">Costo biglietto</th></tr>
				</thead>
				<tbody>
					<tr>
						<td class="bg-secondary p-3 text-capitalize text-white"><h5>${ticket.name}</h5></td>
						<td class="p-3 text-capitalize">${ticket.type}</td>
						<td class="p-3 text-capitalize">${ticket.carridge}</td>
						<td class="p-3 text-capitalize">${ticket.codeCP}</td>
						<td class="p-3 text-capitalize">${ticket.amount} ${ticket.currency}</td>
					</tr>
				</tbody>
			</table>`;
	}
	else{
		document.getElementById("ticket").innerHTML = "";
		document.getElementById("error").innerHTML = "Errore nei dati inseriti";
	}
}

function restore(){
	let name = document.querySelector('input[name="name"]');
	let distance = document.querySelector('input[name="distance"]');
	let age = document.querySelector('select[name="age"]');

	name.value = "";
	distance.value = "";
	age.value = 2;

	document.getElementById("ticket").innerHTML = "";
	document.getElementById("error").innerHTML = "";
}