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

