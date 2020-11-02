
import {HttpClient} from '@angular/common/http';


export class RestCaller {
    params = [];
    constructor (public httpClient : HttpClient){
    }
    callGetApi(path:string){
        // return this.httpClient.get('/HELP_DESK/'+path).forEach(result => this.showResult(result));
        return this.httpClient.get('/HELP_DESK/'+path);
    }
    callPostApi(path:string , json:any){
        const headers = { 'content-type': 'text/json'}
        // let api = await this.httpClient.post('/HELP_DESK/'+path,json,{'headers':headers}).forEach(result => this.showResult(result));
        return this.httpClient.post('/HELP_DESK/'+path,json,{'headers':headers});
    }




    callApi(type:string , path:string , json ){
        var result ;
        if (type.toUpperCase() == 'GET'){
            result = this.callGetApi(path);
        }
        else if (type.toUpperCase() == 'POST'){
            result = this.callPostApi(path , json);
        }
        return result ;
    }
    // showResult(result){
    //     var param = [];
    //     var arrayLenght = result.length;
    //     for( var i = 0 ; i < arrayLenght ; i++){
    //         param[i] = result[i];

    //     }
    //     return param;

    // }
}
