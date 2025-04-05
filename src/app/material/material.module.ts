import { NgModule } from "@angular/core";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { providePrimeNG } from "primeng/config";
import Aura from '@primeng/themes/aura';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';

const MaterialComponents=[
    ButtonModule,
    InputGroupModule,
    InputGroupAddonModule,
    FloatLabelModule,
    FormsModule,
    InputTextModule,
    SelectModule,
    InputNumberModule
]
@NgModule({

    imports: [MaterialComponents],
    providers: [
        provideAnimationsAsync(),
            providePrimeNG({
                theme: {
                    preset: Aura
                }
            })
      ],
    exports: [MaterialComponents]
})
export class MaterialModule { }