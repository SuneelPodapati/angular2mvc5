# angular2mvc5
Angular 2 with MVC 5 template project

### Step # 1 – Install Typescript
In this first step, we will install Typescript for Visual Studio. Just go to this link (http://www.typescriptlang.org/#download-links) and download typescript for visual studio and then install it.

### Step # 2 – Install Node.js
In this second step, we will install Node.js. Just go to this link (https://nodejs.org/en/download/) and download required Node.js and then install it. It will also install npm

### Step # 3 – npm Configuration
Now in this step, we will configure visual studio to use npm. Just go to Tools => Options. It will show a new “Options” popup.
Then choose “External Web Tools” under Projects and Solutions from the left pane and then you will see four checkboxes in a list and the “Path” variable is at the third position. Just select the “Path” variable and bring it to the second position by just clicking on up arrow button. And then just click “OK” button. Once you do it, just restart your Visual Studio.

### Step # 4 – Create a new ASP.NET MVC 5 Project
Select Empty or MVC template

### Step # 5 – Add the Angular2 required files
app folder -> app.component.ts, app.module.ts, main.ts
Systemjs.Config.js
package.json
tsconfig.json

### Step # 6 – Add Angular 2 references 
Now in this step, we will add all the Angular 2 references into our project.
Just go to solution explorer => Views => shared folder => open a _Layout.cshtml file. And then add the below code into _Layout.cshtml file within head tag.

    <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl.~locale.en"></script>
    <script src="node_modules/core-js/client/shim.min.js"></script>
    <script src="node_modules/zone.js/dist/zone.js"></script>
    <script src="node_modules/reflect-metadata/Reflect.js"></script>
    <script src="node_modules/systemjs/dist/system.src.js"></script>
    <script src="systemjs.config.js"></script>
    <script>
        System.import('app').catch(function(err){ console.error(err); });
    </script>

### Step # 7 – Add Code for View
Now we will add code for our project view page. Go to solution explorer => Views => Home => open Index. Cshtml file. Then you will see some code in Index.cshtml file. Just replace below code with the Index.cshtml file code.

    <my-app >App Loading...</my-app>

### Step # 8 - Issue with  rxjs Observable
When you face issue with rxjs about Subject and Observable, add the following code to main.ts

    import { Operator } from 'rxjs/Operator';
    import { Observable } from 'rxjs/Observable';
    
    declare module 'rxjs/Subject' {
        interface Subject<T> {
            lift<R>(operator: Operator<T, R>): Observable<R>;
        }
    }


**Links:**  
https://stackoverflow.com/questions/44793859/rxjs-subject-d-ts-error-class-subjectt-incorrectly-extends-base-class-obs
http://dotnetdetail.com/how-to-setup-angular-2-with-asp-net-mvc-5/
