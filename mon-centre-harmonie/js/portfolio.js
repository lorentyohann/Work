// JavaScript Document
positionMenu=0;
compteurAffiche=0;
variableHome=0;
variablePresentation=0;
variableCv=0;
variableContact=0;
variableCompetences=0;
menuSelected=0;
var tableauCompetences = new Array();
var tableauLiens = new Array("http://www.moncentreharmonie.fr/wp/","http://www.agencebliss.com","http://www.agencebliss.com/bliss2014","http://sotragri.fr","http://www.agencebliss.com/PROJETS/ATHENEE_SITE/","http://www.agencebliss.com/PROJETS/TERRE_CORAIL/SITE/","http://www.lorent-yohann.com/sites/BLISS_PAPIER/","http://www.pavillon-royal.com","http://www.well-staff.fr/","http://www.lorent-yohann.com/sites/METAL_DESIGN/","http://www.hippodrome-pau.com","http://www.myloetmoi.com","http://www.agencebliss.com/PROJETS/FERME_EN_VILLE/webApp/Quiz1/ipad3.html","https://vimeo.com/108326901");
var tableauLiensSociaux = new Array("https://www.facebook.com/yohann.lorent.9","http://fr.linkedin.com/pub/yohann-lorent/a5/a49/238/4","https://vimeo.com/user33108881");
function miseEnPage(){
	focusMenu();
	clicksAncres();	
	activeScroll();
	
	$("#blockTexte").css({opacity :0});
	$("#blockTexte p").css({opacity :0});
	$("#blockTexte").animate({"margin-top" :"20%",opacity :1},800,"easeOutQuad",function(){
		$("#blockTexte p").animate({opacity :1},600,"easeOutQuad",function(){ }).dequeue()
	}).dequeue();
	
	
	$("#telechargerCV").mouseover(function() {	
		$(this).css('cursor','pointer');
		$("#telechargerCV").animate({backgroundColor: "#e6397e"}, 200 );	
	});
		 
	$("#telechargerCV").mouseout(function() {	
	$(this).css('cursor','auto');
		$("#telechargerCV").animate({backgroundColor: "#14c0b0"}, 200 );
	});
	
	$("#telechargerCV").click(function() {	
			 window.open("curiculum.pdf")
		});
	
	
	$(".contenuCompetences .competence").each(function(r){
		
	
		percent = Math.round(100*$(this).children(".interieurCompetence").width()/$(this).width());
		
		tableauCompetences[r]=percent;
		$(this).children(".interieurCompetence").css("width","0");
		
						
	});
	
	$(".itemPortfolio ").each(function(n){
		$(this).children("div").children(".picto").css({opacity :0});
	
		$(this).children("div").mouseover(function() {	
			$(this).css('cursor','pointer');
			$(this).children(".hover").animate({"top" :"-200px"},800,"easeOutQuad",function(){
				
			}).dequeue();
			$(this).children(".picto").animate({opacity :1},600,"easeOutQuad",function(){ }).dequeue();
			$(this).children("h6").animate({color: "#14c0b0"}, 200 );
		});
		 
		$(this).children("div").mouseout(function() {	
			$(this).css('cursor','auto');
			$(this).children(".picto").animate({opacity :0},600,"easeOutQuad",function(){
				
			}).dequeue()
			$(this).children(".hover").animate({"top" :"195px"},800,"easeOutQuad",function(){}).dequeue();
			
			$(this).children("h6").animate({color: "#e6397e"}, 200 );
		});
		
		$(this).children("div").click(function() {	
			 window.open(tableauLiens[n])
		});
		
						
	});
	
	$("#blockTexte a ").each(function(n){
		
	
		$(this).mouseover(function() {	
			$(this).children("img").animate({opacity :0.6},400,"easeOutQuad",function(){ }).dequeue();
		});
		 
		$(this).mouseout(function() {	
			$(this).children("img").animate({opacity :1},400,"easeOutQuad",function(){ }).dequeue();
			
		});
		
		$(this).click(function() {	
			 window.open(tableauLiensSociaux[n])
		});
		
						
	});
	$("#blocklogos a ").each(function(n){
		
	
		$(this).mouseover(function() {	
			$(this).children("img").animate({opacity :0.6},400,"easeOutQuad",function(){ }).dequeue();
		});
		 
		$(this).mouseout(function() {	
			$(this).children("img").animate({opacity :1},400,"easeOutQuad",function(){ }).dequeue();
			
		});
		
		$(this).click(function() {	
			 window.open(tableauLiensSociaux[n])
		});
		
						
	});

	
}




function focusMenu(){
	
	//$("#fondMenu").css({ opacity: 0 });	
	
	$("#menu a").each(function(i){
		
		
		 $(this).mouseover(function() {	
		 	
				$(this).animate({color: "#ce4f02"}, 200 );
			
			
		 });
		 
		  $(this).mouseout(function() {	
		 	
				$(this).animate({color: "#fff"}, 200 );
			
		 });
		 
		 $(this).click(function() {
				
			
					 
		 });//fin du click
		 
		
		
	});
	
	
	
}

