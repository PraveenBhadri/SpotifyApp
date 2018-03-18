import { Injectable } from '@angular/core';
import {Http,HttpModule,Headers} from '@angular/http';
import 'rxjs';

@Injectable()
export class SpotifyService {

private searchUrl:string;
private artistUrl:string; 
private albumUrl:string; 
private albumonlyUrl:string;
  constructor(private _http:Http ) {} 

  
 searchMusic(str:string,type='artist'){
     this.searchUrl="https://api.spotify.com/v1/search?query="+str+"&offset=0&limit=20&type="+type+"&market=US"; 
     return this._http.get(this.searchUrl)
     .map(res=> res.json());
 }
  

  
 getArtist(id:string ){
     this.artistUrl="https://api.spotify.com/v1/artists/"+ id; 
     return this._http.get(this.artistUrl)
     .map(res=> res.json());
 } 
  

 getAlbum(artistid:string ){
     this.albumUrl="https://api.spotify.com/v1/artists/"+ artistid+ "/albums"; 
     return this._http.get(this.albumUrl)
     .map(res=> res.json());
 }  

 getAlbumonly(id:string ){
     this.albumonlyUrl="https://api.spotify.com/v1/albums/"+id; 
     return this._http.get(this.albumonlyUrl)
     .map(res=> res.json());
 }  
}
