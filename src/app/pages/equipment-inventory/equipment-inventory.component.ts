import { Component, OnInit } from '@angular/core';
import { EquiposService } from '../../services/equipos.service';

@Component({
  selector: 'app-equipment-inventory',
  templateUrl: './equipment-inventory.component.html',
  styleUrls: ['./equipment-inventory.component.css']
})
export class EquipmentInventoryComponent implements OnInit {
  equipos: any[] = [];

  constructor(private equiposService: EquiposService) {}

  ngOnInit() {
    this.equiposService.getEquipos().subscribe(res => {
      if (res.ok) {
        this.equipos = res.data;
      }
    });
  }
}
