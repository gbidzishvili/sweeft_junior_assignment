import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root',
})
export class ShowAlertService {
  constructor() {}
  showAlert() {
    Swal.fire({
      title: 'Invalid file type. Only .img and .jpg files are allowed.',
      showClass: {
        popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
        `,
      },
      hideClass: {
        popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
        `,
      },
    });
  }
}
