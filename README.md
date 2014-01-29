Ajax-Tips
=========
Note: This project needs to be rebuilt in visual studio the first time you load the solution so it resolves all the packages via Nuget.
Uses a "Dummy" WebAPI backend for making calls to a faked service that returns very simple data, no need for building a database first to get this to run and practice making ajax calls against a web service.

Another thing of note is you have to type the html file you want to get to in the url to navigate to it once debugging the project, for example in your browser put this once the project has been built and run

http://localhost/customers.html

That takes you to the customers page, other pages just put the html in. Just did this to keep the pages as simple html.