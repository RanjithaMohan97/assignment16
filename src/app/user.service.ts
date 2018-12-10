import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/operator/map';
@Injectable()
export class UserService{
    private _userUrl = "./userDetails.json";
    constructor(private _http:Http){ }
getUsers(){
    return this._http.get(this._userUrl).map((response)=>response.json());
}
}
