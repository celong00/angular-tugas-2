import { Injectable } from '@angular/core';

@Injectable()
export class GlobSerService {
  public Data=[{
    nama:'Nama',
    penjelasan:'Jurusan'
  }];
  public getData(){
    return this.Data;
  }
  public setData(databaru){
    this.Data=databaru;
  }
  public editData(datake,databaru){

    this.Data[datake].penjelasan=databaru;
  }
  constructor() { }

}