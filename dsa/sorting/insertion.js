const arr = [5, 8, 2, 0, 19, 23, 1]

for(let i=1;i<arr.length;i++){
    let j = i-1
    let temp = arr[i]
    while(temp<arr[j] && j>=0){
        arr[j+1] = arr[j]
        j--
    }
    arr[j+1] = temp
}

console.log(arr)