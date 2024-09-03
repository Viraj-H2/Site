// FAIT AVEC OPENAI !!


/*  PROFIL DE PUISSANCE  */

/* //Decollage */
var Pdec = 1;
var Tdec = 1; //min 

/* //Montée */
var Pmon = 0.75;
var Tmon = 20; //min

/* //Croisière */
var Pcro = 0.53;
var Tcro = 180;

/*  INFO ATR 72  */

var Pmax = 4; //MW
var Diam_int = 2; //m

/*  INFO H2 */

var H_E_d = 120; //MJ/kg
var H_cout = 4; //€
var H_d = 71; //kg/m3

/*  INFO TANK  */

var wt = 0.20;
var T_encomb = 0.8;

/*  INFO VOL */

var Ticket_Cout = 100;//€ pour un vol de 3h

/*  INFO FC  */

var FC_eff = 0.5; // efficacité elec+ helice
var FC_P_d = 1.2; //kW/kg

/* INFO Turboprop */

var TURB_eff = 0.25;
var TURB_P_d = 4;



/* fait un slider en haut à gauche de 0 à 100 */

let madiv01 = document.getElementById('hybrid01');
let madiv02 = document.getElementById('hybrid02');
let madiv03 = document.getElementById('hybrid03');

let madiv04 = document.getElementById('hybrid04');
let madiv05 = document.getElementById('hybrid05');
let madiv06 = document.getElementById('hybrid06');

var slider = document.createElement('input');
slider.type = 'range';
slider.min = 0;
slider.max = 100;
slider.value = 50;
slider.style.width = '100%';
slider.style.marginBottom = '10%';
slider.style.marginTop = '3%';



var graph = document.createElement('img');
graph.style.position = 'relative';
graph.src = 'assets/img/GRAPH.png';
graph.style.width = '100%';
graph.style.zIndex = '1';


var rect_pile = document.createElement('div');
rect_pile.style.position = 'relative';
rect_pile.style.width = '100%';


rect_pile.style.marginTop =  -graph.height/6 - slider.value*graph.height/145 + 'px';
rect_pile.style.height = 50*graph.height/145 + 'px';
rect_pile.style.backgroundColor = 'blue';
rect_pile.style.zIndex = '-1';
rect_pile.style.opacity = '0.5';

var rect_turb = document.createElement('div');
rect_turb.style.position = 'relative';
rect_turb.style.width = '100%';
rect_turb.style.height ='20%';
rect_turb.style.backgroundColor = 'orange';
rect_turb.style.zIndex = '-1';
rect_turb.style.opacity = '0.5';

rect_turb.style.height = (100-50)*graph.height/145 + 'px';
rect_turb.style.marginTop = -graph.height*0.85 + 'px';


/* ajoute la photo d'un avion au centre, derriere le cercle */
var plane = document.createElement('img');
plane.style.position = 'relative';
plane.src = 'assets/img/ATR_TOP.png';
plane.style.width = '100%';
plane.style.zIndex = '-1';
//plane.style.marginTop = '-100%';
plane.style.marginLeft = '-50%';



/* fait un cercle rempli en vert au centre dont la taille varie avec le slider */
var circle = document.createElement('div');
circle.style.position = 'relative';
circle.style.width = slider.value + '%';
circle.style.height = slider.value*plane.height + '%';
circle.style.borderRadius = '20px';
circle.style.backgroundColor = 'transparent';
circle.style.zIndex = '1';
circle.style.marginLeft = '16.95%';
circle.style.opacity = '0.5';


var texte = document.createElement('div');
texte.innerHTML = '<b>Pour cet ATR 72,</b><p>Le réservoir prend la place de ' + 0 + ' passagers</p><p>La masse du réservoir est de ' + 0 + ' kg</p><p>Le poids du groupe motopropulseur est de ' + 0 + ' kg</p><h4>La masse totale du réservoir et de la propulsion est de ' + 0 + ' kg</h4><p>soit ' + 0 + ' kg de plus que pour la propulsion hybridée"</p><p>La consommation d\'hydrogène est améliorée de ' + 0 + '% par rapport à une turbine classique</p>';
texte.style.marginTop = '0%';
texte.style.textAlign = 'left';

var valeur_slider = document.createElement('div');
valeur_slider.innerHTML = '<p>50%</p>';
valeur_slider.style.marginTop = '0%';


var FC_img = document.createElement('img');
FC_img.src = 'assets/img/FC_A_CHANGER.jpeg';
FC_img.style.width = slider.value + '%'; 
FC_img.style.marginTop = 20-slider.value/3 + '%'; 
FC_img.style.cssFloat = 'left';


var Turbo_img = document.createElement('img');
Turbo_img.src = 'assets/img/turbotech.png';
Turbo_img.style.width = 100*(1-slider.value/100) + '%';
Turbo_img.style.marginTop = slider.value/2-30 + '%'; 
Turbo_img.style.cssFloat = 'right';

madiv01.appendChild(Turbo_img);
madiv02.appendChild(valeur_slider);
madiv02.appendChild(slider);
madiv03.appendChild(FC_img);
madiv04.appendChild(plane);
madiv04.appendChild(circle);
madiv05.appendChild(texte);
madiv06.appendChild(graph);
madiv06.appendChild(rect_turb);
madiv06.appendChild(rect_pile);

//madiv05.appendChild(FC_img);


/*
madiv1.appendChild(circle);
madiv1.appendChild(plane);
madiv1.appendChild(Turbo_img);
madiv2.appendChild(texte);
madiv3.appendChild(FC_img);
*/





var PART_FC = slider.value/100;
var PART_TURB = 1 - PART_FC;


