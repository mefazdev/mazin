//  HOME PAGE TYPES SECTION
$(document).ready(function () {
  $("#home__residential").click(function () {
    $(
      "#home__types__text"
    ).html(`<p class='home__types__text__effect'>When the pests are in; effective pest control, Mazin is the only solution,
           because pests can damage your property and cause health problems. We eliminate the existing ones and advice the proper measures to prevent future infestations.</P>
   `);
  });
  $("#home__commercial").click(function () {
    $(
      "#home__types__text"
    ).html(` <p class='home__types__text__effect'>Mazin is at the forefront in integrated pest management
     techniques also leading the way in new technology to document pest control methods.
     We offer a wide range of pest prevention and pest control services using the latest
      technologies and resources for anyone in need. <p/>
       `);

            
  });
  $("#home__industrial").click(function () {
    $(
      "#home__types__text"
    ). html(`<p class='home__types__text__effect'>Industry means the combination of people,
     machines, products and also the pests. It is a risky factor for all supply chain
      industries, especially in the food industry. Pests can damage your industrial stuff
       together with it may cause health hazards to the employees which in turn affects the
        performance and operations that lead to revenue loss.<br/>  </p>
  
        `);
  });

  $("#home__institutional").click(function () {
  
    $(
      "#home__types__text"
    ).html(`<p class='home__types__text__effect'> Mazin provides pest control services
     for the institutions such as schools, campuses,
     healthcare centres, nursing homes, hospitals, universities and all other large
      scale properties. We recognize the rules and regulations of each centre and
       customize the solutions in line with their requirements.  
        </p>
       `)
  
  ;
  }
 );


  $("#home__residential").click(function () {
    $("#res-bar").addClass("types__bar__active");
    $("#comm-bar").removeClass("types__bar__active ");
    $("#indust-bar").removeClass("types__bar__active ");
    $("#inst-bar").removeClass("types__bar__active ");
   
  });
  $("#home__commercial").click(function () {
    $("#res-bar").removeClass("types__bar__active ");
    $("#indust-bar").removeClass("types__bar__active ");
    $("#inst-bar").removeClass("types__bar__active ");
    $("#comm-bar").addClass("types__bar__active  ");
  
  });

  $("#home__industrial").click(function () {
    $("#res-bar").removeClass("types__bar__active ");
    $("#res-bar").addClass("types__bar  ");
    $("#inst-bar").removeClass("types__bar__active ");
    $("#indust-bar").addClass("types__bar__active ");
    $("#comm-bar").removeClass("types__bar__active ");
   
  });

  $("#home__institutional").click(function () {
    $("#res-bar").removeClass("types__bar__active ");
    $("#res-bar").addClass("types__bar  ");
    $("#inst-bar").addClass("types__bar__active ");
    $("#comm-bar").removeClass("types__bar__active ");
    $("#inst-bar").addClass("types__bar__active ");
    $("#indust-bar").removeClass("types__bar__active ");

  });
});

const observer_right = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("move__left");
    }
  });
});
observer_right.observe(document.querySelector(".right-square"));

const observer_left = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("move__right");
    }
  });
});
observer_left.observe(document.querySelector(".left-square"));

const sanit_observer_right = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("move__left");
    }
  });
});
sanit_observer_right.observe(document.querySelector(".sanit-right-square"));

const sanit_observer_left = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("move__right");
    }
  });
});
sanit_observer_left.observe(document.querySelector(".sanit-left-square"));

// HOME GET IN TOUCH ANIMATION
const getTouch_observer_right = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("move__left");
    }
  });
});

getTouch_observer_right.observe(
  document.querySelector(".getTouch-right-square")
);

const getTouch_observer_left = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("move__right");
    }
  });
});
getTouch_observer_left.observe(document.querySelector(".getTouch-left-square"));

const toBig_observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("icon_toBig");
    }
  });
});
toBig_observer.observe(document.querySelector("#home__security__row__img1  "));

const toBig_observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("icon_toBig");
    } 
  });
});
toBig_observer2.observe(document.querySelector("#home__security__row__img2  "));

const toBig_observer3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("icon_toBig");
    } 
  });
});
toBig_observer3.observe(document.querySelector("#home__security__row__img3  "));

const toBig_observer4 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("icon_toBig");
    } 
  });
});
toBig_observer4.observe(document.querySelector("#home__security__row__img4  "));

const toBig_observer5 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("icon_toBig");
    } 
  });
});
toBig_observer5.observe(document.querySelector("#home__security__row__img5  "));



const fade = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("div_toBig");
    } 
  });
});
fade.observe(document.querySelector("#home__gallery h2  "));
// fade.observe(document.querySelector("#home__sanit__container h2  "));
fade.observe(document.querySelector("#home__service__container h2  "));
fade.observe(document.querySelector("#home__service__container h2  "));


