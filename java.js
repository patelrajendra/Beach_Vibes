function results(){

var visitor=document.getElementById("visit").value ;
var hotel;
var weather;
var connect=document.getElementById("connect").value;
var state=document.getElementById("state").value;
var out;
console.log(connect+visitor+state);
//STATE : GUJARAT
if(state ==="gujarat"){
  out = "Chakratirth Beach";
if(visitor ==="high"){
  if(connect === "very good"){
    out = "jampore beach";
  }
  if(connect == "good"){
    out = "mandvi beach";
  }
  if(connect == "bad"){
    out="nagoa beach";
  }
}
if(visitor == "low"){
  if(connect =="good"){
    out = "jampore breach";
  }
  if(connect =="very good"){
    out = "mandvi beach";
  }
  if(connect == "bad"){
    out="Chakratirth Beach";
  }
}
if(visitor =="mid"){
  if(connect == "very good"){
    out = "Suvali Beach";
  }
  if(connect =="bad"){
    out = "Chakratirth Beach";
  }
  if(connect == "good"){
    out="nagoa beach";
  }
}
}

//STATE : MAHARASTRA
if(state == "maharastra"){
  out = "Chakratirth Beach";
if(visitor == "high"){
  if(connect == "very good"){
    out = "Ganapatipule Beach";
  }
  if(connect == "good"){
    out = "Bordi Beach";
  }
  if(connect == "bad"){
    out="Shriwardhan Harihareshwar";
  }
}
if(visitor =="low"){
  if(connect == "good"){
    out = "Juhu Beach";
  }
  if(connect == "very good"){
    out = "Shriwardhan Harihareshwar";
  }
  if(connect == "bad"){
    out="Bordi Beach";
  }
}
if(visitor =="mid"){
  if(connect =="very good"){
    out = "Madh Island Beach";
  }
  if(connect == "bad"){
    out = "Mandwa and Kihim Beach";
  }
  if(connect == "good"){
    out="Bordi Beach";
  }
}}

//STATE : KARNATAKA
if(state == "karnataka"){
  out = "Panambur Beach";
if(visitor == "high"){
  if(connect == "very good"){
    out = "NITK Beach";
  }
  if(connect == "good"){
    out = "Sasihithlu Beach";
  }
  if(connect == "bad"){
    out="Someshwar Beach";
  }
}
if(visitor =="low"){
  if(connect == "good"){
    out = "Mukka Beach";
  }
  if(connect == "very good"){
    out = "Ullal beach";
  }
  if(connect == "bad"){
    out="Batapady Beach";
  }
}
if(visitor =="mid"){
  if(connect == "very good"){
    out = "Gangolli Beach";
  }
  if(connect == "bad"){
    out = "Kaup Beach";
  }
  if(connect == "good"){
    out="Full Moon Beach";
  }
}
}


//STATE : Kerela
if(state == "kerela"){
  out = "Panambur Beach";

if(visitor == "high"){
  if(connect == "very good"){
    out = "NITK Beach";
  }
  if(connect === "good"){
    out = "Sasihithlu Beach";
  }
  if(connect === "bad"){
    out="Someshwar Beach";
  }
}

if(visitor === "low"){
  if(connect === "good"){
    out = "Mukka Beach";
  }
  if(connect === "very good"){
    out = "Ullal beach";
  }
  if(connect === "bad"){
    out="Batapady Beach";
  }
}

if(visitor ==="mid"){
  if(connect === "very good"){
    out = "Gangolli Beach";
  }
  if(connect === "bad"){
    out = "Kaup Beach";
  }
  if(connect === "good"){
    out="Full Moon Beach";
  }
}}

// tamil nadu
if(state === "tamil nadu"){
  out = "Marina Beach";

if(visitor === "high"){
  if(connect === "very good"){
    out = "Marina Beach";
  }
  if(connect === "good"){
    out = "Mahabalipuram Beach";
  }
  if(connect === "bad"){
    out="Kanyakumari Beach";
  }
}

if(visitor ==="low"){
  if(connect === "good"){
    out = "Covelong Beach";
  }
  if(connect === "very good"){
    out = "Elliot's Beach";
  }
  if(connect === "bad"){
    out="Ariyaman Beach";
  }
}

if(visitor === "mid"){
  if(connect === "very good"){
    out = "Kunthukal Beach";
  }
  if(connect === "bad"){
    out = "kanyakumari Beach";
  }
  if(connect === "good"){
    out="Dhanushkodi Beach";
  }
}}



//Odisa
if(state ==="odisha"){
  out = "Paradip Beach";

if(visitor === "high"){
  if(connect === "very good"){
    out = "Gopalpur Beach";
  }
  if(connect === "good"){
    out = "Astaranga Beach";
  }
  if(connect === "bad"){
    out="Puri Beach";
  }
}

if(visitor === "low"){
  if(connect === "good"){
    out = "Chandrabhaga Beach";
  }
  if(connect === "very good"){
    out = "Baliharchandi Beach";
  }
  if(connect === "bad"){
    out="Balighai Beach";
  }
}

if(visitor === "mid"){
  if(connect === "very good"){
    out = "Aryapalli Beach";
  }
  if(connect === "bad"){
    out = "Chandipur Beach";
  }
  if(connect === "good"){
    out="Balaramgadi Beach";
  }
}}

//west bengal

if(state ==="west bengal"){
  out = "Mandarmani Beach";
}
if(visitor === "high"){
  if(connect === "very good"){
    out = "Shankarpur Beach";
  }
  if(connect === "good"){
    out = "Astaranga Beach";
  }
  if(connect === "bad"){
    out="Puri Beach";
  }
}

if(visitor === "low"){
  if(connect === "good"){
    out = "Chandrabhaga Beach";
  }
  if(connect === "very good"){
    out = "Baliharchandi Beach";
  }
  if(connect === "bad"){
    out="Balighai Beach";
  }
}

if(visitor === "mid"){
  if(connect === "very good"){
    out = "Aryapalli Beach";
  }
  if(connect === "bad"){
    out = "Chandipur Beach";
  }
  if(connect === "good"){
    out="Balaramgadi Beach";
  }
}  

var strText="We got the right fit for you";

console.log(out);

alert(out);

}
