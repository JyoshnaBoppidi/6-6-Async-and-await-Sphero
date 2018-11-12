
test()


async function test() {
    let promise1 = await Promise.resolve(3)
    console.log("finished promise 1")

    let promise2 = await new Promise(function (resolve, reject) {
        setTimeout(resolve, 2000, 'foo')//add a 2 second delay
    })
    console.log("Finished promise 2")
    
    let promise3 = await Promise.resolve("Hello!")
    console.log("finished promise 3")
    

    Promise.all([promise1, promise2, promise3]).then(function (values) {
        console.log(values);
    })
}
