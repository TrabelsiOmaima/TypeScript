# TypeScript
typescript course for beginners

https://www.youtube.com/watch?v=2pZmKW9-I_k&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=3

        0. git commands:
        1. git branch -c new_branch_name : create new branch
        2. git checkout  new_branch_name : cd new_branch_name
        3. git add . : add all new changes/files to the new branch
        4. git commit -m "commit msg"
        5. git push origin HEAD




1. what typescript is ??
        - is an alternative to JavaScript (~more advanced)
        - we write in TypeScript , but it compiles like JavaScript
        +
        - JavaScript : use Dynamic Tapes =>  TypeScript : use Strict Types
        - typescript also supports modern features (of JavaScript cuz it compiles en JavaScript) like : arrow functions, let, const,...etc
        - TypeScript supports Extra features (don't exist in JavaScript) like : generics, interfaces, tuples...etc

        PS : browser don't capable to read TypeScript code, so for this it changes to regular JavaScript , and principal it used cuz it easier than JavaScript for the developers ( OO, strict types, classes...etc)




2. compiling typescript into JavaScript :
                -install package "live server" to open files HTML directly like a browser
                - index.html link to sandbox.js not to sandbox.ts because browser don't read typescript 
                - compile ts to JS : 
                tsc sandbox.ts sandbox.js // compile, convert ts to js
                tsc sandbox.ts // if .js has same name .ts
                tsc sandbox.ts // if .js not exist .. auto create .js same name
                => generate error in ts file, it's okay, just close js file (variables same names "collusion")

                tsc sandbox.ts -w // to make changes automatics





3. Type Basics : 
                - typescript use STRICT TYPES 
                - the type is implicit (auto terminal) switch the variable value
                        let age = 30;
                - you can't change the type of variable already declared
                        //age =  'yoshi';  /Type 'string' is not assignable to type 'number'

                - but you can change it value 
                - you must mention the type of methods arguments :
                        const circ = (diameter : number) => {
                        }



4. objects Arrays :
                + arrays :
                        - if you declare it only as (numbers or string or boolean) , so u can't add other type
                        - but if you declare it as multi types , you can add, change, (but only the types of start)
                + objects :
                        - when you define an object , you should :
                                - strictly respect it stricter (properties : names + types )
                                - you can't add new property 



5. Explicit types :
        - when you don't know the value , you declare the variable with explicit type :
                - string , number , boolean :
                        (let x : string) : simple type = string
                        ( let id: string|number; ) = union types
                - arrays : 
                        (let ninjas: string[] = [];) : tab of strings ( ps : if u don't put [], u can't use .push() )
                        ( let mixed: (string|number|boolean)[] = [];) : mixed tab  : union types
                - object :
                        let ninjaTwo: {
                        name: string,
                        age: number,
                        beltColour: string
                        };


6. Dynamic "any" type : 
        + declare variable|array|objects , with the keyword "any" :
                - it can be any type
                - u can change it type any time, without get an error 



7. tsconfig.json ( better workflow tsconfig ):
        - structure d'un project : 
                + public >            / need to compile
                        file.html
                        file.js
                        file.css
                + src >              / don't need to compile
                        file.ts
                => prblm = ( tsc src/file.ts ) auto generation of file.js in src folder 
                => slt : tsc --init 
                        auto generate of "tsconfig.json"  = JavaScript compilation file details :

        - tsconfig.json :
                "target": "es2016",  ~js version
                "rootDir": "./src",   each file.ts from src folder , compile in :   "outDir": "./public",  public folder   
                => now : just execute :
                tsc or tsc -w (in main folder = typeScript), and all files.ts (/src) are compiled in /public files.js
                Prblm : any file.ts (from any folder , it auto compile )
                => slt : add : ( "include": ["src"])  : to only compile file.ts exist in src folder


8. Function basics :
        - basically, we will work with arrow functions
        - "Function" is like other types (string, number, array, object,...) => strict type
        - for functions arguments type :
                - strict type, we can use also union type
                - you should respect the number, the types of arguments
                - if u have optional argument or argument has default value, you must put it in the end
                - c is optional (c?: number ) 
                - default value = 10 (c: number = 10)
                - return type(number , void,..) implicit or explicit , but in general  is auto 
                - if an argument has default value , u can ignore ? Optional mark
                        const add = (a: number, b: number, c/*?*/: number | string = 10): void => {
                                console.log(a + b);
                                console.log(c);
                        }


9. type Aliases :
        - definir un type personnalis?? selon le besoin 
        - expl : 
                type StringOrNumber = string | number;
                type objWithName = { name: string, uid: StringOrNumber} ;

                const logDetails = (uid : StringOrNumber, item: string) => {
                console.log(`${item} has a uid of ${uid}`);
                }


10. functions signatures :
        - when we declare a variable type function with the type of arguments and the return type :
        => we should strictly respect this structure (numbers and types, arguments and return)
        example :
                let logDetails: (obj: {name: string, age: number}) => void;

                logDetails = (ninja: {name: string, age: number}) => {
                console.log(`${ninja.name} is ${ninja.age} years old`);
                }

11. DOM type casting : ------------- we start coding our application
        - like JavaScript ,typescript can use the anchor + you can access to it properties ..etc
        -  u can't access directly to a property of an HTML element:   console.log(anchor.href) //error (cuz we don't sure that will return a result)
        => slt :
                a.  anchor = document.querySelector('a')! / "!" : developer said look I know this exist
                b. test :  if(anchor) {console.log(anchor.href); }
                c. case of class of HTML element (.new-item-form) not an HTML element(form) 
                        we can't use methods and property of element, so we cast it with "as" :
                        const form = document.querySelector('.new-item-form') as HTMLFormElement;
                        console.log(form.children);
                with id :
                const details = document.querySelector('#details') as HTMLInputElement;





