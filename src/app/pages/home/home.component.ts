import { Component, OnInit } from '@angular/core';
import { Endereco } from 'src/app/model/endereco';
import { ViacepApiService } from 'src/app/services/viacep-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  endereco!: Endereco;
  errorApi: boolean = false

  constructor( private cepApi: ViacepApiService){}

  ngOnInit(): void {
  }

  public consultarCEP(cep: string){
    this.cepApi.enderecoPorCep(cep).subscribe(
      res => {
        this.endereco = res
        this.errorApi = false
      },
      error =>{
        this.errorApi = error
      }
    )
  }
}
