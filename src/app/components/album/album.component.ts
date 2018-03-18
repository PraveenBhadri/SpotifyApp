import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import {Artist}  from '../../artist';
import {Album} from '../../album';
import {ActivatedRoute}  from '@angular/router'
@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
id:string;
album:Album[];
  constructor(private _spotifyService:SpotifyService,private _route:ActivatedRoute) { }


  ngOnInit() {
    this._route.params
    .map(params => params['id'])
    .subscribe((id)=> {
 
       
this._spotifyService.getAlbumonly(id)
      .subscribe(album => {
        this.album =album;
      } ) 
       
    }) 

  }

}
