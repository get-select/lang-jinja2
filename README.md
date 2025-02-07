# CodeMirror 6 language package template

Basic codemirror 6 language support for jinja2, using a lezer grammar.

Project starts from [lang-example](https://github.com/codemirror/lang-example) and draws inspirartion from [lang-jinja2](https://github.com/sdvinfo/lang-jinja2), which pins older versions its dependencies and [codemirror-lang-twig](https://github.com/ssddanbrown/codemirror-lang-twig), which is a more fully featured implementation of twig which is very similar to jinja2.


Not listed on npm, but can be installed with `npm i https://github.com/get-select/lang-jinja2` 

# Notable Shortcomings
The current release is mostly a copy of the above twig implementation, and some jinja2 features may be missing:
- The {% raw %} tag isn't properly supported
- `[]` style variables access isn't supported `{{user['name']}}`


# Support & Contributing
It's unlikely we will add any missing features to this package, as our usecase is fairly simple, but are open to pull requests!

New features should include test cases in `test/cases` directory.