12. Classes :
        - typescript OO
        - classes .. Properties.. Constructor... methods..
        - instance : - we should respect parameters (prop and methods) (number, type)




13. public, private, readonly : typescript modifiers
        - all properties are public par default ??? problem !
        - change them : in the constructor
                readonly client: string, 
                private details: string, 
                public amount: number,






14. Modules : management of project ( folders structure)
        - tsconfig.json :
                "target": "es6",                          
                "module": "es2015",    
        - index.html :
                <script type="module" src='app.js'></script>

        src > 
                app.ts (import { Invoice } from './classes/Invoice.js';
        )
                classes > 
                        classeifile.ts (export class Invoice {})
                        ...






15. interfaces
        - we don't have interfaces in JavaScript
        - like a class , interface has properties band methods
        - we don't instance an interface ??? no constructor
        - we should respect parameters (prop and methods) (number, type)
        - un interface implement by a class




16. interfaces with classes :
        - an interface defines how an object should look
        - if a class implement an interface, each objects of this class should :
                Implement this interface and absolutely respect it structure.

                app.ts>
                import { HasFormatter } from './interfaces/HasFormatter.js';

                let doc: HasFormatter;
                doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);

                interfaces > HasFormatter.ts >
                export interface HasFormatter {
                format(): string;
                }




17. creating a renderListeItem class :
        - render list of adding items
        app.ts>
        ListTemplate.ts>



18.  GENERICS
        - typescript features 
        - Generics : create reusing blocs of code (#types) 
        - <T>  
        - example :
                interface Resource<T> {
                uid: number;
                resourceName: string;
                data: T;
                }




19. Enums
        - specific type :
        - example :
                enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR };

                const docOne: Resource<object> = {
                uid: 1,
                resourceType: ResourceType.BOOK,
                data: { title: 'name of the wind' }
                }
                const docTwo: Resource<object> = {
                uid: 10,
                resourceType: ResourceType.DIRECTOR,
                data: { title: 'name of the wind' }
                }



20. Tuples
        - specific type 
        - like an array but when we declare it , we should define it structure ( number and type )
        - we should strictly respect this structure when we use it
        - example :
                nrml tab : 
                        let arr = ['ryu', 25, true];
                        arr = [30, false, 'yoshi'];
                tuple :
                        let tup: [string, number, boolean] = ['ryu', 25, true];




21. typeScript documentation :
        https://www.typescriptlang.org/docs/


