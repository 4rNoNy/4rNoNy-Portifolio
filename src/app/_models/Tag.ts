export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly CSHARP = new Tag('C#', 'blue');
    static readonly REACT = new Tag('React', 'red');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'red');
    static readonly PYTON = new Tag('Pyton', 'red');
    static readonly JAVA = new Tag('Java', 'red');
    static readonly ASPNET = new Tag('ASP.NET', 'red');
    static readonly NODEJS = new Tag('Node.JS', 'red');
    private constructor(private readonly key: string, public readonly color: string) {

    }

    toString() {
        return this.key;
    }
}