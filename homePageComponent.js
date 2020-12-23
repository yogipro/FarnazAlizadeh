





function showArticle(){
	var root = document.getElementById('root');
	ReactDOM.render(<ArticleComponent/>,root)
	root.style.top = 0;
	root.style.textAlign = "left"
	root.style.height = "auto"
	
}
function displayMainMenu(){
	var root = document.getElementById('root');
	ReactDOM.render(<HomePageComponent/>,root);
	root.style.top = "20%";
	root.style.textAlign = "center";
	root.style.height = "300px"
	
}
function openCV(){
	window.location = "cv.html"
}

