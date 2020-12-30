import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title: string = "Exercises: Angular Lesson 3";

  color: string = "green";
  height: number = 0;
  width: number = 0;
  message: string = "Space shuttle ready for takeoff!";

  takeOffEnabled: boolean = true;

  handleTakeOff() {
    let result = window.confirm(
      "Are you sure the shuttle is ready for takeoff?"
    );
    if (result) {
      this.color = "blue";
      this.height = 10000;
      this.width = 0;
      this.message = "Shuttle in flight.";
    }
  }

  handleLand() {
    let result = window.confirm(
      "The shuttle is landing. Landing gear engaged."
    );
    if (result) {
      this.color = "Green";
      this.height = 0;
      this.width = 0;
      this.message = "The shuttle has landed.";
      this.takeOffEnabled = true;
    }
  }

  handleAbortMission() {
    let result = window.confirm("Are you sure you want to abort mission?");
    if (result) {
      this.color = "red";
      this.height = 0;
      this.width = 0;
      this.message = "Mission aborted.";
      this.takeOffEnabled = true;
    }
  }

  moveRocket(rocketImage, direction) {
    if (direction === "up" && this.height < 340000) {
      let movement = parseInt(rocketImage.style.bottom) + 10 + "px";
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
    }

    if (direction === "down" && this.height > 10000) {
      let movement = parseInt(rocketImage.style.bottom) - 10 + "px";
      rocketImage.style.bottom = movement;
      this.height = this.height - 10000;
    }

    if (direction === "right" && this.width < 470000) {
      let movement = parseInt(rocketImage.style.left) + 10 + "px";
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
    }

    if (direction === "left" && this.width > -20000) {
      let movement = parseInt(rocketImage.style.left) - 10 + "px";
      rocketImage.style.left = movement;
      this.width = this.width - 10000;
    }
  }

  warningColor(rocketImage) {
    if (
      this.height >= 340000 ||
      this.height <= 10000 ||
      this.width <= -20000 ||
      this.width >= 470000
    ) {
      this.color = "tomato";
    } else {
      this.color = "blue";
    }
  }
}
