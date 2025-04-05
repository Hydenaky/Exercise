import { NgModule } from "@angular/core";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { providePrimeNG } from "primeng/config";
import Aura from '@primeng/themes/aura';

const MaterialComponents=[

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