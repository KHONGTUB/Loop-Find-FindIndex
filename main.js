

let number = [22, 13, 44, 55, 100, 201]



const find = (array, callback) =>{
    for(let i = 0 ; i <array.length; i++){
        let item = array[i]

        if(callback(item)){
            return array[i]
        }
    }
}


const findIndex = (array, callback) =>{
    for(let i = 0; i <array.length; i ++){
        let item = array[i]

        if(callback(item)){
            return i
        }
    }
}

const condition = (item) => {
    if(item > 90){
        return true
    }
}
console.log(find(number, condition))

console.log(findIndex(number, condition))