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
var tableauLiens = new Array("Bonduelle/index.html","kikkoman/index.html","st-sever/index.html","chbam/index.html","leroy-merlin/index.html","mealizy/index.html","espace-culturel-garonnais/index.html","espace-culturel-garonnais-affiche-2/index.html","eloise-vene/index.html","espace-culturel-garonnais-affiche-1/index.html","chateau-huradin/index.html","les-renards-de-l-atlas/index.html","mon-centre-harmonie/index.html");
var tableauLiensSelf = new Array("0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0");
var tableauLiensSociaux = new Array("https://www.facebook.com/yohann.lorent.9","http://fr.linkedin.com/pub/yohann-lorent/a5/a49/238/4","https://vimeo.com/user33108881");
function miseEnPage(){
	focusMenu();
	clicksAncres();	
	activeScroll();
	var monintervalle = setInterval(function(){ testScroll() }, 200);
	
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
		
			if(tableauLiensSelf[n]=="0"){
				 window.open(tableauLiens[n],"_self")
			}else if(tableauLiensSelf[n]=="1"){
				 window.open(tableauLiens[n])
			}
		
			 
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


function testScrollTop(){
	
	/*if($(window).scrollTop()>10){
	 	$("#menu").animate({opacity :0},function(){
			$("#fondMenu").animate({opacity :1},function(){});
		$("#menu").animate({opacity :1},function(){
			
			
			clearInterval(monintervalle);
		compteurAffiche=1;
		 $("#home").animate({color: "#fff"}, 200 );
					 $("#apropos").animate({color: "#fff"}, 200 );
					 $("#cv").animate({color: "#ce4f02"}, 200 );
					 $("#contact").animate({color: "#fff"}, 200 );
					 variableHome=0;
					 variablePresentation=0;
					 variableCv=1;
					 variableContact=0; 
					 positionMenu=2;	
		
		});	
			
		}).dequeue();
	
	}*/
	
			
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
}

function focusMenu(){
	
	$("#fondMenu").css({ opacity: 0 });	
	
	$("#menu a").each(function(i){
		if(i==positionMenu){
			$(this).css("color","#ce4f02");	
		}
		
		 $(this).mouseover(function() {	
		 	if(i!=positionMenu){
				$(this).animate({color: "#ce4f02"}, 200 );
			}
			
		 });
		 
		  $(this).mouseout(function() {	
		 	 if(i!=positionMenu){
				$(this).animate({color: "#fff"}, 200 );
			 }
		 });
		 
		 $(this).click(function() {
				
			
					 
		 });//fin du click
		 
		
		
	});
	
	
	
}

function activeScroll(){
	
	
		$(window).scroll(function(){
			
			testScrollTop();
			
		});	
}
function testScroll(){
	if($(window).scrollTop()>10){
			$("#fondMenu").animate({opacity :1},function(){});
			clearInterval(monintervalle);
	}
}

function clicksAncres(){
	
	 $('#fleche').click(function() {
     	$('html,body').animate({scrollTop: $("#presentation").offset().top-70}, 'slow');
   	 }); 
	 
	 $('#home').click(function() {
     	$('html,body').animate({scrollTop: $("#banner").offset().top-70}, 'slow');
		
   	 }); 
	 
	 
	 $('#apropos').click(function() {
     	$('html,body').animate({scrollTop: $("#presentation").offset().top-70}, 'slow');
		
   	 }); 
	 
	 $('#cv').click(function() {
     	$('html,body').animate({scrollTop: $("#cvPart").offset().top-90}, 'slow');
		
   	 }); 
	 
	 $('#contact').click(function() {
     	$('html,body').animate({scrollTop: $("#contactPart").offset().top-70}, 'slow');
		
   	 }); 	
	
}

function activeMenu(){
	
	$("#pictomenu").click(function() {
		
		if(menuSelected==0){
			
			
				$("body").append("<ul id='contentMenu'><li><a href='#banner'>HOME</a></li><li><a href='#presentation'>A PROPOS</a></li><li><a href='#cvPart'>CV</a></li><li><a href='#contactPart'>CONTACT</a></li></ul>");	
			
			
			
			
			
			$(this).children("img").attr('src', $(this).children("img").attr('src').replace('picto-menu.jpg','picto-menu.jpg'));
			
			menuSelected=1;
			
		}else if(menuSelected==1){
			
			menuSelected=0;
			$(this).children("img").attr('src', $(this).children("img").attr('src').replace('picto-menu.jpg','picto-menu.jpg'));
			$("#contentMenu").remove();
			
		}
		
	});
}