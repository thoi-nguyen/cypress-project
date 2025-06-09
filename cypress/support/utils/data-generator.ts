import { faker } from "@faker-js/faker";

export class DataGenerator {
  /**
   * Generate a random first name
   */
  static generateFirstName(): string {
    return faker.person.firstName();
  }

  /**
   * Generate a random last name
   */
  static generateLastName(): string {
    return faker.person.lastName();
  }

  /**
   * Generate a random email
   */
  static generateEmail(): string {
    return faker.internet.email();
  }

  /**
   * Generate a random company name
   */
  static generateCompanyName(): string {
    return faker.company.name();
  }

  /**
   * Generate a random message
   */
  static generateMessage(): string {
    return faker.lorem.paragraph();
  }

  /**
   * Generate a random role
   */
  static generateRole(): string {
    return faker.company.name();
  }
}