var Part_Turb_mon = 0;
var Part_Turb_dec = 0;
var Part_Turb_cro = 0;



if (Pdec - PART_FC > 0) {
  Part_Turb_dec = Pdec - PART_FC;
} else {
  Part_Turb_dec = 0;
}

if (Pmon - PART_FC > 0) {
  Part_Turb_mon = Pmon - PART_FC;
} else {
  Part_Turb_mon = 0;
}

if (Pcro - PART_FC > 0) {
  Part_Turb_cro = Pcro - PART_FC;
} else {
  Part_Turb_cro = 0;
}

var mass_H2_FC = 60*Pmax*((1-Part_Turb_dec)*Tdec+(1-Part_Turb_mon)*Tmon+(1-Part_Turb_cro)*Tcro)/(H_E_d*FC_eff);


var mass_H2_TURB = 60*Pmax*(Part_Turb_dec*Tdec+Part_Turb_mon*Tmon+Part_Turb_cro*Tcro)/(H_E_d*TURB_eff);
var m_H2 = mass_H2_FC + mass_H2_TURB;
var Vol_H2 = m_H2/H_d; //m3
var m_tank = m_H2/wt; //kg
var V_tank = Vol_H2/T_encomb; //m3
var L_tank = V_tank/(3.14*Diam_int^2/4); //m
var nb_pax_moins = Math.trunc(4*L_tank);
var m_FC = PART_FC*Pmax/FC_P_d*1000; //kg
var m_TURB = PART_TURB*Pmax/TURB_P_d*1000; //kg
var m_prop = m_FC + m_TURB; //kg
var m_tank_prop = m_prop + m_tank; //kg
var opt = 4.727 ; //tonnes
var m_supp = m_tank_prop - opt*1000; //kg
var m_supp_tonnes = m_supp/1000; //tonnes



/* la longueur du cercle doit varier avec le slider */
slider.oninput = function() {

  var PART_FC = slider.value/100;
  var PART_TURB = 1 - PART_FC;


  if (Pdec - PART_FC > 0) {
    Part_Turb_dec = Pdec - PART_FC;
  } else {
    Part_Turb_dec = 0;
  }

  if (Pmon - PART_FC > 0) {
    Part_Turb_mon = Pmon - PART_FC;
  } else {
    Part_Turb_mon = 0;
  }

  if (Pcro - PART_FC > 0) {
    Part_Turb_cro = Pcro - PART_FC;
  } else {
    Part_Turb_cro = 0;
  }
  var mass_H2_FC = 60*Pmax*((1-Part_Turb_dec)*Tdec+(1-Part_Turb_mon)*Tmon+(1-Part_Turb_cro)*Tcro)/(H_E_d*FC_eff);

  mass_H2_TURB = 60*Pmax*(Part_Turb_dec*Tdec+Part_Turb_mon*Tmon+Part_Turb_cro*Tcro)/(H_E_d*TURB_eff);
  m_H2   = mass_H2_FC + mass_H2_TURB;
  Vol_H2 = m_H2/H_d; //m3
  m_tank = m_H2/wt; //kg
  V_tank = Vol_H2/T_encomb; //m3
  L_tank = V_tank/(3.14*Diam_int*Diam_int/4); //m
  nb_pax_moins = Math.trunc(4*L_tank);
  m_FC = PART_FC*Pmax/FC_P_d*1000; //kg
  m_TURB = PART_TURB*Pmax/TURB_P_d*1000; //kg
  m_prop = m_FC + m_TURB; //kg
  m_tank_prop = m_prop + m_tank; //kg
  opt = 6.354 ; //tonnes
  m_supp = m_tank_prop - opt*1000; //kg
  m_supp_tonnes = m_supp/1000; //tonnes

  amelioration_conso = Math.trunc((6248/m_tank-1)*100) //%


  texte.innerHTML = '<b>Pour cet ATR 72,</b><p>Le réservoir prend la place de ' + nb_pax_moins + ' passagers</p><p>Le poids du réservoir est de ' + Math.trunc(m_tank) + ' kg</p><p>Le poids du groupe motopropulseur est de ' + Math.trunc(m_prop) + ' kg</p><h4>La masse totale du réservoir et de la propulsion est de ' + Math.trunc(m_tank_prop/10)*10/1000 + ' tonnes</h4><p>soit ' + Math.trunc(m_supp_tonnes*1000) + ' kg de plus que pour la propulsion hybridée optimale</p><p>La consommation d\'hydrogène est améliorée de ' + amelioration_conso + '% par rapport à une turbine classique</p>';
  valeur_slider.innerHTML = '<p>'+ slider.value + '%</p>';
  circle.style.width = plane.width/7.4 + 'px';
  circle.style.height = plane.height/20 + L_tank*plane.height/30 + 'px';
  circle.style.marginTop =  - plane.height/4 - L_tank*plane.height/30 + 'px';
  circle.style.backgroundColor = 'green';
  //rect_pile.style.marginTop =  -graph.height/6 - slider.value*graph.height/145 + 'px';
  //rect_pile.style.marginTop =  -graph.height/6 + 'px';
  rect_pile.style.height = slider.value*graph.height/145 + 'px';
  
  rect_turb.style.height = (100-slider.value)*graph.height/145 + 'px';
  rect_turb.style.marginTop = -graph.height*0.85 + 'px';


  FC_img.style.width = slider.value + '%'; 
  FC_img.style.marginTop = 20-slider.value/3 + '%'; 
  Turbo_img.style.width = 100*(1-slider.value/100) + '%';
  Turbo_img.style.marginTop = slider.value/2-30 + '%'; 

}




