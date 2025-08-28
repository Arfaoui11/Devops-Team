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
    { id: 'PLTo6svdhIL1cxS4ffGueFpVCF756ip-ab', name: 'Playlist 2' },
    { id: 'PLTo6svdhIL1dmKROhDPix9DjGjuSkPMI6', name: 'Playlist 3' },
    { id: 'PLQP5dDPLts67aj6KZCeGOqm_f7JAJDsAD', name: 'Playlist 4' }
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
