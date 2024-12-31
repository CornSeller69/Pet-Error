function calculate(c) {
          if (c % 5 == 0) {
          alert("Set can be selected!");
     } else {alert("Set cannot be selected");}
     return c;
}

let d = prompt("Warning You may only asset sets that divide by 5.");
console.log(calculate(d));