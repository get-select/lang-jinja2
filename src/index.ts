import {parser} from "./syntax.grammar"
import {LRLanguage, LanguageSupport} from "@codemirror/language"
import {styleTags, tags as t} from "@lezer/highlight"
import {completeFromList} from "@codemirror/autocomplete"

export const jinja2Language = LRLanguage.define({
  parser: parser.configure({
    props: [
      styleTags({
        Identifier: t.variableName,
        Boolean: t.bool,
        String: t.string,
        Number: t.number,
        BlockComment: t.blockComment,
        CodeTag: t.keyword,
        Comparison: t.compareOperator,
        Operator: t.operator,
        Math: t.arithmeticOperator,
        "Function/Identifier": t.function(t.definition(t.variableName)),
        "( )": t.paren,
        "{ }": t.brace,
        "{{ }} {% %}": t.meta,
      })
    ]
  }),
  languageData: {
    commentTokens: {block: {open: "{#", close: "#}"}}
  }
})

export const jinja2Completion = jinja2Language.data.of({
  autocomplete: completeFromList([
    {label: "extends", type: "keyword"},
    {label: "from", type: "keyword"},
    {label: "import", type: "function"},
    {label: "if", type: "keyword"},
    {label: "elif", type: "keyword"},
    {label: "else", type: "keyword"},
    {label: "endif", type: "keyword"},
    {label: "for", type: "keyword"},
    {label: "endfor", type: "keyword"},
  ])
})

export function jinja2() {
  return new LanguageSupport(jinja2Language, [jinja2Completion])
}