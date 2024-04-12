async function test () {
    setTimeout(()=>{
        console.log("full")
    }, 2000)

}


await test.then(
    console.log("hahaha")
)