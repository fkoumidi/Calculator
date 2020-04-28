let w;
let copy_r = 0; //για να κραταω το result 
const symbols = ["+", "-", "*", "/", "=", "^"]
let nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", copy_r];
let p = ["0"]; // ο βασικος πινακας του προγραμματος
let r = 0; //το result
let x; //για το print
let dot = true; //για να μπλοκαρω το repeat στο ","
let a; //ειναι για κραταω στο delete και να ελεγχω το dot
let sum = "";

function myPrint() {
    for (let j = 0; j <= p.length - 1; j++) {
        if (j == 0) {
            x = p[j];
        } else {
            x = x + p[j];
        }

        parametres.innerHTML = x; //εδω ελεγχος αν ειναι στην σωστη σειρα μην εχει πχ ++ μαζι
    }
}

function myDelete() {
    a = p.pop();
    if (p.length > 0) {
        myPrint();
    } else {
        parametres.innerHTML = "0";
        p.push("0")
    }
    console.log(p)
    if (a == ".") {
        dot = true;
    }
}

function myC() {
    p = ["0"];
    r = 0;
    parametres.innerHTML = "0";
    dot = true;
    console.log(p);
}

function mySymbols(clik) {
    if (p[0] == copy_r) {
        p.push(clik)
    } else if ((p[p.length - 1] in nums) || (p[p.length - 1] == ".")) {
        p.push(clik)
    } else {
        p[p.length - 1] = clik;
    }
    myPrint();
    dot = true;

}

function myFloat() {
    if (dot == true) {
        p.push(".")
        dot = false;
    }
    myPrint();
}

function myFunction(cliked) {
    if ((p[0] == "0") && (p.length == 1)) {
        p.pop();
    }
    p.push(cliked);
    //let x = document.getElementById("parametres").innerHTML
    console.log(p);

    myPrint();
}

function mySqrt() {
    w = nums.indexOf(p[p.length - 1])
    if ((w < 0)) {
        p.push("√");
        console.log(w, "geia sas", p)
    } else if (p[0] == "0") {
        p.pop();
        p.push("√");
    }
    myPrint();
}

function myEqual() {
    p.push("=");

    if (p[p.length - 2] == "√") {
        parametres.innerHTML = `Error:Requires Number before "=" `
    } else {
        while (p.includes("√")) {
            console.log(`iparxei riza`)
            s = p.indexOf("√")
            while (p[s + 1] in nums) {
                p.splice(s, 1);
                sum = sum + p[s];
                console.log("do", p, sum)
            }
            p[s] = parseFloat(sum);
            p[s] = Math.sqrt(p[s]);
            p[s] = p[s].toString();
            sum = "";
        }
        console.log(p, " meta ti riza")

        let ar = [];
        let j = 0;
        let k = 0;
        let b;


        for (let i = 0; i < p.length; i++) {
            b = false;
            if (symbols.includes(p[i])) {
                console.log(`mpike sto:${i}`)
                b = true;
            }
            if (b) {
                neo = p.slice(j, i)
                ar[k] = neo.reduce((a, b) => a + b)
                ar[k] = parseFloat(ar[k])
                ar[k + 1] = p[i];
                j = i + 1;
                k = k + 2
            }
        }

        console.log(ar);
        p = ar;

        while (p.includes("^")) {

            s = p.indexOf("^");
            console.log(s);
            p[s] = Math.pow(p[s - 1], p[s + 1]);
            console.log(p);
            p.splice(s - 1, 1);
            console.log(p);
            p.splice(s, 1);
            console.log(p);


        }

        while (p.includes("/") || p.includes("*")) {
            if (p.includes("/")) {
                s = p.indexOf("/");
                console.log(s);
                p[s] = p[s - 1] / p[s + 1];
                console.log(p);
                p.splice(s - 1, 1);
                console.log(p);
                p.splice(s, 1);
                console.log(p);
            } else {
                s = p.indexOf("*");
                console.log(s);
                p[s] = p[s - 1] * p[s + 1];
                console.log(p);
                p.splice(s - 1, 1);
                console.log(p);
                p.splice(s, 1);
                console.log(p);

            }
        }


        console.log(p);

        r = p[0];
        for (let i = 2; i < p.length; i += 2) {
            if (p[i - 1] == "+") {
                r += p[i];
            } else if (p[i - 1] == "-") {
                r -= p[i];
            }
            console.log(r);
        }

        console.log(`to apotelesma einai:${r}`);
        parametres.innerHTML = r;
        copy_r = r.toString();
        p = [];
        p.push(copy_r);
        nums[11] = copy_r;
        r = 0;
        console.log(p, copy_r, nums);
        dot = true;


    }




}