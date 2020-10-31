
import {HttpClient} from '@angular/common/http';


export class RestCaller {
    public param = [];
    constructor (public httpClient : HttpClient){
    }
    async callGetApi(path:string){
        await this.httpClient.get('/HELP_DESK/'+path).forEach(result => this.showResult(result));
    }
    async callPostApi(path:string , json:any){
        const headers = { 'content-type': 'text/json'}
        await this.httpClient.post('/HELP_DESK/'+path,json,{'headers':headers}).forEach(result => this.showResult(result));
    }


    showResult(result){
        var arrayLenght = result.length;
        for( var i = 0 ; i < arrayLenght ; i++){
            this.param = result[i];
        }

    }
}
