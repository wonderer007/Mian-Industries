/* --------------------------------------------------------- 
	Main Structure
------------------------------------------------------------ */

Cufon.now();
	var $content = $('#content'),
	    $contentDD = $('#content>dd');

$(document).ready(function(){
	$content.css({marginTop:'164px'});
	
	$("a[rel^='prettyPhoto']").prettyPhoto({theme:'facebook'});
	clearInput('contact_form');
	$contentDD.css({display:'none'})
});
$(window).load(function(){
	
	$content.animate({marginTop:'174px'}, 300,  function(){
		    $(this).animate({marginTop:'164px'}, 400);
			$(this).prev("header").find("h1 a").fadeIn(500, function(){
				    $(this).next().fadeIn(300);
				});
		});
	
	$contentDD.css({display:'block'})

     $('#slider').nivoSlider({effect:'slideInRight', slices:10});
	 $('#gallery').tinycarousel();

	 $contentDD.css({display:'none'});
});

$(function(){
	
	$('#content:not(.nav_block)>dt:not(.active) a,footer .privacy:not(.active) a[rel=privacy]').live('click',function(){
		var next=this.rel=='privacy'?$('#privacy'):$(this).parent().next(),
			width=next.width(),
			parent=next.parent(),
			visible=parent.find('>dd:visible').css({overflow:'hidden'})
		parent.addClass('nav_block')
		$('#content>dt,.privacy').removeClass('active')
		$(this).parent().addClass('active')
		if(this.rel=='privacy')$('#content>dt>a').removeClass('active').animate({opacity:0})
		if(parent.css('left')!=0)
			next.parent().animate({left:0})
		next.show().css({width:'64px'}).stop().animate({width:width+'px'},{
		  step:visible.length?function(now){
			visible.width(width-now)
		}:'',complete:function(){
			next.css({overflow:'visible'})
			visible.css({width:width+'px'}).hide()
			parent.removeClass('nav_block')
		}})
		return false
	})
	
	$('.active a,#content.nav_block').live('click',function(){
		return false
	})
		
	
	$('#content>dt>a:not(.active)').css({opacity:0})
	.live('mouseover',function(){
		$(this).stop().animate({opacity:1})
	})
	.live('mouseout',function(){
		$(this).stop().animate({opacity:0})
	})
	.live('click',function(){
		$(this).addClass('active').parent().siblings().find('>a').removeClass('active').stop().animate({opacity:0})
	})
})


/* --------------------------------------------------------- 
	Clear Input function
------------------------------------------------------------ */

function clearInput(el){
	if(el instanceof Array)
		for(var i=0;i<el.length;i++)
			clearInput(el[i])
	el=document.getElementById(el)
	if(el&&el.tagName.toLowerCase()==''){
		var a=el.getElementsByTagName('*')
		for(var i in a){
			if(a[i].value){
				if(!a[i].defaultValue)a[i].defaultValue=a[i].value
				a[i].onfocus=function(){if(this.value==this.defaultValue)this.value=''}
				a[i].onblur=function(){if(this.value=='')this.value=this.defaultValue}
			}			
			if((a[i].rel)&&(/(submit)|(reset)/.test(a[i].rel)))a[i].onclick=function(){el[this.rel]();return false}
		}
	}
}



