export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'red','../../assets/linkedin.png');
    static readonly CSHARP = new Tag('C#', 'blue','../../assets/linkedin.png');
    static readonly REACT = new Tag('React', 'red','../../assets/linkedin.png');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'red','../../assets/linkedin.png');
    static readonly PYTON = new Tag('Pyton', 'red','../../assets/linkedin.png');
    static readonly DART = new Tag('Dart', 'red','../../assets/linkedin.png');
    static readonly ASPNET = new Tag('ASP.NET', 'red','../../assets/linkedin.png');
    static readonly NODEJS = new Tag('Node.JS', 'red','../../assets/linkedin.png');
    static readonly FLUTTER = new Tag('Flutter', 'red','../../assets/linkedin.png');
    private constructor(private readonly key: string, public readonly color: string,public readonly iconPath: string) {

    }

    toString() {
        return this.key;
    }
}