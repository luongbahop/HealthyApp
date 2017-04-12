const people = [
    {name: 'TungCM', age: 25},
    {name: 'HopLB', age: 24},
    {name: 'TienLm', age: 26},
    {name: 'ThongNT', age: 26},
    {name: 'TheDV', age: 26}
]

export default () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(people)
        },2000)
    })
}