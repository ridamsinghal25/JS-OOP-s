// class Config {
//     static dbUser = 'usename';
//     static dbPassword = 'secret';
//     static apiToken = 'abcd';
// }

// console.log(Config.apiToken);

class User {
  static id = 1;

  static cache = {
    1: "some value",
  };

  constructor(name, age, income) {
    this.name = name;
    this.age = age;
    this.income = income;
    this.id = User.id++;
  }

  // only run once when we access an static property or method or when we
  // create an instance
  static {
    console.log("Initialized");
  }

  static hasInCache() {
    console.log(User.cache);
  }

  static compareByAge(user1, user2) {
    return user1.age - user2.age;
  }

  static compareByIncome(user1, user2) {
    return user1.income - user2.income;
  }
}

const user1 = new User("Rakesh K", 30, 5000);
User.hasInCache();
User.hasInCache();
const user2 = new User("John Doe", 40, 10000);
const user3 = new User("Jane Doe", 20, 7000);

const users = [user1, user2, user3];

users.sort(User.compareByAge);

users.sort(User.compareByIncome);

console.log(user1, user2, user3);

class Example {
  static {
    console.log("Initialized Exampled");
  }

  static sayHello() {
    console.log("Hello");
  }
}

Example.sayHello(); // "Initialized" (runs once), then "Hello"
Example.sayHello(); // Only "Hello" (static block doesn't run again)

const obj = new Example(); // No effect on static block, since it already ran
