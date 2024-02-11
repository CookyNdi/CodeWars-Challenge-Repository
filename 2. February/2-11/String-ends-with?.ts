export function solution(str: string, ending: string): boolean{
    if(!ending) return true
    const arrA = str.split('').reverse().slice(0,ending.length).reverse();
    const arrB = ending.split('');
    let result = false
    for (let i = 0; i < arrA.length; i++) {
        if(arrA[i] !== arrB[i]){
            result = false
            break
        }else{
            result = true
        }
    }
    return result
}

export function solution(str: string, ending: string): boolean {
    return str.endsWith(ending);
}

console.log(solution('sumo', 'omo'))