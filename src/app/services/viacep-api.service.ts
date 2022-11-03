import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endereco } from '../model/endereco';

@Injectable({
  providedIn: 'root'
})
export class ViacepApiService {

  private url: string = 'https://viacep.com.br/ws';

  constructor(private httpClient: HttpClient) { }

  public enderecoPorCep(cep: string): Observable<Endereco> {
    return this.httpClient.get<Endereco>(`${this.url}/${cep}/json`);
  }
}
