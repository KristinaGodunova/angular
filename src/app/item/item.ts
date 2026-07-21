import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; // ОБЯЗАТЕЛЬНО
import { Item } from '../item'; // Путь к твоему интерфейсу

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule], // ОБЯЗАТЕЛЬНО здесь
  templateUrl: './item.html',
  styleUrl: './item.css',
})
export class ItemComponent {
  @Input() item!: Item;
  @Output() remove = new EventEmitter<void>(); // void, так как мы просто жмем на кнопку удаления

  editable = false; // Эта переменная управляет *ngIf

  saveItem(description: string) {
    if (!description) return;
    this.editable = false;
    this.item.description = description;
  }
}