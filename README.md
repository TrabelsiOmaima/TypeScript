# TypeScript
typescript course for beginners

https://www.youtube.com/watch?v=2pZmKW9-I_k&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=3

0. git commands:
1. git branch -c new_branch_name : create new branche
2. git checkout  new_branch_name : cd new_branch_name
3. git add . : add all new changes/files to the new branch
4. git commit -m "commit msg"
5. git push origin HEAD




1. what typescript is ??
        - is an alternative to JavaScript (~more advanced)
        - we write in typeScript , but it compile like JavaScript
        +
        - JavaScript : use Dynamique TYpes =>  TypeScript : use Strict Types
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
                                - strictement respect it structer (propertys : names + types )
                                - you can't add new property 



5. Explicit types :
        - when you don't know the value , you declare the variable with explicit type :
                - string , number , boolean :
                        (let x : string) : simple type = string
                        ( let uid: string|number; ) = union types
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
        - structure d'un projet : 
                + public >            / need to compile
                        file.html
                        file.js
                        file.css
                + src >              / don't need to compile
                        file.ts
                => prblm = ( tsc src/file.ts ) auto generation of file.js in src folder 
                => slt : tsc --init 
                        auto genere of "tsconfig.json"  = javaSCript compilation file details :

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
        - definir un type personnalisé selon le besoin 
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
- like javaScript ,typeScript can use the anchor + you can acces to it proprtitys ..etc
-  u can't accecs directly to a proprety of an html elemnnt:   console.log(anchor.href) //error (cuz we don't sure that will return a result)
=> slt :
        a.  anchor = document.querySelector('a')! / "!" : devlopper said look i know this exise
        b. test :  if(anchor) {console.log(anchor.href); }
        c. case of classe of html elemnt (.new-item-form) not an html elemnt(form) 
                we can't used methodes and property of elemnt so we cast it with "as" :
                 const form = document.querySelector('.new-item-form') as HTMLFormElement;
                console.log(form.children);
        with id :
         const details = document.querySelector('#details') as HTMLInputElement;



12. Classes :
        - typeScript OO
        - clasess .. propertys.. constructer... methodes..


13. public,private,readonly : typescript modifiers
        - all propreties are public par defualt => prblm
        - change it : in the constrctor
                readonly client: string, 
                private details: string, 
                public amount: number,