function activeScroll(){
	
	
		$(window).scroll(function(){
			
			
			minAccueil=$("#banner").offset().top;
			maxcAccueil=($("#banner").height()-70);
			if($(window).scrollTop() >= minAccueil && $(window).scrollTop() <= maxcAccueil){
				if(variableHome==0){
					$("#home").animate({color: "#ce4f02"}, 200 );
					 $("#apropos").animate({color: "#fff"}, 200 );
					 $("#cv").animate({color: "#fff"}, 200 );
					 $("#contact").animate({color: "#fff"}, 200 );
					 variableHome=1;
					 variablePresentation=0;
					 variableCv=0;
					 variableContact=0;
					 positionMenu=0;
					 
				};
				 if(compteurAffiche==0){
					$("#menu").animate({opacity :0},function(){}).dequeue();
				
				 }
			}
			
			minPresentation=$("#presentation").offset().top-70;
			maxPresentation=($("#presentation").offset().top+$("#presentation").height()-70);
			if($(window).scrollTop() >= minPresentation && $(window).scrollTop() <= maxPresentation){
				if(variablePresentation==0){	
					 $("#home").animate({color: "#fff"}, 200 );
					 $("#apropos").animate({color: "#ce4f02"}, 200 );
					 $("#cv").animate({color: "#fff"}, 200 );
					 $("#contact").animate({color: "#fff"}, 200 );
					 variableHome=0;
					 variablePresentation=1;
					 variableCv=0;
					 variableContact=0;
					 positionMenu=1;
					 
										
				}
				 if(compteurAffiche==0){
					$("#fondMenu").animate({opacity :1},function(){});
					$("#menu").animate({opacity :1},function(){});
					compteurAffiche=1;
				 }
				
			}
			
			minCv=($("#presentation").offset().top+$("#presentation").height()-70);
			maxCv=($("#cvPart").offset().top+$("#cvPart").height()-70);
			if($(window).scrollTop() >= minCv && $(window).scrollTop() <= maxCv){
				 if(variableCv==0){
					 $("#home").animate({color: "#fff"}, 200 );
					 $("#apropos").animate({color: "#fff"}, 200 );
					 $("#cv").animate({color: "#ce4f02"}, 200 );
					 $("#contact").animate({color: "#fff"}, 200 );
					 variableHome=0;
					 variablePresentation=0;
					 variableCv=1;
					 variableContact=0; 
					 positionMenu=2;
				 };
			}
			
			minContact=($("#contactPart").offset().top-$(window).height());
			maxContact=($("#contactPart").offset().top+$("#contactPart").height);
			
			if($(window).scrollTop() >minContact ){
				if(variableContact==0){
					 $("#home").animate({color: "#fff"}, 200 );
					 $("#apropos").animate({color: "#fff"}, 200 );
					 $("#cv").animate({color: "#fff"}, 200 );
					 $("#contact").animate({color: "#ce4f02"}, 200 );
					 variableHome=0;
					 variablePresentation=0;
					 variableCv=0;
					 variableContact=1;
					 positionMenu=3; 
				};
			}	
			
			minCompetences=$("#competencesAncre").offset().top-((30/100)*$(window).height());
			if($(window).scrollTop() >= minCompetences ){
				
				 if(variableCompetences==0){
					variableCompetences=1;
					
					$(".contenuCompetences .competence").each(function(r){
						
						$(this).children(".interieurCompetence").animate({"width" :tableauCompetences[r]+"%",opacity :1},1200,"easeOutQuad",function(){}).dequeue();
										
					});
					
					
					
				 };
			}
			
			
		});	
}

function clicksAncres(){
	 
	 $('#home').click(function() {
     	 window.open("../index.html","_self");
		
   	 }); 
	 
	 
	 $('#apropos').click(function() {
     	window.open("../index.html#presentation","_self");
		
   	 }); 
	 
	 $('#cv').click(function() {
     	window.open("../index.html#cvPart","_self");
		
   	 }); 
	 
	 $('#contact').click(function() {
     	window.open("../index.html#contactPart","_self");
		
   	 }); 	
	
}

function activeMenu(){
	
	$("#pictomenu").click(function() {
		
		if(menuSelected==0){
			
			
				$("body").append("<ul id='contentMenu'><li><a href='../index.html'>HOME</a></li><li><a href='../index.html#presentation'>A PROPOS</a></li><li><a href='../index.html#cvPart'>CV</a></li><li><a href='../index.html#contactPart'>CONTACT</a></li></ul>");	
			
			
			
			
			
			$(this).children("img").attr('src', $(this).children("img").attr('src').replace('picto-menu.jpg','picto-menu.jpg'));
			
			menuSelected=1;
			
		}else if(menuSelected==1){
			
			menuSelected=0;
			$(this).children("img").attr('src', $(this).children("img").attr('src').replace('picto-menu.jpg','picto-menu.jpg'));
			$("#contentMenu").remove();
			
		}
		
	});
}