const toTop_observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("toTop");
   
    } 
  });
});
toTop_observer.observe(document.querySelector(".home__types1"));
toTop_observer.observe(document.querySelector(".home__types2 "));
toTop_observer.observe(document.querySelector(".home__types3 "));
toTop_observer.observe(document.querySelector(".home__types4"));
// toTop_observer.observe(document.querySelector("#home__types__container p  "));
// toTop_observer.observe(document.querySelector("#types__extra__content"));





$(document).ready(function () {
  $("#home__about__read_more").click(function(){
    var content = document.getElementById("home__about__extra_content");
    var btn = document.getElementById("home__about__read_more");
    content.classList.toggle('show');
    if (content.classList.contains("show")) {
      btn.innerHTML = "Read Less";
  } else {
      btn.innerHTML = "Read More";
  }
  })
})



$(document).ready(function () {
  $("#sani__read__more__button").click(function(){
    var content = document.getElementById("sani__extra__text");
    var btn = document.getElementById("sani__read__more__button");
    content.classList.toggle('show__sani__text');
    if (content.classList.contains("show__sani__text")) {
      btn.innerHTML = "Read Less";
  } else {
      btn.innerHTML = "Read More";
  }
  })
})



$(document).ready(function () {
  $("#types__read__more__btn").click(function(){
    var content = document.getElementById("types__extra__content");
    var btn = document.getElementById("types__read__more__btn");
    content.classList.toggle('showMore');
    if (content.classList.contains("showMore")) {
      btn.innerHTML = "Read Less";
  } else {
      btn.innerHTML = "Read More";
  }
  })

})



