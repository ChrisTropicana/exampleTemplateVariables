import { Component } from "@angular/core";

interface User {
  name: string;
  email: string;
}

interface Message {
  text: string;
  createdBy: User;
}

const someUsers: User[] = [
  {
    name: "Christos",
    email: "christos@domain.com"
  },
  {
    name: "A friend",
    email: "friend@domain.com"
  }
];

const someMessages: Message[] = [
  {
    text: "Hi. How are you?",
    createdBy: someUsers[0]
  },
  {
    text: "I am fine thanks. How are you?",
    createdBy: someUsers[1]
  }
];

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  currentUser: User = someUsers[0];
  users: User[] = someUsers;
  messages: Message[] = someMessages;
}
