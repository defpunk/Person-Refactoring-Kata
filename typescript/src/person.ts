export default class Person {

    static readonly USER_ROLE_ADMIN = 0;
    static readonly USER_ROLE_ENGINEER = 1;
    static readonly USER_ROLE_MANAGER = 2;
    static readonly USER_ROLE_SALES = 3;

    private role: number;
	private swedishPersonalNumber: string;
    private phoneNumber: string;

    constructor(role: number, swedishPersonalNumber: string, phoneNumber: string) {
        this.setRole(role);
        this.setSwedishPersonalNumber(swedishPersonalNumber);
        this.phoneNumber = phoneNumber;
    }

    public getRole(): number {
        return this.role;
    }

    public setRole(role: number): void {
        if (role < 0 || role > 4)
            throw new Error("illegal role " + role);
        this.role = role;
    }

    public getSwedishPersonalNumber(): string{
        return this.swedishPersonalNumber;
    }

    public setSwedishPersonalNumber(swedishPersonalNumber: string) {
        swedishPersonalNumber = swedishPersonalNumber.replace("-", "");
        if (swedishPersonalNumber.length != 12)
            throw new Error("invalid personal number " + swedishPersonalNumber);
        this.swedishPersonalNumber = swedishPersonalNumber;
    }

    public getPhoneNumber(): string {
        return this.phoneNumber;
    }

    public setPhoneNumber(phoneNumber: string): void {
        this.phoneNumber = phoneNumber;
    }

    public birthYear(): number {
        const year = this.swedishPersonalNumber.substring(0, 4);
        return Number.parseInt(year);
    }

    public countryCode(): string {
        let code = "";
        if (this.phoneNumber.startsWith("00"))
            code = this.phoneNumber.substring(2, 4);
        else if (this.phoneNumber.startsWith("+"))
            code = this.phoneNumber.substring(1,3);
        if (!(code.length === 0))
            return "+" + code;
        return "";
    }

    public canDeleteUsers(): boolean {
        return this.role === Person.USER_ROLE_MANAGER || this.role === Person.USER_ROLE_ADMIN;
    }
}