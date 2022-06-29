
export function moveKing(priecefile:any,rank:any):boolean{
    let rankBoolean : boolean  = false;
    let fileBoolean : boolean  = false;
    this.position.rank - rank == 1 || -1 ? 
    rankBoolean = true  : 
    false;

    this.position.file - priecefile ==-1 || 1 ?
    fileBoolean = true :
    false;

    if(fileBoolean && rankBoolean){
        return true
    };

    return false
}