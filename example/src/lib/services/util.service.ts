import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  public uniqueId(length = 32) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  public getTimeSpentText(duration) {
    const minutes = Math.floor(duration / 60);
    const seconds = Number(((duration % 60)).toFixed(0));
    return (minutes + ':' + (seconds < 10 ? '0' : '') + seconds);
  }
}
