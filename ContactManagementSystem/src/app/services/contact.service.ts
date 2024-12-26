import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Appsetting } from '../../config/appsetting'
import moment from 'moment';

import { HttpHeaders } from '@angular/common/http';
import { json } from 'd3';
import { Observable, retry } from 'rxjs';
import { Contact } from '../models/login.model';
@Injectable({
  providedIn: 'root'
})
export class ContactService extends BaseService {
  getAllContacts():Observable<any[]>
  {
    const getURi= Appsetting.GetContacts;
    return this.http.get<any[]>(getURi)
  }
  save(Cont:Contact)
  {
    const saveUri=Appsetting.AddContact;
    return this.http.post(saveUri,Cont)
  }
  delete(id:any)
  {
    const deleteUrl=Appsetting.DeleteUrl+id;
    return this.http.delete(deleteUrl);
  }
  updateContact(id: number, updatedContact: Contact) {
    const updateUrl = `${Appsetting.DeleteUrl}${id}`;
    return this.http.post(updateUrl, updatedContact)
  }
}