/* --------------------------------------------------------- 
	Form Validation function
------------------------------------------------------------ */


 $(document).ready(function() {

      var services_inner ;

      $("#twill_tape").live( "click", function(){
        services_inner = $('#services_inner').html();
        $('#services_inner').html('<article> <h1 class="color_orange">Twill Tape</h1> <div id="pane1" class="scroll-pane about" > <img src="images/services/twilltape1.jpg" class="alignright20 pic"> <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem fugiat quo voluptas nulla pariatur voluptatibus maiores alias consequatur perferendis doloribus asperiores.</p> <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident, pariatur voluptatibus maiores alias consequatur perferendis.</p> <div class="clear"></div> <img src="images/services/twilltape2.jpg" class="alignright20 pic"> <h3>Why Choose Us?</h3> <ul> <li><span class="dropcapspot2">1</span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat </li> <li><span class="dropcapspot2">2</span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat </li> <li><span class="dropcapspot2">3</span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat </li> </ul> </div> </article>');
      });

      $("#cut_febrics").live( "click", function(){
        services_inner = $('#services_inner').html();
        $('#services_inner').html('<article> <h1 class="color_orange">Ready to cut fabric</h1> <div id="pane1" class="scroll-pane about" > <img src="images/services/twilltape1.jpg" class="alignright20 pic"> <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem fugiat quo voluptas nulla pariatur voluptatibus maiores alias consequatur perferendis doloribus asperiores.</p> <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident, pariatur voluptatibus maiores alias consequatur perferendis.</p> <div class="clear"></div> <img src="images/services/twilltape2.jpg" class="alignright20 pic"> <h3>Why Choose Us?</h3> <ul> <li><span class="dropcapspot2">1</span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat </li> <li><span class="dropcapspot2">2</span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat </li> <li><span class="dropcapspot2">3</span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat </li> </ul> </div> </article>');
      });


      $("#garments").live( "click", function(){
        services_inner = $('#services_inner').html();
        $('#services_inner').html('<article> <h1 class="color_orange">Garments</h1> <div id="pane1" class="scroll-pane about" > <img src="images/services/twilltape1.jpg" class="alignright20 pic"> <p> We are specialized in garments and exporting high quality garments to our client across Pakistan, our garments include all types of ages ranges including men, women and children. </p> <h3 class="color_orange">Woven</h3> <p> In woven we have ladies eastern, western, party wears and ethnic dresses of all group ages </p> <h3 class="color_orange">Knit Wear</h3> <p> Our knit wears includes men T-shirts, trousers, sweat shirts and track suits </p> <div class="clear"></div> <div class="clear" style="height:40px;"></div> </div> </article>');
      });


      $("#embroidery").live( "click", function(){
        services_inner = $('#services_inner').html();
        $('#services_inner').html('<article> <h1 class="color_orange">Embroidery</h1> <div id="pane1" class="scroll-pane about" > <img src="images/services/twilltape1.jpg" class="alignright20 pic"> <p> We have some best in class embroidery machines available to compete with latest design challenges. </p> <div class="clear"></div> <div class="clear" style="height:40px;"></div> </div> </article>');
      });




      $("#services").live( "click", function(){
        $('#services_inner').html(services_inner);
      });



      $('#submit_btn').click(function(){
        
        var dataString = $('#contact_form').serialize();
        $.ajax({
          type: "POST",  
          url: 'send_form_email.php',  
          data: dataString,
          dataType: 'json',
          success: function(data) {
            if(data.success == 0) {
              if(data.name_msg != '')
                $('#name_msg').html(data.name_msg);
              if(data.email_msg != '')
                $('#email_msg').html(data.email_msg);
              if(data.email_msg != '')
                $('#message_msg').html(data.message_msg);
            }
            else if(data.success == 1)
            {
              $('#name_msg').html(data.name_msg);
              $('#email_msg').html(data.email_msg);
              $('#message_msg').html(data.message_msg);
              
              $('#contact_name').val('');
              $('#contact_email').val('');
              $('#contact_message').val('');
              
              $('#success_message').show();
            }
            
          },
          error: function() {
            
          }
        });
        
        return false;
      });
    }
    );




/* --------------------------------------------------------- 
	Gallery Caption function
------------------------------------------------------------ */
$(document).ready(function(){									
		var thumbs = $("ul li img");		
		
		for (var i = 0, ii = thumbs.length; i < ii; i++){
			if (thumbs[i].title && thumbs[i].title.length > 0)
			{			
				var imgtitle = thumbs[i].title;		
				$(thumbs[i]).wrap('<div class="wrapper" />').				
				after('<div class=\'caption\'>' + imgtitle + '</div>').
				removeAttr('title');
											
			}					
		}
					
	$('.wrapper').hover(
		function(){
			$(this).find('img').animate({opacity: ".6"}, 500);		
			$(this).find('.caption').animate({top:"-220px"}, 500);			
		}, 
		function(){
			$(this).find('img').animate({opacity: "1.0"}, 500);					
			$(this).find('.caption').animate({top:"220px"}, 1000);
		}		
		);			
	});


/* --------------------------------------------------------- 
	Form field onFocus function
------------------------------------------------------------ */

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_setTextOfTextfield(objName,x,newText) { //v3.0
  var obj = MM_findObj(objName); if (obj) obj.value = newText;
}

function MM_jumpMenu(targ,selObj,restore){ //v3.0
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}



/* --------------------------------------------------------- 
	Main Slideshow function
------------------------------------------------------------ */


function slideSwitch() {
    var $active = $('#slideshow IMG.active');

    if ( $active.length == 0 ) $active = $('#slideshow IMG:last');

    // use this to pull the images in the order they appear in the markup
    var $next =  $active.next().length ? $active.next()
        : $('#slideshow IMG:first');


    $active.addClass('last-active');

    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}

$(function() {
    setInterval( "slideSwitch()", 20000 );
});


