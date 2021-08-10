<template>
 <div><!--  Début div vue.js  -->

			
			<div id="before-nav"><!-- Header -->
				<h1>BMF NEWS</h1>
			</div><!-- Fin Header -->
			
			
			<template v-if="!inPageArticle"> <!-- Début template -->
				
				<nav><!-- Nav -->
					
					<ul>
						<li><a href="index.html" class="animsition-link" ><i class="fas fa-home"></i> Home</a></li>
						<li><a @click="business()" ><i class="fas fa-handshake"></i> Business</a></li>
						<li><a @click="entertainment()" ><i class="fas fa-film"></i> Entertainment</a></li>
						<li><a @click="health()"><i class="fas fa-heartbeat"></i> Health</a></li>
						<li><a @click="science()"><i class="fas fa-flask"></i> Science</a></li>
						<li><a @click="sport()"><i class="fas fa-football-ball"></i> Sport</a></li>
						<li><a @click="technology()"><i class="fas fa-microchip"></i> Technology</a></li>
					</ul>
				</nav> <!-- Fin de Nav -->

				

				

				

				<!-- Section Actualité -->
				
				<div class="container"> <!-- Container  -->
					<h2>BREAKING NEWS</h2>

					
					<div class="articles-grid">
						<div class="news-list" v-bind:key="noticias.id" v-for=" (noticias, i) in posts.articles">
							
							
							
							
							<img v-bind:src="noticias.urlToImage" alt=""><br>
							<div class="div-titre">
								<h4>{{noticias.title}}</h4>
							</div>
							<p>{{noticias.description}}</p>
							<p>Paru le {{noticias.publishedAt}}</p>
							<a id="btn-info-id" class="btn-info" @click="showArticle(i)">En savoir +</a>
						</div>
					</div>

					<!-- Fin de Section Actualité  -->

				</div> <!-- Fin container  -->
				
			</template>  <!--Fin de template  -->

			<!-- Si je clique sur le bouton en savoir + alors je serais redirigé vers ce deuxieme template  -->

			<template v-else> <!-- Début template  -->
				<nav id="nav-two"> <!-- debut nav -->
					
					<ul> 
						<li><a href="index.html" class="animsition-link" ><i class="fas fa-home"></i> Home</a></li>
						
					</ul>
				</nav> <!-- Fin de nav -->



				<div class="container"> <!-- Debut container -->
					<div class="single-article">
						<div class="new-item" >
							
							
							
							
							<img v-bind:src="currentArticle.urlToImage" alt=""><br>
							<div class="div-titre">
								<h4>{{ currentArticle.title}}</h4>
							</div>
							<p>{{currentArticle.content}}</p>
							<p>Paru le {{currentArticle.publishedAt}}</p>
							<p>Auteur: {{currentArticle.author}}</p>
							<!-- <a :href="currentArticle.url" target="_blank"  >Lien de l'article</a> -->
						</div>
					</div>
					
					
					
					
					
					
					
				</div> <!-- Fin container -->
				
			</template><!-- Fin de template  -->

			<footer id="nav-footer" >
				
				
				<ul>
					<li><a href="#"> Business</a></li>
					<li><a href="#"> Entertainment</a></li>
					<li><a href="#"> Health</a></li>
					<li><a href="#"> Science</a></li>
					<li><a href="#"> Sport</a></li>
					<li><a href="#"> Technology</a></li>
				</ul>
				

				<p>© Copyright 2018-2021 BMF.com. Tous droits réservés. Site édité par Cedric</p>
			</footer>


		</div> <!--  Fin div vue.js  -->
</template>

<script>

import axios from 'axios'

