import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // Importar los módulos necesarios

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  [x: string]: any;
 
  profileForm!: FormGroup;

  
  
  images: string[] = [
    'https://content.nationalgeographic.com.es/medio/2022/12/12/polar-1_73bd2c3b_221212161236_1280x720.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKDlJJvR32PCBv3JdqGieIDF0BnJPlYpOLZA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-W0XtD8YyDj60f5cHVEyYOmO14pHmJ33MgQ&s',
    'https://i.pinimg.com/236x/3d/a2/ef/3da2ef98c18e24c3e23c1bcda12ce2f1.jpg',
    'https://polarbear-world.com/wp-content/uploads/2024/01/conservacion-del-oso-polar-examine-excellent-jpg.webp',
    'https://cdn.agenciasinc.es/var/ezwebin_site/storage/images/_aliases/img_1col/multimedia/fotografias/oso-polar/5565363-1-esl-MX/Oso-polar.jpg'
  ];

  
  responsiveOptions = [
    { breakpoint: '1024px', numVisible: 1, numScroll: 1 },
    { breakpoint: '768px', numVisible: 1, numScroll: 1 },
    { breakpoint: '480px', numVisible: 1, numScroll: 1 }
  ];

  products = [
    { 
      name: 'Polar', 
      price: 567, 
      inventoryStatus: 'In Stock', 
      image: 'https://i.pinimg.com/736x/23/17/54/23175442f10608e55a487a75f26495a7.jpg'
    },
    { 
      name: 'Oso Polar', 
      price: 234, 
      inventoryStatus: 'Out of Stock', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN2KAwTm-gIxsFFF5W8w7Loqpkus9m3w8yuw&s'
    },
    { 
      name: 'Osos', 
      price: 57, 
      inventoryStatus: 'In Stock', 
      image: 'https://files.worldwildlife.org/wwfcmsprod/images/Polar_bear_cubs/story_full_width/16pc7wohn2_Small_WW22791.jpg' 
    },
    { 
      name: 'Polo', 
      price: 789, 
      inventoryStatus: 'In Stock', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzOKBb5KOKYX3gHO_0rsBr8f5zzPBtZmPDDA&s'
    },
    { 
      name: 'Nieve', 
      price: 45, 
      inventoryStatus: 'Out of Stock', 
      image: 'https://www.cimformacion.com/blog/wp-content/uploads/2014/08/oso-polar-bajo-agua-min.jpg' 
    },
    { 
      name: 'Sobrevivencia', 
      price: 67, 
      inventoryStatus: 'In Stock', 
      image: 'https://efeverde.com/wp-content/uploads/2022/01/osos-polar-pareja-cachorros.jpg' 
    },

  ];

  getSeverity(status: string): 'success' | 'secondary' | 'info' | 'warning' | 'danger' | 'contrast' {
    switch (status) {
      case 'In Stock':
        return 'success';
      case 'Out of Stock':
        return 'danger';
      case 'Low Stock':
        return 'warning';
      default:
        return 'info';
    }
  }

  
  constructor(private fb: FormBuilder) {}

  
  ngOnInit() {
    
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cedula: ['', Validators.required],
      direccion: ['', Validators.required],
      gender: ['', Validators.required],
      message: ['', Validators.required],
      agree: [false, Validators.requiredTrue],
    });
  }

  
  onSubmit() {
    if (this.profileForm.valid) {
      console.log("Formulario enviado:", this.profileForm.value);
    } else {
      console.log("Formulario inválido");
    }
  }
}
