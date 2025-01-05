import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage-angular";

@Injectable({ 
  providedIn: 'root'
})

export class MyStorageService {
  this.init();
}

async init() {
  await this.storage.create();
}

async set(key:string, value:any) {
await this.storage.set(key);
}

async get(key:string) {
  return await this.storage.get(key);
}
}