export default {
    name: 'home',
    data(){
        return{
          inPageArticle:false,
        currentIndex:0,
            posts:[]
        }
    },
    computed:{
currentArticle: function(){
            return this.posts.articles[this.posts.currentIndex]
        }
    },
    // components:{
    //     HelloWorld
    // },
    created(){
        axios.get("https://newsapi.org/v2/top-headlines?country=fr&apiKey=28243b1c938f4b199614fa85217bd50b").then(reponse => this.posts = reponse.data)
            .catch(err => console.log(err));
    },
    methods:{
      showArticle: function(i) {

        this.posts.currentIndex = i
        this.inPageArticle = true
    },
    health(){
            axios.get("https://newsapi.org/v2/top-headlines?country=fr&category=health&apiKey=28243b1c938f4b199614fa85217bd50b").then(reponse => this.posts = reponse.data)
            .catch(err => console.log(err));
        },
        entertainment(){
            axios.get("https://newsapi.org/v2/top-headlines?country=fr&category=entertainment&apiKey=28243b1c938f4b199614fa85217bd50b").then(reponse => this.posts = reponse.data)
            .catch(err => console.log(err));
        },        
        science(){
            axios.get("https://newsapi.org/v2/top-headlines?country=fr&category=science&apiKey=28243b1c938f4b199614fa85217bd50b").then(reponse => this.posts = reponse.data)
            .catch(err => console.log(err));
        },        
        business(){
            axios.get("https://newsapi.org/v2/top-headlines?country=fr&category=business&apiKey=28243b1c938f4b199614fa85217bd50b").then(reponse => this.posts = reponse.data)
            .catch(err => console.log(err));
        },       
        technology(){
            axios.get("https://newsapi.org/v2/top-headlines?country=fr&category=technology&apiKey=28243b1c938f4b199614fa85217bd50b").then(reponse => this.posts = reponse.data)
            .catch(err => console.log(err));
        },
        sport(){
            axios.get("https://newsapi.org/v2/top-headlines?country=fr&category=sports&apiKey=28243b1c938f4b199614fa85217bd50b").then(reponse => this.posts = reponse.data)
            .catch(err => console.log(err));
        },
        
    }
}
</script>

<style>
body{
	padding: 0;
	margin: 0; 
	background-image: url(../Sky.jpg);
	background-repeat: repeat-y;
	width: 100%;
}

h1,h2,h3,h4{
	font-family: 'Roboto Condensed', sans-serif;
}
p{
	font-family: 'Open Sans', sans-serif;
}

h1{
	text-align: center;
	color: #237692;
	margin: 0;
	line-height: 70px;
}

.container{
	margin-top: 50px;
	
	box-sizing: border-box;
	/*inclure le padding dans la largeur*/
	width: 100%;
	max-width: 1000px;
	margin-left: auto;
	margin-right: auto;
}
/*NAV*/
#before-nav{
	width: 100%;
	height:70px;
	background: #fff;
	
}

nav{
	height: 70px;
	width: 100%;
	
}
nav ul{
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	justify-content: center;
	line-height: 70px;

}

nav ul li{
	padding-left: 15px;
}


nav ul li a{
	text-decoration: none;
	color: #fff ;
	transition: all 0.4s ease;
	font-family: 'Roboto Condensed', sans-serif;
	cursor: pointer;
	

}
nav ul li a:hover{
	
	color:#076585 ;
	transition: all 0.4s ease;

}
nav ul li a i{
	padding-right: 5px;
	
}

/*SECTION Liste des articles*/

.articles-grid{
	
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(7, 1fr);
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	

}



.news-list img{
	max-width: 100%;
	border-radius: 5px;
	
}

.news-list p{
	font-size: 12px;
	
}
.btn-info{
	text-decoration: none;
	font-size: 12px;
	cursor: pointer;
	font-family: 'Roboto Condensed', sans-serif;
	text-transform: uppercase;
	background: #076585;
	text-align: center;
	color: #fff;
	padding: 5px;
  margin-right: 10px;
	transition: all 0.3s ease;
	border-radius: 3px;
	position: absolute;
	bottom: 3%;
	left: 70%;


}
.btn-info:hover{
	border: 1px solid #076585;
	color: #076585;
	background: #fff;
	transition: all 0.5s ease;
}


