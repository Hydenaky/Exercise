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
import { ReactiveFormsModule } from '@angular/forms';






































// de aqui pa bajo
import { TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import {MatDialogModule} from '@angular/material/dialog';
const MaterialComponents=[ 
    MatDialogModule,
    ButtonModule,
    InputGroupModule,
    InputGroupAddonModule,
    FloatLabelModule,
    FormsModule,
    InputTextModule,
    SelectModule,
    InputNumberModule,
    TableModule,
    IconFieldModule,
    InputIconModule,
    ToggleSwitchModule,
    ReactiveFormsModule
]
@NgModule({

    imports: [MaterialComponents],
    providers: [
        provideAnimationsAsync(),
        providePrimeNG({
                theme: {
                    preset: Aura
                }
            }),
        
      ],
    exports: [MaterialComponents]
})
export class MaterialModule { }