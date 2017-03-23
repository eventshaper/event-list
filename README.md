# How to use it?

### Common case
1. Copy [*this*](https://github.com/eventshaper/events-list) repository to new GitHub project
2. Add organization **title**, **description**, **hash** & **locale** in *_config.yml" file
3. Remove README.md file
4. Rename *_index.html* to **index.html**
5. Push to GitHub master branch of the new project
6. Make GitHub project to serve Pages from master branch (in GitHub project *settings*)
7. Under *eventshaper.github.io/project_name* you should see list of events for give organization


### Example page
[Check how *{{ site.theme }}* template looks](example.html)


##### Note 1
The [example.html](example.html) page is using custom "base.html" file as *layout* which might not fit to currently expected HTML DOM structure expected by the theme *{{ site.theme }}* (CSS wise).
Adjust "base.html" and all files from *_includes* so they would match the expected HTML DOM structure.

##### Note 2
The original "base.html" structure was based on *jekyll-theme-minimal* theme