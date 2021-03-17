import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-festival",
  templateUrl: "./festival.component.html",
  styleUrls: ["./festival.component.css"]
})
export class FestivalComponent implements OnInit {
  name = "Festival ";
  public festivals;
  public nbFestivals;
  public nbTentative;

  ngOnInit(): void {
    this.festivals = [
      { name: "FJM2020", tables: 160 },
      { name: "FJM2018", tables: 80 },
      { name: "FJM2019", tables: 110 }
    ];
    this.nbFestivals = this.festivals.length;
    this.nbTentative = 0;
  }

  addFestival(): void {
    this.festivals.push({
      name: "Oui",
      tables: 100
    });
    this.nbFestivals += 1;
  }

  changeFestival(): void {
    this.nbTentative += 1;
    this.festivals[0].name = this.festivals[0].name + this.nbTentative;
  }
}
