

if(true){
    let a = 2;
    const b = 3
    // var c = 5
    // console.log("INNER: ", a);
    
}


// console.log(c)

function one(){
    const username = "Pratyush"
    function two(){
        const company = "google"
        // console.log(username);
        
    }

    // console.log(company);
    
    two()
}
one()


if (true){
    const username = "pratyush"
    if(username === "pratyush"){
        const website = " youtube"
        // console.log(username + website);

    }
    // console.log(website)

}

// console.log(username)


//  +++++++++++++++ interesting +++++++++++++++

addone(5)
 function addone(num){
    return num + 1
 }


addTwo(5)
const addTwo = function(num){
    return num + 2
 }