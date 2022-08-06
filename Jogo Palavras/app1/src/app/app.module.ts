import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PainelComponent } from './painel/painel.component';
import { TopoComponent } from './topo/topo.component';
import { TentativasComponent } from './tentativas/tentativas.component';
import { ProgressoComponent } from './progresso/progresso.component';

@NgModule({
  declarations: [AppComponent, PainelComponent, TopoComponent, TentativasComponent, ProgressoComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
