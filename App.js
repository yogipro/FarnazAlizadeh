










function showArticle(){
	ReactDOM.render(<ArticleComponent/>,document.getElementById("root"))
	var root = document.getElementById('root');
	root.style.top = 0;
	root.style.textAlign = "left"
	root.backgroundColor = "red";
	root.style.height = "auto"
	
}
function displayMainMenu(){
	ReactDOM.render(<HomePageComponent/>,document.getElementById("root"));
	var root = document.getElementById('root');
	root.style.top = "20%";
	root.style.textAlign = "center";
	root.style.height = "300px"
	
}
function openCV(){
	window.location = "cv.html"
}