$(document).ready(function () {

  $("#home__residential").click(function () {
    $("#home__types__button").text("Get Residential Quote")
   

    $("#types__extra__content").html(
      `<p  class='home__types__text__effect'>
      Mazin pest control offers effective, safe and reliable home pest control solutions to keep you away from the
      hazards caused
      by infectious pests. To safeguard your home from pest infestations we provide you with a team of highly
      skilled exterminators having proven expertise.
      We help you in dealing with any kind of pests at home, where you dwell with your loved ones.<br />

      Our policy is to provide quality and customized residential pest control services to meet your individual
      needs.
      The first step to effective pest control is to limit reproduction and 100% satisfaction is guaranteed. We
      identify the pest problems together with their hideouts and food sources and recommend corrective and
      preventive measures.<br />

      Our chemical treatments do not harm any living and non-living organisms. Dealing with household pests is
      usually
      a separate service other than dealing with the companies. Mazin pest control company adopt integrated natural
      insect
      repellants and many chemical-free techniques for exterior webs and insect entry points. <br />

      We always choose a safe and effective approach with WHO verified odourless chemicals, doing it without making
      any mess.
      As pests are the carriers of diseases, we efficiently provide a dedicated service using alternative methods
      depending on which is to be infested. Turn on to us for removing bed bugs, insects, cockroaches and all
      similar ones to stop them from breeding and get an effective solution by our thorough personnel inspection,
      ensuring eco-friendly and odourless first-class solutions. <br />

      Mazin destroys the pests once and for all by providing a long-term solution without the need to vacate your
      premises during
      or after the treatment. Our staff understands and cares for your problem and works with you to eradicate your
      pests,
      tackling your problem safely, quickly, efficiently. Whatever be your problem, trust us to solve it.
      </p>`
    )
    });
  $("#home__commercial").click(function () {
  $("#home__types__button").text("Get Commercial Quote")
  
 $("#types__extra__content").html(`<p  class='home__types__text__effect'>
  Mazin protects your place and operations
  from unwanted pests with the highest levels of risk management, reassurance and responsiveness. Our experts are dedicated to understanding pest behaviours with minimal shutdown and minimal disruption. Commercial buildings vary from one another depending on the business involved and we create separate treatment plans to account for these variations. There come many uncontrollable factors on suspicion due to the custom environments and we offer many preventive measures and solutions. The pests also consider the environment, the adaptation is also different from another. So the commercial pests would not be found in the residential area.
                
                Pest infestation at a commercial place can have devasting consequences on the reputation and revenue. Mazin can help you in providing comprehensive
                 pest control solutions to keep your establishment free from all such pest problems.
                  We take an integrated pest management approach starting from the inspection, providing treatment, monitoring and evaluation to meet all your pest control needs. The assessment procedure includes :  <br/>
                
                •<b> Identify the pests &nbsp </b>
                •<b> Confirm the level of infestation &nbsp</b>
                • <b> Look for the damage on items &nbsp </b>
                • <b> Evaluate issues attracting the pests &nbsp </b>
                • <b> Checks how pests get in &nbsp </b>
                • <b> Create a treatment plan based on the needs &nbsp </b>
                • <b> Deliver a safe program. </br> </b>
                
                We do open communication at each stage of the process keeping an up-to-date pest management plan and provide an access to the information and documentation of the services you opted for. Our quality commercial pest control services can offer coverage on all varieties of common pests without putting your business reputation at risk and save you from unnecessary stress. 
                As pests invade you we must provide you with a safe and healthy working environment and keep your office pest free. Our service provides you with the best and safest pest control treatments combined with excellent and superior customer service through fair and environmentally responsible practices.
                 If you need pest control service – contact MAZIN. <br/>
                
                Mazin commercial pest control benefits : <br/> 
                • <b> Health benefits &nbsp </b>
                • <b> Fewer toxins &nbsp </b>
                • <b>  Accurate Identification &nbsp </b>
                • <b>  Accurate treatment &nbsp </b>
                • <b>  Less discomfort &nbsp </b>
                • <b>  Discovering the source &nbsp </b>
                • <b>  Cheaper &nbsp </b>
                • <b>  Detailed Plans. </br>  </b>
                
                Workplaces have to be cleaned regularly for a healthy working environment. We are a licensed entity that uses biologically top-grade pesticides and tools to remove pests without causing any harm to the surroundings in any sense. We help you get rid of all those from the pest category on your decided schedules and requirements. 
                
                Our advantage is we use non-toxic methods to use in conservation areas with instant results. Mazin is the best pest control service with professionally trained technicians at an affordable price.
                </p>`)
  
  });
  $("#home__industrial").click(function () {
    $("#home__types__button").text("Get Industrial Quote")
    $("#types__extra__content").html(`<p class='home__types__text__effect'>      Mazin uses integrated pest management for industrial manufactures to ensure your standards. There can be a lot of unwanted pests that might invade your pests which has to be eradicated. We do step by step procedures for industrial based treatments and provide the best in class, time and cost-effectiveness.
    We have experts with the immense experience to offer effective pest control treatments. Our potential solution to solve your pest problems ensures to inspect the affected area and extend highly demanded excellent features without any adverse effects to the surroundings. <br/>
    
    Mazin recognises your role and develops a comprehensive approach providing the highest level of reassurance to contamination and full compliance to regulatory requirements. Our principle is to minimize the risk of pests to treated areas followed the regular inspection to maintain resilience and full protection. <br/>
    
    Our talented and specialized staff define effective defences and advice on the working practices to reduce the reinfestation of pests. We are dedicated to executing the pest removing operations within the scheduled time frame cost-effectively and reliably.<br/>
    
    Mazin put forward the most comprehensive protection plans in the industry. Our highlight is integrated pest management strategies that are reliable and focus on sustainable environmental practices to treat your problem in the top possible manner. The first step taken towards the treatment is the inspection of the infested area. <br/>
    
    We perform a harmless treatment that does not affect the industrial processes in any manner and conduct it as
     a follow-up service if necessary. Professional assistance is here for all harmful pests that can be fatal,
      using quality repellants and keeping your schedule and other requirements in the prior notice
    . Pest population control is necessary as they cause damage to human health, the economy and our existence.
     </p>`)
    });
    $("#home__institutional").click(function () {
      $("#home__types__button").text("Get Institutional Quote")
      $("#types__extra__content").html(`
      <p <p class='home__types__text__effect'>  
      The pest control
      depends on the criterion like : <br/>
      • <b>Size  </b>&nbsp
      • <b>Activities </b>&nbsp
      • <b>Type of pests </b>&nbsp
      • <b>Level of infestation </b>&nbsp
      • <b>Treatment impacts </b>&nbsp
      • <b>Rules and Regulations to follow</b> <br/>
      
      We use integrated pest control techniques to eliminate the pests reducing the possible damages to the institution, its occupants and the environment. We comply with the numerous health and sanitation
       related laws and work diligently to serve you with the best plan. The commonly used pest management methods are : <br/>
      
      • <b>Mechanical traps </b> &nbsp
      • <b>Natural predators </b>&nbsp
      • <b>Plant oils</b> &nbsp
      • <b>Natural products </b>&nbsp
      • <b>Pesticides </b><br/>
       
      Being the premier pest management service provider in the industry, with a dedicated team of employees, utilizing many certified procedures, understands the business criticality of facilities and ensure to provide the best of services
       to the customers. We constantly monitor and improve our services through the implementation of management
        processes, training and skill development. We understand the vital dynamic environment, early detection 
        and continuous monitoring are essential to minimize the risk of pest infestation. <br/>
      
      We are engaged in offering the finest quality pest control services to clients.
       Our experienced experts are backed latest spraying equipment and optimum quality pesticides to ensure the elimination of pests.
       Our institutional pest service is done in a timely and cost-effective manner.
      </p>
      `)
      });

})


  

