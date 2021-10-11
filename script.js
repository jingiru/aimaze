function ans_init() {
	let input = document.getElementById("input");
	let error = document.getElementById("errorname");

	error.innerHTML = "";
	input.value="";
	input.style.animation='';
}

function next(answer, next_link) {
	let input = document.getElementById("input");
	let error = document.getElementById("errorname");
	let check = document.getElementById("check");

	function ans()
	{
		if(input.value == answer)
			location.href=next_link;
		else
		{
			input.style.animation='shake 0.5s';
			error.innerHTML = "다시 풀어보세요";
		}
	}

	input.addEventListener("keyup", e => {
		e.preventDefault();
		if(e.keyCode === 13) {
			ans();
		}
	});

	check.addEventListener("click", () => {
		ans();
	});

}
