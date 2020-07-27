## Features including

1. Sort
2. Delete entry button
3. Choosing how many entries per page
4. Pagination
5. Search
6. Red row when isEmpty is false
7. Responsive

### Features for later

- Favourite and Save button
- Sidebar
- Advanced pagination
- Advanced sort
- Better design for Mobile viewing
- Better UI/UX

### Some of the issues I faced

- CORS is not enabled in that link. I had to use proxy to access the JSON, tried to add in the package.json but when I deploy it, it does not work. Therefore I had to figure out a new way to do it.

- There is a problem where every time I tried to add an input (for example selecting the entries per page or entering a text in the search bar) my chrome browser would crash. I can't see what is the problem since I cannot see the console log. I had a feeling that it is something to deal with the infinite loop, turns out I was right.
