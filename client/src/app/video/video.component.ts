import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  playlists: { id: string, name: string }[] = [
    { id: 'PLBCF2DAC6FFB574DE', name: 'Playlist 1' },
    { id: 'PL9tY0BWXOZFvm04m4RjVj6ww2aXoaZFyV', name: 'Playlist 2' },
    { id: 'PLrEnWoR732-BHrPp_Pm8_VleD68f9s14-', name: 'Playlist 3' },
    { id: 'NfnVflt1Jxw', name: 'Playlist 4' }
  ];

  currentPlaylistId: string = this.playlists[0].id;

  width: string = '800';
  height: string = '500';

  get embedUrl(): string {
    return `https://www.youtube.com/embed/videoseries?list=${this.currentPlaylistId}`;
  }

  changePlaylist(id: string): void {
    this.currentPlaylistId = id;
  }



}
