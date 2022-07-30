import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './components/pages/main/main.component';
import { CardComponent } from './components/organisms/card/card.component';
import { ImageComponent } from './components/atoms/image/image.component';
import { CardDescriptionComponent } from './components/molecules/card-description/card-description.component';
import { CardTitleComponent } from './components/atoms/card-title/card-title.component';
import { DescriptionComponent } from './components/atoms/description/description.component';
import { CardItemComponent } from './components/molecules/card-item/card-item.component';
import { ItemTitleComponent } from './components/atoms/item-title/item-title.component';
import { ItemImageComponent } from './components/atoms/item-image/item-image.component';
import { ItemPriceComponent } from './components/atoms/item-price/item-price.component';
import { CardActionsComponent } from './components/molecules/card-actions/card-actions.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CardComponent,
    ImageComponent,
    CardDescriptionComponent,
    CardTitleComponent,
    DescriptionComponent,
    CardItemComponent,
    ItemTitleComponent,
    ItemImageComponent,
    ItemPriceComponent,
    CardActionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
