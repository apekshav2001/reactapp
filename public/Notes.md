After we imported we can add it to our jsx
Ever changes in the jsx of App.js is reflection to the app on chrome
Control inputs refer to inputs in react forms.
forms in react handled just a little differently and inputs are controlled 
for make it a controlled input we need to tie it up to state , we want to have one source of truth for the input and we want to change the state as the input chamges as well.
in html when u submit the page it reloads but we want to prevent this in react, we can do that by preventing the default behavior of the submit button , call the handlesubmit function / pass the handlesubmit into onsubmit listener for the form
!newItem = it's undefined or false
Preventdefault into onSubmit for searchform , that way when somebody presses enter we won't even have a button for form but when somebody presses enter it won't reload the page