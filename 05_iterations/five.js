const coding = ["js", "ruby", "java", "pyhton", "cpp"]

coding.forEach( function (item) {
    console.log(item);
    
} )

coding.forEach(function (val) {
    console.log(val)
})

coding.forEach( (item) => {
    console.log(item)
} )

function printMe(item){
    console.log(item)
}

coding.forEach(printMe)

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
})

const myCoding = [
    {
        langName: "javascript",
        langfilename: "js"
    },
    {
        langName: "java",
        langfilename: "java"
    },
    {
        langName: "python",
        langfilename: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.langName);
    
} )