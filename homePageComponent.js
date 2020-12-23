// JavaScript Document


class HomePageComponent extends React.Component{
	render(){
		return (<div><h1 id = "welcome_text">Welcome Back</h1>
    	<span class = "index-button" id = "cv_button" onClick= {openCV}>My CV</span>
    	<span class = "index-button" id = "about_me_button">About Me</span>
    	<span class = "index-button" id = "article_button" onClick = {showArticle}>Article</span></div>)
	}
}
