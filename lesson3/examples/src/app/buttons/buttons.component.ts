import { Component, OnInit } from "@angular/core";

@Component({
  selector: "buttons",
  templateUrl: "./buttons.component.html",
  styleUrls: ["./buttons.component.css"],
})
export class ButtonsComponent implements OnInit {
  buttonHeading: string = "Buttons";
  inactiveGold: boolean = false;
  inactiveSilver: boolean = false;
  inactiveCopper: boolean = false;

  constructor() {}

  ngOnInit() {}
  reactivate() {
    if ((this.inactiveGold = true)) {
      this.inactiveGold = false;
    }
    if ((this.inactiveSilver = true)) {
      this.inactiveSilver = false;
    }
    if ((this.inactiveCopper = true)) {
      this.inactiveCopper = false;
    }
  }
}
