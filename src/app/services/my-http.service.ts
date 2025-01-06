import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpOptions } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class MyHttpService {

  constructor() { }

public async get(options: HttpOptions): Promise<any> {
  const response = await CapacitorHttp.get(options);
  return response.data;
  }
}
