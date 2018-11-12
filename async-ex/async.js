
test()


async function test() {
    let promise1 = Promise.resolve(3)

    let promise2 = new Promise(function (resolve, reject) {
        setTimeout(resolve, 2000, 'foo')//add a 2 second delay
    })

    let promise3 = Promise.resolve("Hello!")
    
    promise1.then(function(){
        console.log("finished promise 1")
    })
    promise2.then(function(){
        console.log("finished promise 2")
    })
    promise3.then(function(){
        console.log("finished promise 3")
    })
    

    Promise.all([promise1, promise2, promise3]).then(function (values) {
        console.log(values);
    })
}

