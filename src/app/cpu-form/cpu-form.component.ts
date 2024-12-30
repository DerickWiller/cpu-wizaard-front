import { Component } from '@angular/core';
import { CpuRecommendationService } from '../cpu-recomendation.service'; // Importe o serviço
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { PopupContentComponent } from '../popup-content/popup-content.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cpu-form',
  templateUrl: '../cpu-form/cpu-form.component.html',
  styleUrls: ['../cpu-form/cpu-form.component.css']
})
export class CpuRecommendationComponent {
  energyConsumption: string = '';
  performance: string = '';
  cost: string = '';
  applicationType: string = '';

  errorMessage: string = '';
  cpuRecommendation: any;


  constructor(private cpuRecommendationService: CpuRecommendationService, private dialog: MatDialog) { }


  recommendation() {
    
    const criteria = {
      energyConsumption: this.energyConsumption,
      performance: this.performance,
      cost: this.cost,
      applicationType: this.applicationType
    };
    console.log('Dados enviados para a API:', criteria);
    this.cpuRecommendationService.getCpuRecommendation(criteria).subscribe(
      (response: any) => {
        this.cpuRecommendation = response;
        console.log('Resposta da API:', response);
      },
      (error: any) => {
        this.errorMessage = 'Erro ao obter a recomendação.';
        console.error('Erro na requisição:', error);
      }
    );
  }

  showMoreInfo() {
    this.cpuRecommendationService.getInfo().subscribe({
      next: (response) => {
        console.log("a reposta: ", response)
        this.dialog.open(PopupContentComponent, {
          data: {
            texto: response.message
          }
        });
      },
      error: (err) => {
        alert('Erro ao carregar informações: ' + err.message);
      }
    });
  }
}
