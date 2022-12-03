import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';



export interface DataModuleConfiguration {
  name: string;
}


export const DATA_MODULE_CONFIGURATION = new InjectionToken<DataModuleConfiguration>("XYZ/DataModuleConfiguration");

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DetailComponent
      }
    ])
  ],
  declarations: []
})
export class DataModule { 
  static configure(
    config: DataModuleConfiguration
  ) : ModuleWithProviders<DataModule> {
    return {
      ngModule: DataModule,
      providers: [{
        provide: DATA_MODULE_CONFIGURATION,
        useValue: config
      }]
    };

  }
}