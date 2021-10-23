function to1() {
	let input = document.getElementById("input");
	let error = document.getElementById("errorname");
	let check = document.getElementById("check");
	
	//시작 전 경고 문구와 애니메이션 초기화
	error.innerHTML = "";
	input.style.animation='';

	function ans()
	{
		if(input.value == "시작")
			location.href="./code_page/page1_start.html";
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
	});

	//입력창을 클릭했을 때
	input.addEventListener("click", () => {
		error.innerHTML = "";
		input.style.animation='';
	});


	//확인 버튼을 클릭했을 때
	check.addEventListener("click", () => {
		ans();
	});

}


function to2() {
	let input = document.getElementById("input");
	let error = document.getElementById("errorname");
	let check = document.getElementById("check");
	
	//시작 전 경고 문구와 애니메이션 초기화
	error.innerHTML = "";
	input.style.animation='';

	function ans()
	{
		if(input.value == "라온이")
			location.href="./page2_raon.html";
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
	});

	//입력창을 클릭했을 때
	input.addEventListener("click", () => {
		error.innerHTML = "";
		input.style.animation='';
	});


	//확인 버튼을 클릭했을 때
	check.addEventListener("click", () => {
		ans();
	});

}


function to3() {
	let input = document.getElementById("input");
	let error = document.getElementById("errorname");
	let check = document.getElementById("check");
	
	//시작 전 경고 문구와 애니메이션 초기화
	error.innerHTML = "";
	input.style.animation='';

	function ans()
	{
		if(input.value == "지도학습")
			location.href="./page3_ml.html";
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
	});

	//입력창을 클릭했을 때
	input.addEventListener("click", () => {
		error.innerHTML = "";
		input.style.animation='';
	});


	//확인 버튼을 클릭했을 때
	check.addEventListener("click", () => {
		ans();
	});

}


function to4() {
	let input = document.getElementById("input");
	let error = document.getElementById("errorname");
	let check = document.getElementById("check");
	
	//시작 전 경고 문구와 애니메이션 초기화
	error.innerHTML = "";
	input.style.animation='';

	function ans()
	{
		if(input.value == "40")
			location.href="./page4_40.html";
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
	});

	//입력창을 클릭했을 때
	input.addEventListener("click", () => {
		error.innerHTML = "";
		input.style.animation='';
	});


	//확인 버튼을 클릭했을 때
	check.addEventListener("click", () => {
		ans();
	});

}


function to5() {
	let input = document.getElementById("input");
	let error = document.getElementById("errorname");
	let check = document.getElementById("check");
	
	//시작 전 경고 문구와 애니메이션 초기화
	error.innerHTML = "";
	input.style.animation='';

	function ans()
	{
		if(input.value == "g3" || input.value == "G3")
			location.href="./page5_g3.html";
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
	});

	//입력창을 클릭했을 때
	input.addEventListener("click", () => {
		error.innerHTML = "";
		input.style.animation='';
	});


	//확인 버튼을 클릭했을 때
	check.addEventListener("click", () => {
		ans();
	});

}

function to6() {
	let input = document.getElementById("input");
	let error = document.getElementById("errorname");
	let check = document.getElementById("check");
	
	//시작 전 경고 문구와 애니메이션 초기화
	error.innerHTML = "";
	input.style.animation='';

	function ans()
	{
		if(input.value == "사전")
			location.href="./page6_dict.html";
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
	});

	//입력창을 클릭했을 때
	input.addEventListener("click", () => {
		error.innerHTML = "";
		input.style.animation='';
	});


	//확인 버튼을 클릭했을 때
	check.addEventListener("click", () => {
		ans();
	});

}


function to7() {
	let input = document.getElementById("input");
	let error = document.getElementById("errorname");
	let check = document.getElementById("check");
	
	//시작 전 경고 문구와 애니메이션 초기화
	error.innerHTML = "";
	input.style.animation='';

	function ans()
	{
		if(input.value == "화목일월금토수")
			location.href="./page7_week.html";
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
	});

	//입력창을 클릭했을 때
	input.addEventListener("click", () => {
		error.innerHTML = "";
		input.style.animation='';
	});


	//확인 버튼을 클릭했을 때
	check.addEventListener("click", () => {
		ans();
	});

}


function to8() {
	let input = document.getElementById("input");
	let error = document.getElementById("errorname");
	let check = document.getElementById("check");
	
	//시작 전 경고 문구와 애니메이션 초기화
	error.innerHTML = "";
	input.style.animation='';

	function ans()
	{
		if(input.value == "6528")
			location.href="./page8_6528.html";
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
	});

	//입력창을 클릭했을 때
	input.addEventListener("click", () => {
		error.innerHTML = "";
		input.style.animation='';
	});


	//확인 버튼을 클릭했을 때
	check.addEventListener("click", () => {
		ans();
	});

}


function to9() {
	let input = document.getElementById("input");
	let error = document.getElementById("errorname");
	let check = document.getElementById("check");
	
	//시작 전 경고 문구와 애니메이션 초기화
	error.innerHTML = "";
	input.style.animation='';

	function ans()
	{
		if(input.value == "통과")
			location.href="./page9_pass.html";
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
	});

	//입력창을 클릭했을 때
	input.addEventListener("click", () => {
		error.innerHTML = "";
		input.style.animation='';
	});


	//확인 버튼을 클릭했을 때
	check.addEventListener("click", () => {
		ans();
	});

}


function to10() {
	let input = document.getElementById("input");
	let error = document.getElementById("errorname");
	let check = document.getElementById("check");
	
	//시작 전 경고 문구와 애니메이션 초기화
	error.innerHTML = "";
	input.style.animation='';

	function ans()
	{
		if(Number(input.value) >= 2239 && Number(input.value) <= 2259)
			location.href="./page10_22392259.html";
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
	});

	//입력창을 클릭했을 때
	input.addEventListener("click", () => {
		error.innerHTML = "";
		input.style.animation='';
	});


	//확인 버튼을 클릭했을 때
	check.addEventListener("click", () => {
		ans();
	});

}


function toend() {
	let input = document.getElementById("input");
	let error = document.getElementById("errorname");
	let check = document.getElementById("check");
	
	//시작 전 경고 문구와 애니메이션 초기화
	error.innerHTML = "";
	input.style.animation='';

	function ans()
	{
		if(input.value >= 2239 && input.value <= 2259)
			location.href="./page5_g3.html";
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
	});

	//입력창을 클릭했을 때
	input.addEventListener("click", () => {
		error.innerHTML = "";
		input.style.animation='';
	});


	//확인 버튼을 클릭했을 때
	check.addEventListener("click", () => {
		ans();
	});

}
