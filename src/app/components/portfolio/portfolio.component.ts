import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { PortfolioItem } from 'src/app/models/portfolioItem';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  animations: [
    trigger('slide', [
      transition('* => prev', [
        style({ transform: 'translateX(-20%)' }),
        animate('300ms ease-out', style({ transform: 'translateX(0%)' }))
      ]),
      transition('* => next', [
        style({ transform: 'translateX(20%)' }),
        animate('300ms ease-out', style({ transform: 'translateX(0%)' }))
      ])
    ])
  ]
})
export class PortfolioComponent implements OnInit {
  workItems: PortfolioItem[] = [];
  currentIndex = 0;
  animationState: string | null = null;

  constructor() { }

  ngOnInit(): void {
    const itemA = new PortfolioItem();
    itemA.imgSrc = "assets/focus.png";
    itemA.title = "Focus - Web app";
    itemA.url = "https://www.focus-app.co.il";
    itemA.description = "A system designed to help freelancers with every day work. The system monitors clients, payments, tasks, calendars, working time and much more. I also have implemented an AI agent that can answer user's personal questions like 'how many open projects do i have?' or 'which customer has the closest dead line'. The system is live online with actual paying users";
    itemA.techStack = ["C#", "Angular", "MongoDb", "Vertex.AI", "Webhooks", "Socket"];
    itemA.isOnline = true;

    const itemB = new PortfolioItem();
    itemB.imgSrc = "assets/tripper.jpeg";
    itemB.title = "Tripper - Mobile app";
    itemB.description = "A mobile app designed to show the user natural springs in their area based on google maps SDK with filters like distance, accessibility, depth and many more. The app supports users comments on each item and actual live communication and updates. Users can login with google sign in, facebook, or my own users management (hashing passwords and secure connection). I used Firebase for storage and serverless functions";
    itemB.techStack = ["Angular nativescript", "Firebase Storage", "Firebase functions", "Google login", "Google maps SDK", "Facebook login"];
    itemB.url = "Due to google bureaucracy the app is currently offline";

    this.workItems = [itemA, itemB];
  }

  get currentItem() {
    return this.workItems[this.currentIndex];
  }

  prev() {
    this.animationState = null;
    setTimeout(() => {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.animationState = 'prev';
      }
    }, 0);
  }

  next() {
    this.animationState = null;
    setTimeout(() => {
      if (this.workItems.length - 1 > this.currentIndex) {
        this.currentIndex++;
        this.animationState = 'next';
      }
    }, 0);
  }

  mouseEnterBackButton(img: Event) {
    const imgElement = img.target as HTMLImageElement;
    imgElement.src = "assets/back_icon_active.png";
  }

  mouseLeaveBackButton(img: Event) {
    const imgElement = img.target as HTMLImageElement;
    imgElement.src = "assets/back_icon_not_active.png";
  }

  mouseEnterNextButton(img: Event) {
    const imgElement = img.target as HTMLImageElement;
    imgElement.src = "assets/next_icon_active.png";
  }

  mouseLeaveNextButton(img: Event) {
    const imgElement = img.target as HTMLImageElement;
    imgElement.src = "assets/next_icon_not_active.png";
  }
}
