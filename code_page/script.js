function ans_init() {
	let input = document.getElementById("input");
	let error = document.getElementById("errorname");

	error.innerHTML = "";
	input.style.animation='';
}

function next(answer, next_link) {
	let input = document.getElementById("input");
	let error = document.getElementById("errorname");
	let check = document.getElementById("check");
	
	ans_init();

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

	//타이핑을 했을 때
	input.addEventListener("keydown", e => {
		//엔터라면 답안 확인(ans 함수 호출)
		if(e.keyCode === 13) {
			ans();
		}
		//백스페이스라면 애니메이션과 경고 문구 초기화
		if(e.keyCode === 8) {
			error.innerHTML = "";
			input.style.animation="";
		}
	});

	//확인 버튼을 클릭했을 때
	check.addEventListener("click", () => {
		ans();
	});

}
