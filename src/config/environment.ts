import dotenv from 'dotenv';

export abstract class Environment {
    constructor() {
        this.setEnvironment();
    }

    public getEnvironmentValue(key: string): string {
        return process.env[key] || '';
    }

    public getEnvironmentAsNumber(key: string): number {
        return Number(this.getEnvironmentValue(key));
    }

    public get nodeEnv(): string {
        return this.getEnvironmentValue('NODE_ENV')?.trim() || '';
    }

    public createEnvPath(path: string): string {
        const envArr: string[] = ['env'];

        if (path.length > 0) envArr.unshift(path);

        return `.${envArr.join('.')}`;
    }

    public setEnvironment(): void {
        const envPath = this.createEnvPath(this.nodeEnv);

        dotenv.config({ path: envPath });
    }
}
