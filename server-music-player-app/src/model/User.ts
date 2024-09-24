// Define the User interface
interface User {
    username: string;
    password: string;
  }
  
  // Define the users array with proper typing
  let users: User[] = [
    {
      username: 'henok',
      password: 'h1234'
    },
    {
      username: 'nahom',
      password: 'n1234'
    },
    {
      username: 'eli',
      password: 'e1234'
    }
  ];
  
  // Define the sessions object with proper typing
  const sessions: { [key: string]: string } = {};
  
  export default class UserClass {
    constructor(public username: string, public password: string) {}
  
    // Static method to find a user
    static findUser(username: string, password: string): User | undefined {
      return users.find(user => user.username === username && user.password === password);
    }
  
    // Static method to add a session
    static addSession(token: string, username: string): void {
      sessions[token] = username;
    }
  
    // Static method to get a session
    static getSession(token: string): string | undefined {
      return sessions[token];
    }
  
    // Static method to remove a session
    static removeSession(token: string): void {
      delete sessions[token];
    }
  }
  