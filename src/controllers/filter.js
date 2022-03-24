export class Filter{
    static filterSectionBtn(arr, section){
        const listSection = arr.filter((element) => {
            return element.categoria === section
        })
    }
    
}