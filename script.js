var rap=0;
var kap=0;
var b=[];
var c=[];
var buttons=[1,2,3,4,5,6,7,8,9,10,11,12];
var i=0;
var count=0;
var moves=0;
var kappa=0;
var logo=document.getElementById('logo');
var home=document.getElementById('home');
var reset=document.getElementById('reset');
var winner=document.getElementById('winner');
var pre=document.getElementById('pre');
var container=document.getElementById('container');
var image=document.getElementById('image');
var b1=document.getElementById('b1');
var b2=document.getElementById('b2');
var b3=document.getElementById('b3');
var b4=document.getElementById('b4');
var b5=document.getElementById('b5');
var b6=document.getElementById('b6');
var b7=document.getElementById('b7');
var b8=document.getElementById('b8');
var b9=document.getElementById('b9');
var b10=document.getElementById('b10');
var b11=document.getElementById('b11');
var b12=document.getElementById('b12');
 var total=document.getElementById('total');
function log()
{ logo.style.display="none";
container.style.display="block";

}
setTimeout(log,2000);
var index=0;
function win()
{ winner.style.display="block";
  reset.style.display="block";
  container.style.display="none";
  pre.innerHTML=moves;
  if(moves>=6 && moves<=10)
  { image.innerHTML='<img src="Gold.jpg" id="gold">';
  }
  if(moves>10 && moves<=15)
  { image.innerHTML='<img src="Silver.jpg"  id="gold">';
  }
    if(moves>15)
  { image.innerHTML='<img src="Bronze.jpg"  id="gold">';
  }
    
}
function check()
{ 
  if(b[0]==b[1])
  { document.getElementById('b'+c[0]).innerHTML='<img src="img'+b[0]+'.png">';
 document.getElementById('b'+c[1]).innerHTML='<img src="img'+b[1]+'.png">';
    document.getElementById('b'+c[0]).disabled=true;
    document.getElementById('b'+c[1]).disabled=true;
  buttons=buttons.filter((i)=>{
    if(i!=c[0] && i!=c[1]){
      return i;
    }
  });
  b=[];
  c=[];
    kappa++;
   if(kappa==6)
    { win();
    }
  }
   if(b[0]!=b[1])
  { 
    buttons.forEach(gh);
    function gh(item){
      document.getElementById('b'+item).disabled=true;
    }
    function see(){
      document.getElementById('b'+c[0]).innerHTML="?";
    document.getElementById('b'+c[1]).innerHTML="?";
      document.getElementById('b'+c[0]).disabled=false;
    document.getElementById('b'+c[1]).disabled=false;
    buttons.forEach(gh);
    function gh(item){
      document.getElementById('b'+item).disabled=false;
    }
      
      b=[];
     c=[];
    }
    setTimeout(see,700);
  }
}
function aoc()
{ index=1;
  b1.innerHTML='<img src="img1.png">';
  b.push(index);
  b1.disabled=true;
  c.push(1);
  count++;
  if(count%2==0)
  { moves++;
total.innerHTML=moves;
    check();
  }
}
function boc()
{ index=4;
  b2.innerHTML='<img src="img4.png">';
  b.push(index);
  c.push(2);
 count++;
  b2.disabled=true;
  if(count%2==0)
  { moves++;
total.innerHTML=moves;
    check();
  }
}
function coc()
{ index=3;
  b3.innerHTML='<img src="img3.png">';
  b.push(index);
  c.push(3);
 count++;
  b3.disabled=true;
  if(count%2==0)
  { moves++;
total.innerHTML=moves;
    check();
  }
}
function doc()
{ index=2;
  b4.innerHTML='<img src="img2.png">';
  b.push(index);
  c.push(4);
 count++;
  b4.disabled=true;
  if(count%2==0)
  { moves++;
total.innerHTML=moves;
    check();
  }
}
function eoc()
{ index=5;
  b5.innerHTML='<img src="img5.png">';
  b.push(index);
  c.push(5);
 count++;
  b5.disabled=true;
  if(count%2==0)
  { moves++;
total.innerHTML=moves;
    check();
  }
}
function foc()
{ index=1;
  b6.innerHTML='<img src="img1.png">';
  b6.disabled=true;
  b.push(index);
  c.push(6);
 count++;
  if(count%2==0)
  { moves++;
total.innerHTML=moves;
    check();
  }
}
function goc()
{ index=6;
  b7.innerHTML='<img src="img6.png">';
  b.push(index);
  c.push(7);
 count++;
  b7.disabled=true;
  if(count%2==0)
  { moves++;
total.innerHTML=moves;
    check();
  }
}
function hoc()
{ index=2;
  b8.innerHTML='<img src="img2.png">';
  b.push(index);
  c.push(8);
 count++;
  b8.disabled=true;
  if(count%2==0)
  { moves++;
total.innerHTML=moves;
    check();
  }
}
function ioc()
{ index=5;
  b9.innerHTML='<img src="img5.png">';
  b.push(index);
  c.push(9);
 count++;
  b9.disabled=true;
  if(count%2==0)
  { moves++;
total.innerHTML=moves;
    check();
  }
}
function joc()
{ index=4;
  b10.innerHTML='<img src="img4.png">';
  b.push(index);
  c.push(10);
 count++;
  b10.disabled=true;
  if(count%2==0)
  { moves++;
total.innerHTML=moves;
    check();
  }
}
function koc()
{ index=3;
  b11.innerHTML='<img src="img3.png">';
  b.push(index);
  c.push(11);
 count++;
  b11.disabled=true;
  if(count%2==0)
  { moves++;
total.innerHTML=moves;
    check();
  }
}
function loc()
{ index=6;
  b12.innerHTML='<img src="img6.png">';
  b.push(index);
  c.push(12);
 count++;
  b12.disabled=true;
  if(count%2==0)
  { moves++;
total.innerHTML=moves;
    check();
  }
}
