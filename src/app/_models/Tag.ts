export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'red','../../assets/angular.png');
    static readonly CSHARP = new Tag('C#', 'blue','../../assets/csharp.png');
    static readonly REACT = new Tag('React', 'red','../../assets/react.png');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'red','../../assets/typescript.png');
    static readonly PYTHON = new Tag('Python', 'red','../../assets/python.png');
    static readonly DART = new Tag('Dart', 'red','../../assets/dart.png');
    static readonly DOTNET = new Tag('.NET', 'red','../../assets/dotnet.png');
    static readonly NODEJS = new Tag('Node.JS', 'red','../../assets/nodejs.png');
    static readonly FLUTTER = new Tag('Flutter', 'red','../../assets/flutter.png');
    private constructor(private readonly key: string, public readonly color: string,public readonly iconPath: string) {

    }

    toString() {
        return this.key;
    }
}