h2 {
	color: #e74c3c;
	background: #fff;
	text-align: center;
	border-radius: 3px;
}
.news-list {
	/* border: 1px solid red; */
	padding-top:20px;
	padding-bottom: 40px;
	padding-left: 20px;
	padding-right: 20px;
	width: 85%;
	height: auto;
	background: #fff;
	
	box-shadow: 1px 2px 5px #95a5a6;
	border-radius: 5px;
	max-height: 100%;
	position: relative;
	margin: 10px auto;
}
.news-list h4{
	
	text-align: left;
	color: #34495e;
	font-size: 20px;
	text-transform: uppercase;
	/* background: #34495e; */
	padding: 5px;
	
}


.news-list p{
	margin: 0;
	font-size: 12px;
	margin-bottom: 10px;
	margin-top: 5px;
	margin-left: 5px;
	text-align: justify;
	color: #95a5a6;
}




/* Single Article  */
.new-item img{
	
	border-radius: 5px;
	max-width: 100%;
	
}
.single-article{
	
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-template-rows: repeat(0, 1fr);
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	
}
.new-item {
	/* border: 1px solid red; */
	padding-top:20px;
	padding-bottom: 40px;
	padding-left: 20px;
	padding-right: 20px;
	width: 65%;
	height: auto;
	background: #fff;
	max-height: 100%;
	box-shadow: 1px 2px 5px #95a5a6;
	border-radius: 5px;
	
	position: relative;
	margin: 10px auto;
}
.new-item h4{
	margin: 0;
	text-align: left;
	color: #34495e;
	font-size: 20px;
	text-transform: uppercase;
	/* background: #34495e; */
	padding: 5px;
	
}


.new-item p{
	margin: 0;
	font-size: 15px;
	margin-bottom: 10px;
	margin-top: 5px;
	margin-left: 5px;
	text-align: justify;
	color: #95a5a6;
}

/*FOOTER*/

#nav-footer{
	margin-top: 50px;
	height: auto;
	width: 100%;
	background: #2c3e50;
	padding: 15px 0;

}
#nav-footer ul{
	list-style: none;
	padding: 0;
	margin-bottom: 20px;
	display: flex;
	justify-content: center;
	line-height: 70px;
	border-bottom: 1px solid #34495e;

}
#nav-footer ul li{
	padding-left: 15px;
}

#nav-footer ul li a{
	text-decoration: none;
	color: #fff ;
	transition: all 0.4s ease;
	font-family: 'Roboto Condensed', sans-serif;
	font-weight: bold;

}

#nav-footer ul li a i{
	padding-right: 5px;
	
}
#nav-footer p {
	margin: 0;
	text-align: center;
	color: #2980b9;
	font-size: 12px;
}

/*Article page */

.h4-article{
	color: #0F044C!important;
	text-align: left!important;
	padding-bottom: 20px!important;

}
.p-article{
	font-size: 20px!important;
	text-align: justify!important;
	margin-top: 30px!important;
	line-height: 40px!important;

}
.date-article{
	margin-bottom: 15px!important;
}


/*Responsive*/

@media (max-width: 992px) {

	.articles-grid{
		
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(10, 1fr);
		grid-column-gap: 0px;
		grid-row-gap: 0px;
		
	}
}

@media (max-width: 768px) {

	.articles-grid{
		
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		grid-template-rows: repeat(20, 1fr);
		grid-column-gap: 0px;
		grid-row-gap: 0px;
		
	}
	nav{
		display: none;
	}
#nav-two{
display: block;
}

	.new-item h4{
		margin: 0;
		text-align: left;
		color: #34495e;
		font-size: 15px;
		text-transform: uppercase;
		/* background: #34495e; */
		padding: 5px;
		
	}
	
	
	.new-item p{
		margin: 0;
		font-size: 12px;
		margin-bottom: 10px;
		margin-top: 5px;
		margin-left: 5px;
		text-align: justify;
		color: #95a5a6;
	}
}
</style>
