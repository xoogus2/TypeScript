export function somar (element: Array<number>):number {
    let i = 0;
    element.forEach(element => {
        i += element;
    });
    return i;    
  }
  

  export function mostrarMaior (element: Array<number>):number {
    return Math.max(...element) 
  }
  
  export function mostrarMenor (element: Array<number>):number {
    return Math.min(...element) 
  }
  