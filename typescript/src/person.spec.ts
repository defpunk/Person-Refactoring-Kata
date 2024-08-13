import Person from "./person";

describe('person', () => {

    const swedishPersonalNumber = '19511111-7668';
    const role = Person.USER_ROLE_MANAGER;
    const phoneNumber = '00467123456';

    it('should calculate birth year from personal number', ()=> {
        const person = new Person(role, swedishPersonalNumber, phoneNumber );
        expect(person.birthYear()).toBe(1951)
    });

    it('should extract country code from phone number', () => {
        const person = new Person(role, swedishPersonalNumber, phoneNumber );
        expect(person.countryCode()).toBe('+46')
    });

    it('should be possible for Managers to delete users', () => {
        const person = new Person(role, swedishPersonalNumber, phoneNumber );
        expect(person.canDeleteUsers()).toBe(true)
    })

    it('should be possible for Admins to delete users', () => {
        const person = new Person(Person.USER_ROLE_ADMIN, swedishPersonalNumber, phoneNumber );
        expect(person.canDeleteUsers()).toBe(true)
    })

    it('should not be possible for Sales to delete users', () => {
        const person = new Person(Person.USER_ROLE_SALES, swedishPersonalNumber, phoneNumber );
        expect(person.canDeleteUsers()).toBe(false)
    })

    it('should not be possible for Engineers to delete users', () => {
        const person = new Person(Person.USER_ROLE_ENGINEER, swedishPersonalNumber, phoneNumber );
        expect(person.canDeleteUsers()).toBe(false)
    })

    it('should return empty country code when none added', () => {
        const person = new Person(role, swedishPersonalNumber, '0123456' );
        expect(person.countryCode()).toBe('')
    })

    it('should return country code when contained in phone number', () => {
        const person = new Person(role, swedishPersonalNumber, '+46123456' );
        expect(person.countryCode()).toBe('+46')
    })

});
