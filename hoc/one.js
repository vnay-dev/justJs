const one = () =>{
    console.log("Hello world")
}

const two = (one) =>{
    one()
}

two(one)