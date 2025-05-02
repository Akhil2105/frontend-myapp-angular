import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app';
  toastVisible = false;
  toastMessage = '';

  showToast(message: string) {
    this.toastMessage = message;
    this.toastVisible = true;

    setTimeout(() => {
      this.toastVisible = false;
    }, 3000); // auto-hide after 3 seconds
  }
  confirmVisible = false;
  confirmMessage = '';
  onConfirmCallback: (() => void) | null = null;

  showConfirm(message: string, callback: () => void) {
    this.confirmMessage = message;
    this.onConfirmCallback = callback;
    this.confirmVisible = true;
  }

  confirm() {
    this.confirmVisible = false;
    if (this.onConfirmCallback) {
      this.onConfirmCallback();
    }
  }

}
