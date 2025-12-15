import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkPlace } from 'src/app/models/workPlace';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  data: any[] = [{ value: 30, label: 'aaa', color: 'red' }
  ];
  total: number = 0;
  startAngles: number[] = [];
  slices: any[] = [];
  chartOptions = {}
  myEmail = "odedoded777@gmail.com";
  whatsappUrl = "https://api.whatsapp.com/send?phone=9720503664101";
  resumeUrl = "assets/Oded bartov resume 2025.pdf";
  loading = false;
  workPlaces: WorkPlace[] = [];
  skills = [{ name: "C#", level: 5 },
  { name: "Angular", level: 5 },
  { name: "Java", level: 3 },
  { name: "Node", level: 2 },
  { name: "kafka", level: 3 },
  { name: "WPF", level: 3 },
  { name: "EF", level: 4 },
  { name: "SQL", level: 3 },
  { name: "GCP", level: 3 },
  { name: "AWS", level: 2 },
  { name: "Azure", level: 1 }
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.createPieChart();
    this.initCarousel();

    this.total = this.data.reduce((sum, item) => sum + item.value, 0);
    let currentAngle = 0;
    for (let i = 0; i < this.data.length; i++) {
      const percentage = (this.data[i].value / this.total) * 100;
      this.startAngles.push(currentAngle);
      currentAngle += percentage;
      this.slices.push({
        label: this.data[i].label,
        color: this.data[i].color
      });
    }
  }
  
  getSliceTransform(index: number): string {
    const startAngle = this.startAngles[index];
    console.log(startAngle)
    return `rotate(${startAngle}deg)`;
  }

  getConicGradient(index: number): string {
    const startAngle = this.startAngles[index];
    const endAngle = startAngle + (this.data[index].value / this.total) * 360;
    return `conic-gradient(from ${startAngle}deg to ${endAngle}deg, ${this.slices[index].color
      } 0%, ${this.slices[index].color} 100%)`;
  }

  sendWhatsapp() {
    window.open(this.whatsappUrl);
  }

  downloadResume() {
    this.loading = true;
    const link = document.createElement('a');
    link.href = this.resumeUrl;
    link.download = 'Oded bartov resume 2025.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    this.loading = false;
  }

  navigateToPortfolio() {
    this.router.navigate(['/portfolio']);
  }

  sendEmail() {
    const email = 'mailto:odedoded777@gmil.com';
    window.location.href = email;
  }

  createPieChart() {
    this.chartOptions = {
      animationEnabled: true,
      title: {
        text: "Programming orientation"
      },
      data: [{
        type: "pie",
        startAngle: 200,
        indexLabel: "{name}: {y}",
        indexLabelPlacement: "inside",
        yValueFormatString: "#,###.##'%'",
        dataPoints: [
          { y: 30, name: "Front end" },
          { y: 45, name: "Back end" },
          { y: 15, name: "Cloud" },
          { y: 10, name: "Management" }
        ]
      }]
    }
  }

  initCarousel() {
    this.workPlaces = [{
      company: "InfraEdge", title: "Fullstack developer", dateFrom: "03/2024", dateTo: "present", techs: ["C#", "Angular", "Kafka", "Redis", "MongoDb", "Postgres"], responsibilities: [
        "Standardized data exchange and validated payloads across small C# services communicating via Kafka, ensuring zero data duplication and 100% data fidelity through rigorous transaction management protocols",
        "Solved a highly complex, intermittent data loss issue within the Microservice/BFF communication layer that was causing a 15% fault rate in core requests. This required in-depth, multi-system tracing and architecture correction to resolve the subtle race condition, immediately securing mission-critical data integrity",
        "Architected and developed a high-performance Angular application integrating seamlessly with multiple Micro Frontends. Successfully navigated unusual client constraints, ensuring a unified user experience and smooth cross-application communication"
      ]
    },
    {
      company: "ONE", title: "Team leader", dateFrom: "03/2023", dateTo: "03/2024", techs: ["C#", "Angular", "SQL"], responsibilities: [
        "Directed the end-to-end overhaul of a large, aging application, migrating and refactoring all layers (C# server, Angular UI, data persistence) into a highly efficient new system. Simultaneously managed architecture decisions and execution for a team of 4 developers",
        "Lead the comprehensive design and specification of the entire system while overseeing programming team schedules. Took full responsibility for task management, ensuring timely and successful completion"
      ]
    },
    {
      company: "Capitolis", title: "Back-end developer", dateFrom: "08/2023", dateTo: "12/2023", techs: ["Java", "Postgres", "RabitMQ", "Docker", "Redis"], responsibilities: [
        "Solely managed the maintenance and development of an expansive system, serving as the backbone for some of the largest banks and hedge funds globally",
        "Played a key role in proactively addressing system features, promptly resolving bugs, and maintaining the overall integrity of the server infrastructure"]
    },
    {
      company: "mPrest (iron dome)", title: "Full-stack developer", dateFrom: "07/2021", dateTo: "07/2022", techs: ["C#", "Angular", "WPF"], responsibilities: [
        "Shouldered the responsibility for the maintenance and expansion of a critical system dedicated to identifying and intercepting airborne threats. Executed key initiatives to ensure the ongoing reliability, scalability, and advanced capabilities of the system, contributing to enhanced security measures",
        "Directed the control of a large-scale desktop application by meticulously addressing end-to-end bugs and conducting comprehensive analysis of features. Implemented strategic solutions to ensure seamless functionality and enhance overall performance, contributing to the optimization of the desktop application at a large scale",
        "Engineered and implemented a sophisticated communication platform for cameras and sensors, enabling seamless detection of objects and threats in the sky. Instrumental in building a robust system to enhance communication and detection capabilities for improved security measures"]
    },
    {
      company: "Sela group", title: "Full stack developer + lecturer", dateFrom: "08/2019", dateTo: "07/2021", techs: ["C#", "WPF", "JS", "SQL"], responsibilities: [
        "Implementing new features in the GUI, creating new functionality and maintain corresponding UI testing on the desktop application",
        "Expanded and enhanced the server infrastructure, integrating essential APIs to facilitate the seamless provision of required data and capture precise inputs. Played a key role in fortifying the server's capabilities, ensuring it effectively met the demands of the system by optimizing data access and input processes",
        "Teaching one-on-one and full-classes lessons, practicing frond and back end, servers, clouds, data bases and more",
        "Built an android app using angular nativescript, implementing google maps SDK and using firebase for server, DB and storage. The app is called Tripper and is free on google play"
      ]
    }]
  }

  navigateToLinkedin() {
    const url = "https://www.linkedin.com/in/oded-bartov-361510155/";
    window.open(url)
  }

  navigateToFacebook() {
    const url = "https://www.facebook.com/profile.php?id=100010459353916";
    window.open(url);
  }


  navigateToGithub() {
    const url = "https://github.com/odedBartov";
    window.open(url);
  }

  navigateToCodewars() {
    const url = "https://www.codewars.com/users/oded_Bartov";
    window.open(url);
  }
}
