// 4. Classes
interface IPerson {
  name: string;
  age: number;
  lang: string;
}

class Person {
  private name: string;
  private age: number;
  private lang: string;
  constructor(name: string, age: number, lang: string) {
    this.name = name;
    this.age = age;
    this.lang = lang;
  }

  public getName(): string {
    return this.name;
  }
}
