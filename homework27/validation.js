export function validation(text) {
    let div = document.createElement('div') 
    div.classList.add('info') 
    div.innerHTML=""
    div.classList.add('active') 
    
    let p = document.createElement('p')
    p.innerHTML = text
    div.appendChild(p)
    
    return  div
}
